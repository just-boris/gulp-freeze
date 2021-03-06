'use strict';
var crypto = require('crypto');
var path = require("path");
var through = require('through2');

module.exports = function(options) {
    options = options || {append: true};
    return through.obj(process);

    function getOutputPath(filepath, checksum) {
        return [
            path.dirname(filepath),
            '/',
            options.append ? path.basename(filepath, path.extname(filepath))+'_' : '',
            checksum,
            path.extname(filepath)
        ].join('');
    }

    function process(file, enc, callback) {
        if (file.isBuffer()) {
            var content = file.contents.toString('utf-8'),
                checksum = crypto.createHash('md5').update(content, "utf8").digest("hex");
            file.path = getOutputPath(file.path, checksum);
        }
        this.push(file);
        callback();
    }
};