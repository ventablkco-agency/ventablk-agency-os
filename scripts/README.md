# Local repository inventory scanner

This tool discovers likely website repositories in a configured local directory and produces a JSON inventory. It excludes the Agency OS repository itself when run from within that checkout and reports unrelated repositories skipped. It does not import into the dashboard database by itself.

## Run from the Agency OS repository root

    node scripts/repo-scanner.mjs --root ~/web-dev --out ~/ventablk-repository-inventory.json

Exclude an archived folder when required:

    node scripts/repo-scanner.mjs --root ~/web-dev --exclude ~/web-dev/archive

Run the automated tests:

    node --test scripts/repo-scanner.test.mjs

## Inspected data

- Git remote URL, current branch and current commit, using Git commands only.
- Top-level names, presence of README/package manifest, package name and framework dependency clues.
- Presence of known hosting/CI configuration files.
- Optional allowlisted metadata in ventablk.project.json: client name/organization and project name/website/hosting/status.

The scanner never runs project scripts, reads README contents, opens arbitrary source files, reads environment files, collects contacts or budgets, or sends anything over the network. It skips dependency/build/cache directories and stops descending after finding a repository.

Inventory files may include local paths and client/project names. Keep the generated file outside the public Git repository. Output is written with owner-only permissions where supported.

## Current limitation

This is the repository-discovery foundation. Dashboard bulk preview/reconciliation is the next step. The inventory marks repositories requiring a client mapping rather than inventing client records.
