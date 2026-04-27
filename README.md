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
| `github>sugarshin/renovate-config` (default) | `config:best-practices` + Asia/Tokyo timezone + `renovate` label + automerge / group / security / pin-github-actions を内部 extends |
| `github>sugarshin/renovate-config:automerge` | devDependencies non-major + digest + lockFileMaintenance を automerge |
| `github>sugarshin/renovate-config:group` | linters / test runners / Node.js / `@types/*` をグループ化 |
| `github>sugarshin/renovate-config:security` | OSV alerts + 7-day cooldown + OpenSSF Scorecard |
| `github>sugarshin/renovate-config:monorepo` | 主要 monorepo グループ化 (単独利用向け) |
| `github>sugarshin/renovate-config:pin-github-actions` | GitHub Actions を full SHA pin |

### `default` に含まれる挙動

`extends: ["github>sugarshin/renovate-config"]` を 1 行記述するだけで以下が有効になります。

- [`config:best-practices`](https://docs.renovatebot.com/presets-config/#configbest-practices) (Renovate メンテナ推奨セット)
  - `:dependencyDashboard` / `:semanticPrefixFixDepsChoreOthers` / `group:monorepos` / `group:recommended` / `mergeConfidence:age-confidence-badges`
  - `docker:pinDigests` / `helpers:pinGitHubActionDigests`
  - `:configMigration` / `:pinDevDependencies` / `abandonments:recommended`
  - `security:minimumReleaseAgeNpm` (3 days) / `:maintainLockFilesWeekly`
- Asia/Tokyo タイムゾーン
- PR ラベル `renovate`
- major リリースを段階的に分離 (`:separateMultipleMajorReleases`)
- `separateMinorPatch: true`
- devDependencies の minor / patch を automerge
- digest 更新を automerge
- lockFileMaintenance を automerge
- linters / test / Node.js / `@types/*` のグループ化
- OSV vulnerability alerts + 7-day cooldown + OpenSSF Scorecard
- GitHub Actions を SHA pin

カスタマイズしたい場合は利用側 `renovate.json` で個別 `packageRules` を後置きすると上書きできます。

## License

[MIT][license-url]

© sugarshin

[validate-image]: https://github.com/sugarshin/renovate-config/actions/workflows/validate.yml/badge.svg
[validate-url]: https://github.com/sugarshin/renovate-config/actions/workflows/validate.yml
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
