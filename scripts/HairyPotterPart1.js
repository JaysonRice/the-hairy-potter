let pots = []
// Function that creates object representations of pots
let potId = 1
const potteryFactory = (id, shape, weight, height, kilnTemp) => {
  return {
    id,
    shape,
    weight,
    height,
    kilnTemp
  }
}

const pot1 = potteryFactory(potId++, "bowl", 2, 20, 2000);
const pot2 = potteryFactory(potId++, "urn", 5, 20, 2200);
const pot3 = potteryFactory(potId++, "urn", 6, 20, 2250);
const pot4 = potteryFactory(potId++, "jar", 3, 20, 2300);
const pot5 = potteryFactory(potId++, "vase", 4, 20, 1950);

pots.push(pot1, pot2, pot3, pot4, pot5)

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

const firedPot1 = kiln(pots[0], pots[0].kilnTemp)
const firedPot2 = kiln(pots[1], pots[1].kilnTemp)
const firedPot3 = kiln(pots[2], pots[2].kilnTemp)
const firedPot4 = kiln(pots[3], pots[3].kilnTemp)
const firedPot5 = kiln(pots[4], pots[4].kilnTemp)

firedPots.push(firedPot1, firedPot2, firedPot3, firedPot4, firedPot5)

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