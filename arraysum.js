let array=[1232,6546,45435,644353,454534];
let result=[];
function add(num)
{
	let sum=0;
	let quo=num;
	let res;
	for(;quo!=0;quo=Math.floor(quo/10))
	{
		if(quo>=10)
			sum+=quo%10;
		else
			sum+=quo;
	}
	if(sum>=10)
	{
		res=add(sum);
	}
	else
	{
		res=sum;
	}
	return res;
}
result=array.map(x=>add(x));
console.log(result);


