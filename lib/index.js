/**
 * Module dependencies
 */

var fs    = require('fs-extra');
var path  = require('path');
var chalk = require('chalk');

/**
 * Copies the template into a new directory, with the name supplied by the user.
 *
 * @param {String} the name of the directory to copy the template into
 */ 
module.exports = function newProject(dir) {
  // Use the absolute path for now, this will definitely not work on Windows
  fs.copy(path.normalize('/usr/local/lib/node_modules/dflt/lib/templates'), dir, function(err) {
    if (err) throw err;
    console.log('Created new project with template \"' + chalk.red('default') + '\" in directory \"' + chalk.blue(dir) + '\".');
  });
};
