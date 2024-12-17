let x = window.prompt("Enter the price of first item: ","0");
let y = window.prompt("Enter the price of second item: ","0");
let z = window.prompt("Enter the price of third item: ","0");
total= +x + +y + +z
if(total>1000)
{
	discount=total*0.1;
}
else
{
	discount=0;
}
document.write("The total amount is :",(total-discount));

