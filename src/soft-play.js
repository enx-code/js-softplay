// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
let totalAdults = 0
let totalChildren = 0

function enter(numAdults, numChildren) {
  let result = true
  
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
  } else {
    result = false
  }
  
  return result
}

function leave(numAdults, numChildren) {
  let result = true
 
  if (numAdults !== numChildren) {
    return false
  }
  
  return result
}

function occupancy() {
  const occupancyInformation = {
    adults: adults,
    children: children
  }
  return occupancyInformation
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@CLASS CODE


// function occupancy() {
//   return {
//     adults, 
//     children
//   }

// }

// function enter(numAdults, numChildren) {
//   if (numAdults < numChildren) {
//     return false
//   }
//   adults += numAdults
//   children += numChildren
//   totalAdults += numAdults
//   totalChildren += numChildren
//   return true
// }

// function leave(numAdults, numChildren) {
//   if (numAdults < numChildren) {
//     return false 
//   } else if (numAdults > adults || numChildren > children) {
//     return false
//   } else if (children - numChildren > adults - numAdults) {
//     return false
//   }
//   adults -= numAdults
//   children -= numChildren
//   return true

// }

// function total() {
//   return {
//     adults: totalAdults,
//     children: totalChildren
//   }
// }

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
