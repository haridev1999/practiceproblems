let word3="caste";
let word4="cart";
function check(word1,word2)
{
	if (word1.length!=word2.length)
	{
		console.log("The number of letters should be the same to calculate hamming distance");
	}
	else
	{
		let j=0;
		for(let i=0 ; i<word1.length ; i++)
		{
			if (word1.charAt(i)!=word2.charAt(i))
			{
				j++;
			}
		}
	console.log("The hamming distance is ",j);
	}
}
check(word3,word4);

