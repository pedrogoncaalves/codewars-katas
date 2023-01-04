
// Counting Sheeps

function countSheeps(arrayOfSheep) {
  let countingSheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      countingSheeps += 1;
    }
  }
  return countingSheeps;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);


// Rental car cost

function rentalCarCost(d) {
  let rentalCost = 40
  let total = rentalCost * d
  
  
  if (d < 3) {
return total
  }
   else if ( d >= 3 && d < 7 ) {
return  total - 20
  } else if (d >= 7) {
return total - 50
  }

}

// Odd or even

function oddOrEven(array) {
  let sum = 0;
 for( let i = 0; i < array.length; i++) {
   sum += array[i]
 }
return sum % 2 == 0 ? 'even' : 'odd'
}

// Perfect square number


var isSquare = function(n){
  let squareNumber = Math.sqrt(n)
  return squareNumber === Math.trunc(squareNumber) ? true : false
}

