const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter all the items purchased separated by a comma: ', (items) => {
  rl.close();
});