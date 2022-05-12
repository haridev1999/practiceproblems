let pali = "malayalam"; 
function check(word)
{
	let len= word.length;
	for(let i=0, j= len-1 ; i<=j ;)
	{
		if (word.charAt(i)==word.charAt(j))
		{
			i++;
			j--;
			if (i==j)
			{
				console.log("It is a Palindrome");
			}
		}
		else
		{
			console.log("It is not a Palindrome");
			i=len+3
		}
	}
}
check(pali);
