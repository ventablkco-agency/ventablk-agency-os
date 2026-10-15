#!/usr/bin/env node
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const SKIP = new Set([".git","node_modules",".next","dist","build","coverage",".cache",".turbo",".vercel",".astro","out","vendor","tmp","temp"]);
const STATUSES = new Set(["DISCOVERY","DESIGN","CONTENT","DEVELOPMENT","QA","LAUNCH","MAINTENANCE","ON_HOLD","COMPLETED"]);

function expand(p) { return p === "~" ? homedir() : p.startsWith("~/") ? join(homedir(), p.slice(2)) : p; }
function argsFrom(argv) {
  const o = { root: join(homedir(),"web-dev"), out: join(homedir(),"ventablk-repository-inventory.json"), excludes: [] };
  for (let i=0;i<argv.length;i++) {
    if (argv[i]==="--root" && argv[i+1]) o.root=argv[++i];
    else if (argv[i]==="--out" && argv[i+1]) o.out=argv[++i];
    else if (argv[i]==="--exclude" && argv[i+1]) o.excludes.push(argv[++i]);
    else if (argv[i]==="--help" || argv[i]==="-h") o.help=true;
    else throw new Error("Unknown or incomplete argument: "+argv[i]);
  }
  o.root=resolve(expand(o.root)); o.out=resolve(expand(o.out)); o.excludes=o.excludes.map(x=>resolve(expand(x)));
  return o;
}
function git(repo,args) {
  const r=spawnSync("git",["-C",repo,...args],{encoding:"utf8",timeout:3000,windowsHide:true,stdio:["ignore","pipe","ignore"]});
  return r.status===0 ? (r.stdout.trim() || null) : null;
}
async function jsonFile(path,max) {
  try { const s=await stat(path); if(!s.isFile() || s.size>max) return null; return JSON.parse(await readFile(path,"utf8")); }
  catch { return null; }
}
function str(v,max=180) { return typeof v==="string" ? v.trim().slice(0,max) : ""; }
function explicit(raw) {
  if(!raw || typeof raw!=="object" || Array.isArray(raw)) return null;
  const c=raw.client && typeof raw.client==="object" && !Array.isArray(raw.client) ? raw.client : {};
  const p=raw.project && typeof raw.project==="object" && !Array.isArray(raw.project) ? raw.project : {};
  const cn=str(c.name,120), org=str(c.organization,160), pn=str(p.name,160), web=str(p.websiteUrl,500), host=str(p.hosting,120), status=str(p.status,40).toUpperCase();
  return {client:cn||org ? {name:cn||null,organization:org||null} : null,project:{name:pn||null,websiteUrl:/^https?:\/\//i.test(web)?web:null,hosting:host||null,status:STATUSES.has(status)?status:null}};
}
function framework(pkg) {
  const d={...(pkg?.dependencies&&typeof pkg.dependencies==="object"?pkg.dependencies:{}),...(pkg?.devDependencies&&typeof pkg.devDependencies==="object"?pkg.devDependencies:{})};
  if(d.astro)return "Astro"; if(d.next)return "Next.js"; if(d["@angular/core"])return "Angular";
  if(d.nuxt)return "Nuxt"; if(d.svelte||d["@sveltejs/kit"])return "SvelteKit"; if(d.vue)return "Vue";
  if(d.react)return "React"; if(d.vite)return "Vite"; return pkg?"Node.js / unspecified frontend":"Unknown";
}
async function inspect(repo,root) {
  const entries=await readdir(repo,{withFileTypes:true}), names=new Set(entries.map(e=>e.name));
  const pkg=await jsonFile(join(repo,"package.json"),256*1024);
  const custom=explicit(await jsonFile(join(repo,"ventablk.project.json"),32*1024));
  const remote=git(repo,["remote","get-url","origin"]), branch=git(repo,["branch","--show-current"]), commit=git(repo,["rev-parse","--short=12","HEAD"]);
  const valid=pkg&&typeof pkg==="object"&&!Array.isArray(pkg), packageName=valid?str(pkg.name,180):"";
  const dir=relative(root,repo).split(sep).join("/");
  const hosting=[], ci=[];
  if(["wrangler.toml","wrangler.json","wrangler.jsonc"].some(n=>names.has(n)))hosting.push("Cloudflare configuration detected");
  if(names.has("vercel.json"))hosting.push("Vercel configuration detected");
  if(names.has("netlify.toml"))hosting.push("Netlify configuration detected");
  if(["Dockerfile","docker-compose.yml","compose.yaml","docker-compose.yaml"].some(n=>names.has(n)))hosting.push("Docker configuration detected");
  if(names.has(".github"))ci.push("GitHub Actions configuration directory detected");
  if(names.has("Jenkinsfile"))ci.push("Jenkins configuration detected");
  if(names.has(".gitlab-ci.yml"))ci.push("GitLab CI configuration detected");
  return {
    sourceId:remote?remote.replace(/\.git$/i,"").toLowerCase():"local:"+(dir||".").toLowerCase(),
    directory:dir||".",repositoryUrl:remote,branch,commit,name:(custom&&custom.project.name)||packageName||basename(repo),
    packageName:packageName||null,framework:framework(valid?pkg:null),packageJsonFound:names.has("package.json"),
    readmeFound:[...names].some(n=>/^readme(?:\..+)?$/i.test(n)),hostingSignals:hosting,ciSignals:ci,
    client:custom?custom.client:null,explicitProjectMetadata:custom?custom.project:null,needsClientMapping:!(custom&&custom.client),
    discoveredAt:new Date().toISOString()
  };
}
async function discover(root,excludes) {
  const repositories=[],errors=[];
  async function walk(dir) {
    if(excludes.some(x=>dir===x||dir.startsWith(x+sep)))return;
    let entries;
    try{entries=await readdir(dir,{withFileTypes:true});}
    catch(e){errors.push({path:relative(root,dir).split(sep).join("/")||".",message:e instanceof Error?e.message:"Unable to read directory"});return;}
    const names=new Set(entries.map(e=>e.name));
    if(names.has(".git")){repositories.push(await inspect(dir,root));return;}
    for(const e of entries)if(e.isDirectory()&&!SKIP.has(e.name)&&!e.name.startsWith("."))await walk(join(dir,e.name));
  }
  await walk(root); repositories.sort((a,b)=>a.directory.localeCompare(b.directory)); return {repositories,errors};
}
export async function scanRepositories({root,excludes=[]}) {
  const s=await stat(root).catch(()=>null); if(!s||!s.isDirectory())throw new Error("Scan root is not an existing directory: "+root);
  const found=await discover(root,excludes);
  return {schemaVersion:1,generatedAt:new Date().toISOString(),scanRoot:root,
    safety:{ranProjectScripts:false,readEnvironmentFiles:false,readCredentialFiles:false,notes:"Only Git metadata, package.json, directory entry names, and allowlisted ventablk.project.json metadata are inspected. Project scripts are never run."},
    summary:{repositoriesFound:found.repositories.length,repositoriesNeedingClientMapping:found.repositories.filter(r=>r.needsClientMapping).length,scanErrors:found.errors.length},
    repositories:found.repositories,errors:found.errors};
}
async function main() {
  const o=argsFrom(process.argv.slice(2));
  if(o.help){process.stdout.write("Usage: node scripts/repo-scanner.mjs [--root ~/web-dev] [--out ~/ventablk-repository-inventory.json] [--exclude PATH]\n");return;}
  const result=await scanRepositories({root:o.root,excludes:[...o.excludes,o.out]});
  await mkdir(dirname(o.out),{recursive:true}); await writeFile(o.out,JSON.stringify(result,null,2)+"\n",{mode:0o600});
  process.stdout.write("Found "+result.summary.repositoriesFound+" repositories; "+result.summary.repositoriesNeedingClientMapping+" need client mapping; "+result.summary.scanErrors+" scan errors.\nInventory written to "+o.out+"\n");
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)main().catch(e=>{process.stderr.write((e instanceof Error?e.message:"Scan failed")+"\n");process.exitCode=1;});
