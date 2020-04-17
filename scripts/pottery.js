let pots = []
// Function that creates object representations of pots
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
const pot2 = potteryFactory(potId++, "urn", 5, 20);
const pot3 = potteryFactory(potId++, "urn", 6, 20);
const pot4 = potteryFactory(potId++, "jar", 3, 20);
const pot5 = potteryFactory(potId++, "vase", 4, 20);

pots.push(pot1, pot2, pot3, pot4, pot5)
console.log(pots)

// Function that runs pots through the kiln
const kiln = (sinlglePot, kilnTemp) => {
  sinlglePot.fired = true
  if (kilnTemp > 2200) {
    sinlglePot.cracked = true
  } else {
    (kilnTemp >= 2200)
    sinlglePot.cracked = false

  }
  return sinlglePot
}

let firedPots = []

const firedPot1 = kiln(pots[0], 2000)
const firedPot2 = kiln(pots[1], 2200)
const firedPot3 = kiln(pots[2], 2250)
const firedPot4 = kiln(pots[3], 2300)
const firedPot5 = kiln(pots[4], 1950)

firedPots.push(firedPot1, firedPot2, firedPot3, firedPot4, firedPot5)
console.log(firedPots)


// Function that determines if it should be sold and how much pottery is worth 
let potteryToSell = []

 const potteryAppraisal = () => firedPots.filter(singlePot => {
  if (singlePot.cracked === false && singlePot.weight >= 3) {
    singlePot.price = 40
    return true
  } else if (singlePot.cracked === false && singlePot.weight < 3) {
    singlePot.price = 20
    return true
  }
  return false
})
potteryToSell = potteryAppraisal()
console.log(potteryToSell)