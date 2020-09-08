let reverse = function(toReverse){
	let reverse_arr = [];

  for ( var i = toReverse.length - 1; i >= 0; i-- ) {
  	reverse_arr.push(toReverse[i]);
  }
  
  return reverse_arr;
}

let reverseArrInPlace = function(toReverse) {
	let length = toReverse.length - 1;

  for ( var i = length; i >= 0; i-- ) {
  	toReverse.push(toReverse[i]);
  }

  for ( var i = 0; i <= length ; i++ ) {
  	toReverse.shift();    
  }
  
  return toReverse;
}
