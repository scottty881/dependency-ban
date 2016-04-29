'use strict';
require('colors');
var packageJson = require('./package.json');

var script = function (args) {
  var packageName = process.env.npm_package_name;
  var packageVersion = process.env.npm_package_version;
  
  if (packageJson && packageJson.bannedDependencies[packageName]) {
    console.log('******************'.white);
    console.log('******************'.white);
    console.log('******************'.white);
    console.log('ERROR '.red, packageName.white, ' is on the banned dependencies list'.red);
    console.log('******************'.white);
    console.log('******************'.white);
    console.log('******************'.white);
    return process.exit(8);
  } else {
    return process.exit(0);
  }
};

module.exports = script();