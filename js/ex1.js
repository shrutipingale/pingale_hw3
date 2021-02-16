var username = prompt("Enter your name: "); 
alert("Your name is " + username);
let unit = Number(prompt("Enter the number of units completed:"));
if (unit>=0)
{
   if(unit>=0 && unit<=30)
   {
       alert("Your grade standing is Freshman")
} 
else{
    if(unit>=30 && unit<=60)
    {
        alert("Your grade standing is Sophomore")
 } else
 {
    if(unit>=60 && unit<=90)
    {
        alert("Your grade standing is Junior")
 } else
 {
    if(unit>90)
    {
        alert("Your grade standing is Senior")
 } 
 else{
     alert("Not a valid input");
 }
 }
 } 
}
}
else {
alert("Enter the correct number of units")
}