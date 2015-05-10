/**
 * Module dependencies
 */

var fs    = require('fs-extra');
var path  = require('path');
var chalk = require('chalk');

module.exports = function newProject(dir) {
  fs.copy(path.normalize('/usr/local/lib/node_modules/dflt/lib/templates'), dir, function(err) {
    if (err) throw err;
    console.log('Created new project with template \"' + chalk.red('default') + '\" in directory \"' + chalk.blue(dir) + '\".');
  });
};