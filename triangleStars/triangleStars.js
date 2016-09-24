const stars = function (n)
{
	if (n === 0)
	{
		return "";
	}
	
	return '*' + stars (n - 1);
}

const spaces = function (n)
{
	if (n === 0)
	{
		return "";
	}
	
	return ' ' + spaces (n - 1);
}

const triangleStars = function (number) 
{
	const createStars = function (number, numOfStars)
	{
		console.log(spaces(number - 1) + stars(numOfStars));
		if (number > 1)
		{
			createStars(number-1, numOfStars+2);
		}
	}	

	createStars(number, 1);
}

triangleStars(4);