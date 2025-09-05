# Exif Date

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][build-image]][build-url]
[![Build coverage][coverage-image]][coverage-url]

> Parse an EXIF date string into a `Date` object.

## Installation

```sh
npm install exif-date --save
```

## Usage

```js
import { parse, format } from "exif-date";

parse("2016:07:11 21:33:20"); //=> Date('2016-07-11T21:33:20.000Z')
format(new Date("2016-07-11T21:33:20.000Z")); //=> '2016:07:11 21:33:20'
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/exif-date.svg?style=flat
[npm-url]: https://npmjs.org/package/exif-date
[downloads-image]: https://img.shields.io/npm/dm/exif-date.svg?style=flat
[downloads-url]: https://npmjs.org/package/exif-date
[build-image]: https://img.shields.io/github/actions/workflow/status/blakeembrey/exif-date/ci.yml?branch=master
[build-url]: https://github.com/blakeembrey/exif-date/actions/workflows/ci.yml?query=branch%3Amaster
[coverage-image]: https://img.shields.io/codecov/c/gh/blakeembrey/exif-date
[coverage-url]: https://codecov.io/gh/blakeembrey/exif-date
