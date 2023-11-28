// console.log(global)
// imports
const os = require('os')
const path = require('path')

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
const {add, sub, div, mul} = require('./math')

console.log(add(2,8), 'add operation');
console.log(sub(2,8), 'add operation');
console.log(div(2,8), 'add operation');
console.log(mul(2,8), 'add operation');

console.log(__dirname)
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
const relativePath = path.relative(__filename, '');

console.log(relativePath);
console.log(path.extname(__filename));

console.log(path.parse(__filename));