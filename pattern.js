function print(num)
{
	for(i=1;i<=num;i++)
	{
		let con="8";
		let text="";
		let print;
		for(j=0;j<i;j++)
		{
			text=text.concat(con);
		}
		console.log(text);
	}

}
print(5);
