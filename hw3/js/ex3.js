var con=true;
while (con)
{
    var i = Number(prompt("Enter 1 for Addition\nEnter 2 for Subtraction\nEnter 3 for Multiplication\nEnter 4 for Divison\nEnter 5 for Modulo\nEnter 0 to Stop\n"));
    switch(i)
    {
        case 1:
        var a = Number(prompt("Enter first number"));
        var b = Number(prompt("Enter second number"));
        alert(a + b);
        console.log(a+b);
        break;

        case 2:
        a = Number(prompt("Enter first number"));
        b = Number(prompt("Enter second number"));
        alert(a - b);
        console.log(a-b);
        break;

        case 3:
        a = Number(prompt("Enter first number"));
        b = Number(prompt("Enter second number"));
        alert(a * b);
        console.log(a*b);
        break;

        case 4:
        a = Number(prompt("Enter first number"));
        b = Number(prompt("Enter second number"));
        alert(a / b);
        console.log(a/b)
        break;

        case 5:
        a = Number(prompt("Enter first number"));
        b = Number(prompt("Enter second number"));
        alert(a % b);
        console.log(a%b);
        break;

        default:
        con=false;
    }
}