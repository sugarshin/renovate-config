# @sugarshin/renovate-config

[![validate][validate-image]][validate-url]
[![License][license-image]][license-url]

Shareable [Renovate](https://renovatebot.com/) config presets.

## Usage

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["github>sugarshin/renovate-config"]
}
```

To pin to a specific version:

```json
{
  "extends": ["github>sugarshin/renovate-config#v8.0.0"]
}
```

## Presets

| Preset | Description |
|---|---|
| `github>sugarshin/renovate-config` (default) | `config:best-practices` + Asia/Tokyo timezone + `renovate` label, with automerge / group / security / pin-github-actions extended internally |
| `github>sugarshin/renovate-config:automerge` | Automerge devDependencies non-major updates and lockFileMaintenance |
| `github>sugarshin/renovate-config:group` | Group linters, test runners, Node.js, and `@types/*` |
| `github>sugarshin/renovate-config:security` | OSV alerts + 7-day cooldown + OpenSSF Scorecard |
| `github>sugarshin/renovate-config:monorepo` | Extra monorepo grouping (for standalone use) |
| `github>sugarshin/renovate-config:pin-github-actions` | Pin GitHub Actions to full SHA digests |

### What `default` enables

A single `extends: ["github>sugarshin/renovate-config"]` activates all of the following:

- [`config:best-practices`](https://docs.renovatebot.com/presets-config/#configbest-practices) (recommended set by Renovate maintainers)
  - `:dependencyDashboard` / `:semanticPrefixFixDepsChoreOthers` / `group:monorepos` / `group:recommended` / `mergeConfidence:age-confidence-badges`
  - `docker:pinDigests` / `helpers:pinGitHubActionDigests`
  - `:configMigration` / `:pinDevDependencies` / `abandonments:recommended`
  - `security:minimumReleaseAgeNpm` (3 days) / `:maintainLockFilesWeekly`
- Asia/Tokyo timezone
- PR label: `renovate`
- Separate multiple major releases (`:separateMultipleMajorReleases`)
- `separateMinorPatch: true`
- Automerge devDependencies minor / patch updates
- Automerge lockFileMaintenance
- Group linters / test runners / Node.js / `@types/*`
- OSV vulnerability alerts + 7-day cooldown + OpenSSF Scorecard
- Pin GitHub Actions to full SHA

To customize, add your own `packageRules` after the extends in your `renovate.json` — later rules override earlier ones.

## License

[MIT][license-url]

© sugarshin

[validate-image]: https://github.com/sugarshin/renovate-config/actions/workflows/validate.yml/badge.svg
[validate-url]: https://github.com/sugarshin/renovate-config/actions/workflows/validate.yml
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
