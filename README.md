# gulp-freeze [![Build Status](https://travis-ci.org/just-boris/gulp-freeze.png?branch=master)](https://travis-ci.org/just-boris/gulp-freeze) ![Cool Badge](http://img.shields.io/badge/cool-badge-brightgreen.svg)

> Adds md5 checksum to filename

Compute md5 checksum from the file contents and append it to filename. Useful for cache-busting.

## Installation

Install via [npm](https://npmjs.org/package/gulp-freeze):

```
npm install gulp-freeze --save-dev
```

## Example

This gulpfile creates a file named like `app.min_0187d9d019510c4e1492acad3015fda0.js` from your `app.min.js`

```js
var gulp    = require('gulp');
var freeze = require('gulp-freeze');

gulp.task('default', function() {
    gulp.src('dest/app.min.js')
        .pipe(freeze())
        .pipe(gulp.dest('dest'));
});
```


## Configuration

Now we support one configuration property:

**append**(Boolean) - append checksum to filename. If not, filename will be replaced by hash. Defaults to **true**. Call plugin as `freeze({append: false})` to disable it.
