# gulp-freeze

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
var freeze = require('./index');

gulp.task('default', function() {
    gulp.src('dest/app.min.js')
        .pipe(freeze())
        .pipe(gulp.dest('dest'));
});
```