/**
 * This is the main encoder grid.
 */
const grid=[
          ['5','a','t','k','z'],
          ['b','r','0','z','5'],
          ['7','3','6','t','r'],
          ['a','3','c','2','i'],
          ['6','4','m','p','o'],
          [   ,'l','q','3','5']];
/**
 * The term to be encoded.
 */ 
let term='abcd';
//Function to determine how many shifts to be made depending on the alphabet
function number(term1)
{
          let word=term1.toLowerCase()
          let array=[];
          for(let i=0;i<word.length;i++)
          {
                  let num=word.charCodeAt(i);
                  array.push(num-96);
          }
          return array
}
console.log(number(term));
let code=number(term);
//Function to shift as many times as the number given as the parameter
function shift(num)
{
         let arr=[...grid];
         let m=arr.length;
         let n=arr[0].length;
         let a;
         let i=5;
         let j=0;
		//condition to check if the number is greater than 18 since only 18 shifts can be done before the matrix resets 
         if(n>18)
                 a=num-18;
         else
                 a=num;
         for(let k=0;k<a;k++)
         {
                 if(j==0)
                 {
                         for(;i>0;i--)
                         {
                                 let x=arr[i][j];
                                 arr[i][j]=arr[i-1][j];
                                 arr[i-1][j]=x;
                         }
                 }
                 if(i==0)
                 {
                         for(;j<n-1;j++)
                         {
                                 let x=arr[i][j];
                                 arr[i][j]=arr[i][j+1];
                                 arr[i][j+1]=x;
                         }
                 }
                 if(j==n-1)
                 {
                         for(;i<m-1;i++)
                         {
                                 let x=arr[i][j];
                                 arr[i][j]=arr[i+1][j];
                                 arr[i+1][j]=x;
                         }
                 }
                 if(i==m-1)
                 {
                         for(;j>0;j--)
                         {
                                 let x=arr[i][j];
                                 arr[i][j]=arr[i][j-1]
                                 arr[i][j-1]=x;
                         }
                 }
         }
        console.log(arr[0][0])
        return arr[0][0];
}
//let result=code.map(n => shift(n));
//console.log(result)
let sum=0;
//Loop to determine how many shifts to be made by calculating the number of shifts already made
for(let i=0;i<code.length;i++)
{
    let nums=code[i]-sum
    shift(nums);
    sum=sum+nums;
}
