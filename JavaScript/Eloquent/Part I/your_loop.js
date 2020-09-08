function loop(val, test, update, body){
	for ( let value = val; test(value); value = update(value)) {
		body(value);
	}
}