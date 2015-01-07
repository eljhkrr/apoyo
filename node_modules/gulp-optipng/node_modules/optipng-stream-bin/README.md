# [optipng](http://optipng.sourceforge.net)-stream-bin [![Build Status](https://secure.travis-ci.org/ameyp/optipng-stream-bin.png?branch=master)](http://travis-ci.org/ameyp/optipng-stream-bin)

*Issues with the output should be reported on the image-min [issue tracker](https://github.com/kevva/image-min/issues).*

This is a wrapper around [node-optipng-bin](https://github.com/yeoman/node-optipng-bin)
to add support for reading input PNG data from `STDIN` and writing the generated
output PNG data to `STDOUT`. The module is intended to be used only as a binary
in the same style as modules that use [bin-wrapper](https://github.com/kevva/bin-wrapper).
It cannot be used in any other fashion.

## Usage

```js
var fs = require('fs');
var optipng = require('optipng-stream-bin').path;
var spawn = require('child_process').spawn;

var cp = spawn(optipng, ['-o2']);
var read = fs.createReadStream('test.png');
var write = fs.createWriteStream('test-optimized.png');

read.pipe(cp.stdin);
cp.stdout.pipe(write);
```

## License

MIT © [Amey Parulekar](http://wirywolf.com)
