function stockAndCount( n, arr ) {

	let pairs = 0;

	const colors = arr.reduce((acc, val) => {

		(!!acc[val]) ? acc[val] += 1 : acc[val] = 1;
		return acc; 
	}, {});

	Object.keys(colors).forEach( n => {
		let pair = parseInt( colors[n] / 2);
		if ( pair >= 1 ) pairs += pair;
	});

	return pairs;
}

console.log(stockAndCount(9, [10, 10, 20, 30,30,40,50,50]))