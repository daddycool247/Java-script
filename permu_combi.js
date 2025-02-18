let n = parseInt(window.prompt("Enter the total number of observation = ","0"));
let r = parseInt(window.prompt("Enter the number of observation to be selected = ","0"));

let i;
let prod=1;
function factorial(n)
{
	let prod=1;
	for(i=1;i<=n;i++)
	{
		prod=prod*i;
	}
	return prod;
}

function permutation(n,r)
{
	sol=factorial(n)/factorial(n-r);
	return sol;
}
document.write(n+"! factorial= "+factorial(n));
document.write("<br>"+(n-r)+"! factorial= "+factorial(n-r));
document.write("<br> nPr = " +permutation(n,r));

function combination(n,r)
{
	soln=permutation(n,r)/factorial(r);
	return soln
}
document.write("<br> nCr = "+combination(n,r));