export const filterCartProducts = (products) => {
  const prod = [];
  for (let i = 0; i < products.length; i++) {
    for (let [key, value] of Object.entries(products[i])) {
      if (key === "_id" || key === "quantity") {
        prod.push({
          productId: products[i]["_id"],
          quantity: products[i]["quantity"],
        });
      }
      break;
    }
  }
  return prod;
};
