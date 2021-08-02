
const { prettify } = require('./src/prettifyNumber')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Enter a number to be prettified: ', number => {
  console.log(`Prettified Number: ${prettify(number)}`)
  readline.close();
});