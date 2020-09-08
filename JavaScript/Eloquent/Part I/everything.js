function everyLoop(array, predicate) {
	for ( let element of array ) {
		if ( !predicate(element) ) {
			return false;
		}
	}
}

function everySome(array, predicate) {
	return !array.some( element => !predicate(element) );
}