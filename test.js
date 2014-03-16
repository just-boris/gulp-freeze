/*jshint node: true */
/*global describe, it */
'use strict';
var assert = require('assert'),
    gutil = require('gulp-util'),
    freeze = require('./index');

describe('gulp-freeze', function() {
    describe('{append: true} (default)', function() {
        it('should append checksum to filename', function(done) {
            var stream = freeze(),
                fakeFile = new gutil.File({
                path: 'test.txt',
                contents: new Buffer("I will be md5-ed!")
            });
            stream.on('data', function(file) {
                assert.equal(file.contents, "I will be md5-ed!");
                assert.equal(file.path, './test_edd4077eab28f94dacf86d27e10bd274.txt');
            });
            stream.on('end', function() {
                done();
            });
            stream.write(fakeFile);
            stream.end();
        });
    });
    describe('{append: false}', function() {
        it('should replace filename with checksum', function(done) {
            var stream = freeze({append: false}),
                fakeFile = new gutil.File({
                    path: 'test.txt',
                    contents: new Buffer("I will be md5-ed!")
                });
            stream.on('data', function(file) {
                assert.equal(file.contents, "I will be md5-ed!");
                assert.equal(file.path, './edd4077eab28f94dacf86d27e10bd274.txt');
            });
            stream.on('end', function() {
                done();
            });
            stream.write(fakeFile);
            stream.end();
        });
    });
});