function price(a) {
  const priceWithoutIVA = a;
  const priceWithIVA = a * 0.21;
  const total = a * 1.21;

  const result = `Precio sin IVA : ${priceWithoutIVA}, IVA : ${priceWithIVA} y Total: ${total}`;
  return result;
}

console.log(price(34));
