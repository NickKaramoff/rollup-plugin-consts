# @nickkaramoff/rollup-plugin-consts

[![NPM version](https://img.shields.io/npm/v/@nickkaramoff/rollup-plugin-consts?style=flat)](https://www.npmjs.com/package/@nickkaramoff/rollup-plugin-consts)

Import build time constants with Rollup.

> ## Heads up!
>
> This package is a fork of
> [rollup-plugin-consts](https://github.com/NotWoods/rollup-plugin-consts). The
> difference is that this package uses a more powerful `javascript-stringify`
> instead of `JSON.stringify()` to support inserting richer objects and
> functions.
>
> This fork can be used as a drop-in replacement.

## Installation

```bash
npm install --save-dev @nickkaramoff/rollup-plugin-consts
```

```bash
yarn add --dev @nickkaramoff/rollup-plugin-consts
```

## Usage

_@nickkaramoff/rollup-plugin-consts_ let you use constants that are replaced at
build time, such as inlining your `NODE_ENV`. Unlike similar plugins such as
[rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace),
_@nickkaramoff/rollup-plugin-consts_ doesn't magically replace strings in your
script. Instead, you import them like a module.

```js
// script.js
import environment from 'consts:environment';

if (environment === 'production') {
    // Production only code ...
} else {
    // Development only code ...
}
```

All consts modules have the prefix `consts:` followed by the name of the
constant, such as `environment` or `testing`. Rollup can reduce simple `if`
statements like the one above.

```js
// script.min.js

// environment == 'production'
{
    // Production only code ...
}
```

Generally, you need to ensure that _@nickkaramoff/rollup-plugin-consts_ goes
_before_ other plugins (like rollup-plugin-commonjs), so that those can apply
any optimisations such as dead code removal.

```js
// rollup.config.js
import consts from '@nickkaramoff/rollup-plugin-consts';

export default {
    // ...
    plugins: [
        consts({
            environment: 'production',
        }),
    ],
};
```

## Example

```js
{
    // All options are treated as `string:*` replacers...

    testing: false, // 'string:testing' exports a boolean, and so on...
    version: '1.0.0',
    environment: 'development',
    config: { names: ['foo', 'bar'] }, // objects can be used as replacements too!
    sum: (a, b) => a + b, // ...and functions too!
}
```

## TypeScript

The `consts` function is has a typings file. See
[Usage with TypeScript](https://github.com/NotWoods/rollup-plugin-consts/wiki/Usage-with-TypeScript)
(in the original repo) to check how to create additional typings files for
importing constants.

## Credits

rollup-plugin-consts was originally created by
[Jake Archibald](https://github.com/jakearchibald/) for
[PROXX](https://github.com/GoogleChromeLabs/proxx). You can watch his
presentation with [Surma](https://github.com/surma/)
[about Rollup plugins they wrote for PROXX](https://youtu.be/TsTt7Tja30Q).

The plugin was then worked on and published by
[Tiger Oakes](https://github.com/NotWoods).

## License

Apache-2.0
