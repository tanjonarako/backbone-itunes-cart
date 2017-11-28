// fileTransformer.js
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

module.exports = {
  process(src, filename, config, options) {
    const contentFile = fs.readFileSync(filename).toString();

    return 'module.exports = ' + ejs.compile(contentFile, {client: true}).toString() + ';';
  },
};
