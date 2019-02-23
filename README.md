# @sugarshin/renovate-config

[![CircleCI][circleci-image]][circleci-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

My shareable config for [Renovate](https://renovatebot.com/)

## Usage

Just extends in `renovate.json` .

```json
{
  "extends": ["@sugarshin"]
}
```

You don't have to do `npm install @sugarshin/renovate-config` . Renovate fetches it from npm registry automatically.

## Presets

### `@sugarshin (default)`

```json
{
  "extends": [
    "@sugarshin"
  ]
}
```

### `@sugarshin:js-app`

```json
{
  "extends": [
    "@sugarshin:js-app"
  ]
}
```

### `@sugarshin:js-lib`

```json
{
  "extends": [
    "@sugarshin:js-lib"
  ]
}
```

## License

[MIT][license-url]

© sugarshin

[npm-image]: https://img.shields.io/npm/v/@sugarshin/renovate-config.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/@sugarshin/renovate-config
[circleci-image]: https://circleci.com/gh/sugarshin/renovate-config.svg?style=svg&circle-token=5dbe2d23ddf6981f5f30fa3457d8b63a6c7bbd43
[circleci-url]: https://circleci.com/gh/sugarshin/renovate-config/tree/master
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
