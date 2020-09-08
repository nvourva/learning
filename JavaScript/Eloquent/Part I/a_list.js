function arrToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArr(list) {
	let arr = [];

	for (lst = list; lst; lst = lst.rest) {
		arr.push(lst.value);
	}

	return arr;
}

function prepend(value, list) {
	return {value, rest:list};
}

function nth(list, n) {
	if (!list) return undefined;
	else if ( n == 0 ) return list.value;
	else return nth(list.rest, n - 1);
}