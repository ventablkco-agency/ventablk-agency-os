# Repository-native Agent Playbooks

This folder is the durable source of truth for the website workflow used through ChatGPT and connected coding tools. Before substantial website work, read:

1. `../AGENTS.md` — repository-wide rules.
2. `../AGENT_SKILLS.md` — upstream tool/skill identity, installation notes, and intended sequence.
3. `ventablk-website-workflow/SKILL.md` — required operating procedure.
4. The target project's `DESIGN.md`, brief, and technical standard.

## What "kept in the repository" means

- The Ventablk workflow and agency-specific rules are stored here and can be read and applied when this repository is available in the conversation/tool context.
- The upstream projects listed in `AGENT_SKILLS.md` remain independently maintained tools. Listing them here does not install their runtimes into ChatGPT, VS Code, or another agent.
- Do not copy whole upstream skill packages into this public repository without checking their license and update process. Instead, use official installations in the coding-agent environment when available and keep the agency's own reusable process/checklists here.
- If a skill is unavailable in the current session, apply the documented checklist manually, identify it as a manual review, and never claim the upstream tool ran.

## Required use on website work

The workflow is mandatory for every website build, redesign, audit, and substantial fix. Follow the sequence in `ventablk-website-workflow/SKILL.md`; do not merely mention these resources in the final report.
