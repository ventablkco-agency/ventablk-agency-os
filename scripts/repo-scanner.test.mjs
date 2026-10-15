import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { scanRepositories } from "./repo-scanner.mjs";

async function makeRepo(root, relativePath, options = {}) {
  const dir=join(root,relativePath);
  await mkdir(dir,{recursive:true});
  const init=spawnSync("git",["init","-q",dir],{encoding:"utf8"});
  assert.equal(init.status,0,"git init should work for test fixture");
  if(options.remote)spawnSync("git",["-C",dir,"remote","add","origin",options.remote],{encoding:"utf8"});
  if(options.packageJson)await writeFile(join(dir,"package.json"),JSON.stringify(options.packageJson));
  if(options.projectConfig)await writeFile(join(dir,"ventablk.project.json"),JSON.stringify(options.projectConfig));
  for(const extra of options.extras||[]){
    const p=join(dir,extra);
    if(extra.endsWith("/"))await mkdir(p,{recursive:true});else await writeFile(p,"fixture content");
  }
  return dir;
}
test("detects framework and never runs project scripts",async()=>{
  const root=await mkdtemp(join(tmpdir(),"ventablk-scan-"));
  try{
    await makeRepo(root,"astro-site",{remote:"https://scanner-user:secret-token@github.com/example/astro-site.git?token=should-not-leak",packageJson:{name:"sample-web",dependencies:{astro:"1"},scripts:{build:"echo SHOULD_NOT_RUN"}}});
    const result=await scanRepositories({root});
    assert.equal(result.summary.repositoriesFound,1);
    assert.equal(result.repositories[0].framework,"Astro");
    assert.equal(result.repositories[0].name,"sample-web");
    assert.equal(result.safety.ranProjectScripts,false);
    assert.equal(result.repositories[0].needsClientMapping,true);
    assert.equal(result.repositories[0].repositoryUrl,"https://github.com/example/astro-site");
    assert.equal(JSON.stringify(result).includes("secret-token"),false);
    assert.equal(JSON.stringify(result).includes("should-not-leak"),false);
  }finally{await rm(root,{recursive:true,force:true});}
});
test("skips dependencies and build folders and omits environment-file contents",async()=>{
  const root=await mkdtemp(join(tmpdir(),"ventablk-scan-"));
  try{
    const dir=await makeRepo(root,"site",{packageJson:{name:"safe-site"},extras:["node_modules/","dist/",".env","index.html"]});
    await makeRepo(join(dir,"node_modules"),"nested-dependency",{packageJson:{name:"must-not-appear"}});
    await writeFile(join(dir,".env"),"SECRET_DO_NOT_EMIT=very-secret");
    const result=await scanRepositories({root});
    assert.equal(result.summary.repositoriesFound,1);
    assert.equal(JSON.stringify(result).includes("very-secret"),false);
    assert.equal(JSON.stringify(result).includes("SECRET_DO_NOT_EMIT"),false);
  }finally{await rm(root,{recursive:true,force:true});}
});
test("allowlists project metadata and omits contact and financial data",async()=>{
  const root=await mkdtemp(join(tmpdir(),"ventablk-scan-"));
  try{
    await makeRepo(root,"site",{projectConfig:{
      client:{name:"Approved contact",organization:"Example Org",email:"private@example.test"},
      project:{name:"Approved Website",websiteUrl:"https://example.test",hosting:"Cloudflare Pages",status:"DEVELOPMENT",budget:999999}
    }});
    const result=await scanRepositories({root}), record=result.repositories[0];
    assert.equal(record.client.name,"Approved contact");
    assert.equal(record.explicitProjectMetadata.name,"Approved Website");
    assert.equal(record.explicitProjectMetadata.hosting,"Cloudflare Pages");
    assert.equal(JSON.stringify(result).includes("private@example.test"),false);
    assert.equal(JSON.stringify(result).includes("999999"),false);
  }finally{await rm(root,{recursive:true,force:true});}
});
test("ignores malformed optional metadata without aborting scan",async()=>{
  const root=await mkdtemp(join(tmpdir(),"ventablk-scan-"));
  try{
    const dir=await makeRepo(root,"site",{packageJson:{name:"safe-site"},extras:["index.html"]});
    await writeFile(join(dir,"ventablk.project.json"),"{broken");
    const result=await scanRepositories({root});
    assert.equal(result.summary.repositoriesFound,1);
    assert.equal(result.repositories[0].needsClientMapping,true);
    assert.equal(result.repositories[0].explicitProjectMetadata,null);
  }finally{await rm(root,{recursive:true,force:true});}
});

test("skips Git repositories without website indicators",async()=>{
  const root=await mkdtemp(join(tmpdir(),"ventablk-scan-"));
  try{
    await makeRepo(root,"utility-script",{packageJson:{name:"utility-script",scripts:{test:"node test.js"}}});
    const result=await scanRepositories({root});
    assert.equal(result.summary.repositoriesFound,0);
    assert.equal(result.summary.nonWebsiteRepositoriesSkipped,1);
  }finally{await rm(root,{recursive:true,force:true});}
});
