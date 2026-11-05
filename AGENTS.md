# Publication repository — read before making changes

This repository contains only the public VIBE Guard client guide and minimal publication controls.

- Canonical development repository: `vibeguard-vpn/vibeguard-site-internal` (private). Read its root `AGENTS.md` and `docs/REPOSITORY_POLICY.md` before any development.
- Keep prompts, plans, specifications, tests, QA screenshots, reports, original assets, backups and full development history in the private repository. Never commit credentials or client VPN configurations.
- If private access is unavailable, stop before making changes and report the missing access. Do not reconstruct a private working project here.
- Publish only the private project's checked export from `scripts/export_publication.py`. Start a publication branch from THIS repository's `main`; never merge, mirror, push or cherry-pick private history into it.
- Use a pull request and the required `validate` check; do not disable protections or broaden the allowlist to publish internal files.
- Keep public commit/PR descriptions free of private details and use a GitHub noreply commit email.
- Preserve https://vibeguard-vpn.github.io/ and verify the Pages deployment after publication.
