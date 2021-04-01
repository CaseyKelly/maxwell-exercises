const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PRICES = {
  milk: { unitPrice: 3.97, salePrice: 5, saleQuantity: 2 },
  bread: { unitPrice: 2.17, salePrice: 6, saleQuantity: 3 },
  banana: { unitPrice: 0.99 },
  apple: { unitPrice: 0.89 }
};

const countPurchasedItems = (items) => {
  let itemCount = {};
  const itemArray = items.split(',');
  itemArray.forEach((item) => { itemCount[item.trim()] = (itemCount[item.trim()] || 0) + 1 });
  return itemCount;
}

rl.question('Please enter all the items purchased separated by a comma: ', (items) => {
  const itemCount = countPurchasedItems(items);
  rl.close();
});