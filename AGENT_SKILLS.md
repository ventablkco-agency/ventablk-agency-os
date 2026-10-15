# Agent Skills & Browser Tooling

This file records the intended design/tooling stack for Ventablk Agency OS. A repository manifest is not proof that tools are installed in a particular AI editor; verify installation in that environment.

## 1. VoltAgent — Awesome DESIGN.md

- Source: https://github.com/VoltAgent/awesome-design-md
- Purpose: curated **design-system reference documents**, not a standalone agent skill or MCP server.
- Use it to find a suitable visual reference and extract relevant design patterns/tokens into a project-specific `DESIGN.md`.
- Do not copy another brand's identity wholesale. Keep the agency's hospital design specification in `design.md`; create project-specific design files when a project needs a distinct visual system.
- Catalog of references: https://github.com/VoltAgent/awesome-design-md

## 2. Impeccable — pbakaus

- Source: https://github.com/pbakaus/impeccable
- Purpose: design workflow skill and commands for planning, critiquing, auditing, and polishing interfaces.
- From the project root, run the official installer and follow its prompts:
  ```bash
  npx impeccable install
  ```
- In a supported agent session, initialize the current project with `/impeccable init`. Review the official README for supported providers and project/global scope.

## 3. Taste Skill — Leonxlnx

- Source: https://github.com/Leonxlnx/taste-skill
- Purpose: frontend art direction, distinctive design execution, and visual self-review.
- Install the official skill package into the coding agent(s) you use:
  ```bash
  npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend
  ```
- Its documented main skill install name is `design-taste-frontend`. Follow the upstream README for runtime/browser requirements and agent compatibility.

## 4. Vercel Labs — Web Design Guidelines

- Source: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
- Purpose: review UI code against web interface, accessibility, interaction, responsive, form, and performance guidance.
- Install the focused skill:
  ```bash
  npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
  ```
- The skill fetches current guideline content from Vercel's source when performing a review. Keep the agency's own standards as the project-specific baseline.

## 5. Microsoft Playwright MCP

- Source: https://github.com/microsoft/playwright-mcp
- Purpose: browser automation via the Model Context Protocol (MCP). This is a **tool server**, not an agent skill.
- A VS Code MCP configuration is provided in `.vscode/mcp.json`. Reload VS Code and verify that the Playwright server starts and its tools appear before relying on it.
- Upstream documents Node.js 18+ and this standard server command:
  `npx @playwright/mcp@latest`.
- Use only for authorized testing of the local projects and websites. Do not use it to access private third-party systems or expose local development servers publicly.

## Mandatory use on every website project

These are required project workflow gates, not optional recommendations. Start from the repository root and read skills/ventablk-website-workflow/SKILL.md. For substantial visual work, consult a relevant VoltAgent reference, run Taste Skill and Impeccable when installed, run Vercel Web Design Guidelines for UI, and use Playwright MCP for real flows when connected. For small maintenance changes, still apply the relevant design, guideline, and browser checks. Record each gate as Executed, Manual review, or Not run in the task report. Never claim upstream tool execution without observable results. If an upstream tool is unavailable, use the agency-owned manual checklist in the workflow and clearly report that limitation.

## Recommended use sequence

1. Read the project's brief and existing implementation.
2. For a new visual direction, use Taste Skill and consult Awesome DESIGN.md for references.
3. Implement against the approved project-specific `DESIGN.md` and agency standards.
4. Use Impeccable to critique/refine the design.
5. Run Vercel's guideline review.
6. Verify key user journeys in Playwright MCP, if available.
7. Report any unavailable tool and continue with manual review where possible. Never claim an unavailable tool ran.

## Maintenance

These upstream projects evolve independently. Recheck official instructions before upgrades; do not blindly copy commands or skills from unofficial mirrors. Review licenses before vendoring upstream implementation files into this repository.
