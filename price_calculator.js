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

const calculatePrices = (itemCount) => {
  const prices = {};
  const items = Object.keys(itemCount);
  for (item of items) {
    const quantity = itemCount[item];
    prices[item] = { quantity, price: determinePrice(item, quantity) };
  }
  return prices;
}

const countPurchasedItems = (items) => {
  let itemCount = {};
  const itemArray = items.split(',').map((item) => item.trim());
  itemArray.forEach((item) => { itemCount[item] = (itemCount[item] || 0) + 1 });
  return itemCount;
}

const determinePrice = (item, quantity) => {
  let price = 0;
  const saleQuantity = PRICES[item].saleQuantity;
  const unitPrice = PRICES[item].unitPrice;
  const salePrice = PRICES[item].salePrice;

  if (saleQuantity && (quantity >= saleQuantity)) {
    const fullPriceItems = quantity % saleQuantity;
    const saleItems = Math.floor(quantity / saleQuantity);
    price += ((saleItems * salePrice) + (fullPriceItems * unitPrice))
  } else {
    price += (unitPrice * quantity);
  }
  return price;
}

rl.question('Please enter all the items purchased separated by a comma: ', (items) => {
  const itemCount = countPurchasedItems(items);
  const itemPrices = calculatePrices(itemCount);

  console.log(itemPrices);

  rl.close();
});