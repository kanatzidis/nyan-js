var colors = process.argv.includes('--colors');
var pure = process.argv.includes('--pure');

require('../')({ colors, pure, stream: process.stdout });
