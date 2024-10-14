// src/main.js
const { getSecret } = require('./secret');
const { decode } = require('./utils');

console.log('This is the main application file.');
console.log('Look at the obfuscated files for hidden clues.');
console.log('Secret:', getSecret());
console.log('Decoded Flag Part:', decode('YnVnQm91bnR5e2dpdEh1Yg'));
