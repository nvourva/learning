let isEven = function(a) {
 // The exercise states that a should be a positive whole number, so we check.
  if ( typeof a !== 'number' || a < 0 || ! Number.isInteger(a) ) {
    return "Please use a positive whole number";
  }
  
  if ( a === 0 ) {
    return true;
  } else if ( a === 1 ) {
    return false;
  } else {
    return isEven( a - 2 );
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
