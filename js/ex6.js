var valid = true;
do{
    var hr = parseInt(prompt('Enter an Hour: '));
    if(hr>-1 && hr>24) valid = false;
    var min = parseInt(prompt('Enter an Minute: '));
    if(min>-1 && min>59) valid = false;
    var sec = parseInt(prompt('Enter an Second: '));
    if(sec>-1 && sec>59) valid = false;
    if(!valid) alert('Invalid input! Try again.')
} while(!valid);

sec++;
if(sec==60)
{
    sec = 0; min++;
    if(min==60)
    {
        min = 0; hr++;
        if(hr==24)
            hr=0;
    }
}

alert("One second later: "+hr+"h"+min+"m"+sec+"s");