
var q6 = prompt('guss, how old am I??')
var myAge = 24;
var i;

for (i = 0; (i < 4); i++) {
    if (60 > q6 && q6 > 49) {
        console.log(q6)
        alert('I am younger than ' + q6);

    } else if (30 < q6 && q6 < 49) {
        alert('I am older than ' + q6);
    }

    else if (100 > q6 && q6 > 49) {
        alert(' I am not that old!!');
    }
    else if (0 < q6 && q6 < 29) {
        alert( ' I am not that young!!');

    }
    else if (q6 == myAge) {
      
        alert('that\'s right i am 24 years old ' );
        break;
    }

    else if (i == 3) {
        alert('I am 49 years old');
        break;
    }
    q6 = prompt('guss, how old am I??');
}

