let name = window.prompt("Enter your Name","your name");
let age = parseInt(window.prompt("Enter your age","Age please"));

function print_name_age(n,a)
{
document.write("<br>Hi "+ n +" your age is "+a)
if(age<18)
{
state="not an adult"
}
else
{
state="an adult"
}
return state
}
document.write("<br>"+name+" your are " +print_name_age(name,age))

