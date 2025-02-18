let n = window.prompt("Enter the integer for its factorial= ","0");
let i;
let prod=1;
function factorial(n)
{
for(i=1;i<=n;i++)
{
prod=prod*i;
}
return prod;
}
document.write("The factorial of n is ",factorial(n));