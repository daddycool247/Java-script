let x = window.prompt("Enter the total number of calls: ","0");
let charges=0
if(x>150)
{
	charges = (x-150)*0.8;
}
else 
{
	charges = 0;
}
document.write("The total bill = ",400+charges);
