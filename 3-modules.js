/**
 * CommonJS, every file in Node is module (by default)
 * Modules - Encapsulates Code (only share minimum) 
 */
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan');
sayHi(names.john); 
sayHi(names.peter); 

