# Language Map

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][build-image]][build-url]
[![Build coverage][coverage-image]][coverage-url]

JSON map of programming languages to meta data. Converted from GitHub's [Linguist YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

**Useful Properties:**

- `type` - Either data, programming, markup, or undefined
- `aliases` - An array of additional lowercased aliases
- `filenames` - An array of filenames associated with the language
- `extensions` - An array of associated extensions
- `interpreters` - An array of associated interpreters

**GitHub Specific Properties:**

- `wrap` - Boolean flag to enable line wrapping
- `color` - CSS hex color to represent the language
- `group` - Associated language grouping
- `aceMode` - A string name of the ace mode
- `searchable` - Boolean flag to enable searching
- `searchTerm` - Deprecated: Some languages maybe indexed under a different alias

## Installation

```
npm install language-map --save
```

## Usage

```javascript
var map = require("language-map");

console.log(map["JavaScript"]);
//=> { type: 'programming', aceMode: 'javascript', color: '#f15501', ... }
```

## License

MIT

```
Copyright (c) 2011-2014 GitHub, Inc.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
```

[npm-image]: https://img.shields.io/npm/v/language-map
[npm-url]: https://npmjs.org/package/language-map
[downloads-image]: https://img.shields.io/npm/dm/language-map
[downloads-url]: https://npmjs.org/package/language-map
[build-image]: https://img.shields.io/github/workflow/status/blakeembrey/language-map/CI/main
[build-url]: https://github.com/blakeembrey/language-map/actions/workflows/ci.yml?query=branch%3Amain
[coverage-image]: https://img.shields.io/codecov/c/gh/blakeembrey/language-map
[coverage-url]: https://codecov.io/gh/blakeembrey/language-map
