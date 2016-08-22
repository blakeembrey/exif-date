# Exif Date

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Parse an EXIF date string into a `Date` object.

## Installation

```sh
npm install exif-date --save
```

## Usage

```js
import { parse, format } from 'exif-date'

parse('2016:07:11 21:33:20') //=> Date('2016-07-11T21:33:20.000Z')
format(new Date('2016-07-11T21:33:20.000Z')) //=> '2016:07:11 21:33:20'
```

**P.S.** Also parses sub-second precision and timezone offsets.

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/exif-date.svg?style=flat
[npm-url]: https://npmjs.org/package/exif-date
[downloads-image]: https://img.shields.io/npm/dm/exif-date.svg?style=flat
[downloads-url]: https://npmjs.org/package/exif-date
[travis-image]: https://img.shields.io/travis/blakeembrey/exif-date.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/exif-date
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/exif-date.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/exif-date?branch=master
