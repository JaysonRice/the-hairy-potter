let potteryToSell = []

let potId = 1

const potteryFactory = (id, shape, weight, height) => {
  return {
    id,
    shape,
    weight,
    height,
  }
}

const pot1 = potteryFactory(potId++, "bowl", 2, 20);
const pot2 = potteryFactory(potId++, "vase", 5, 20);
const pot3 = potteryFactory(potId++, "urn", 25, 20);
const pot4 = potteryFactory(potId++, "jar", 3, 20);
const pot5 = potteryFactory(potId++, "vase", 4, 20);

potteryToSell.push(pot1, pot2, pot3, pot4, pot5)

console.log(potteryToSell)
