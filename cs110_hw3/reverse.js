const reverse = function(arr)
{
	const respond = [];
	let revArray = arr.length - 1;
	for(let x = 0; x < arr.length; x = x + 1)
	{
		respond[x] = arr[revArray];
		revArray = revArray - 1;
	}
	return respond;
}

console.log(reverse([,666,"is smaller than",333]));
