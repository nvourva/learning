// Counts and outputs number of Bs.
let countBs = function(string) {
	bees = 0;
	for ( i = 0; i <= string.length; i++ ) {
		if ( "B" === string[i] ) {
			bees++;
		}
	}

	console.log(bees);
}

// Counts and outputs number of given character.
let countChars = function(string, char) {
	chars = 0;
	for ( i = 0; i <= string.length; i++ ) {
		if ( char === string[i] ) {
			chars++;
		}
	}

	console.log(chars);
}

// Counts and outputs number of Bs using countChars.
let countBs = function(string) {
	countChars(string, "B");
}
