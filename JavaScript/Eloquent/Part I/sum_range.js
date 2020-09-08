let range = function(start, end, step = 1) {
	let numbers = [];
  
  if ( step >= 1 ) {
    for ( i = start; i <= end; i+=step) {
      numbers.push(i);
    }
  } else {
  	for ( i = start; i >= end; i+=step) {
      numbers.push(i);
    }  
  }
  
  return numbers;
}

let sum = function(numbers) {

  var range_sum = numbers.reduce(function(a, b){
    return a + b;
  }, 0);

  return range_sum;
}