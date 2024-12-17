let a = window.prompt("Enter the first side: ","0");
let b = window.prompt("Enter the second side: ","0");
let c = window.prompt("Enter the third side: ","0");

if(a+b>c||a+c>b||c+b>a)
{
	if(a*a+b*b==c*c||a*a+c*c==b*b||c*c+b*b==a*a)
	{
	document.write("The triangle is a right angled triangle ");
	}
	else if(a*a+b*b>c*c||a*a+c*c>b*b||c*c+b*b>a*a)
	{	
	document.write("The triangle is an acute angled triangle ");
	}
	else
	{
	document.write("The triangle is an obtuse angled triangle ");
	}
}
else
{
	document.write("The side does not forms a triangle.");
}