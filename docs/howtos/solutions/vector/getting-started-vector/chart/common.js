// Sample data
const products = [
  {
    name: 'Puma Men Race Black Watch',
    price: 150,
    quality: 5,
    popularity: 8,
  },
  {
    name: 'Puma Men Top Fluctuation Red Black Watch',
    price: 180,
    quality: 7,
    popularity: 6,
  },
  {
    name: 'Inkfruit Women Behind Cream Tshirt',
    price: 5,
    quality: 9,
    popularity: 7,
  },
];

const dataWithAttributes = products.map((product) => ({
  x: product.price,
  y: product.quality,
  label: product.name,
}));

const product1Point = { x: products[0].price, y: products[0].quality };
const product2Point = { x: products[1].price, y: products[1].quality };
