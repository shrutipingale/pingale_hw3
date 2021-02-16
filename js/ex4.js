var limit  = 3;
var attempt = 1;
var secret = "secret"
while((limit+1) != attempt)
{
    var password = prompt('Enter the password: ');

    if(password === secret)
    {
        alert("You entered the correct password after "+ attempt +" attempt(s).");
        break;
    }
    attempt++;
}
if ((limit+1) == attempt)
alert("Your account is locked. You failed to enter the correct password "+limit+" time(s)");