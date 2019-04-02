# crc

[![Greenkeeper badge](https://badges.greenkeeper.io/coltongit/node-crc.svg)](https://greenkeeper.io/)

The module for calculating Cyclic Redundancy Check (CRC) for Node.js and the Browser.

## Features

- Full test suite comparing values against reference `pycrc` implementation.
- Pure JavaScript implementation, no dependencies.
- ES6 modules.
- Provides CRC tables for optimized calculations.
- Provides support for the following CRC algorithms:
  - CRC1 (`crc1`)
  - CRC5 (`crc5`)
  - CRC8 (`crc8`)
  - CRC8 1-Wire (`crc81wire`)
  - CRC12 3-GPP (`crc123gpp`)
  - CRC15 (`crc15`)
  - CRC16 (`crc16`)
  - CRC16 CCITT (`crc16ccitt`)
  - CRC16 Modbus (`crc16modbus`)
  - CRC16 Kermit (`crc16kermit`)
  - CRC16 XModem (`crc16xmodem`)
  - CRC24 (`crc24`)
  - CRC32 (`crc32`)
  - CRCJAM (`crcjam`)

## Installation

```
npm install crc
```

## Usage

Calculate a CRC32 (recommended way):

```js
import crc32 from 'crc/crc32';
crc32('hello').toString(16);
// "3610a686"
```

Import everything (this may bloat bundle size):

```js
import crc from 'crc';
crc.crc32('hello').toString(16);
// "3610a686"
```

Or use CommonJS (compatability mode, no longer recommended):

```js
const { crc32 } = require('crc');
crc32('hello').toString(16);
// "3610a686"
```

Calculate a CRC32 of a file:

```js
crc32(fs.readFileSync('README.md', 'utf8')).toString(16);
// "127ad531"
```

Or using a `Buffer`:

```js
crc32(fs.readFileSync('README.md', 'utf8')).toString(16);
// "127ad531"
```

Incrementally calculate a CRC32:

```js
value = crc.crc32('one');
value = crc.crc32('two', value);
value = crc.crc32('three', value);
value.toString(16);
// "9e1c092"
```

# Important: Node >= 6.3.0 < 6.9.2

There's was a bug in Node [#9342](https://github.com/nodejs/node/issues/9342) that affected CRC calculation if `Buffer.split()` is used (see issue discussion for details). This affected all version starting from `6.3.0` up to but not including `6.9.2`. The patch [#9341](https://github.com/nodejs/node/pull/9341) was released in `6.9.2`. If you are upgrading and seeing odd CRC calculation mismatches, this might be the reason.

## Running tests

```
npm test
```

## Thanks!

[pycrc](http://www.tty1.net/pycrc/) library is which the source of all of the CRC tables.

# License

The MIT License (MIT)

Copyright (c) 2014 Alex Gorbatchev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
