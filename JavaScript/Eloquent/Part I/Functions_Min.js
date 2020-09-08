let min = function(a, b) {
 if ( a > b ) {
   console.log(a);
 } else if ( b > a ) {
   console.log(b);
 } else if ( a === b ) {
   console.log("Equals");
 } else {
   console.log("Try again!");
 }
}

min(9, 3);
min(5, 8);
min(5,5);
min(3, "a");
