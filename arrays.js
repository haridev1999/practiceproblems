let arr=[1,"a",2,"b",3,"c",4,"d",[5,[6,7,8,9],10],11,"e",12,"f",["g","h","i","j","k"]]
function print(item)
{
	if(!isNaN(item))
	{
		console.log(item);
	}
	else
	{
		if(Array.isArray(item))
		{
			item.forEach(print);
		}
	}

}
arr.forEach(print);
