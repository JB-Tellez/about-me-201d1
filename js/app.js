var myAge = 24;

var ageQuestion = 'guess how old am I??';

for (var i = 0; i < 4; i++) {

    var ageResponse = prompt(ageQuestion);

    if (ageResponse > myAge) {

        alert('too high');

    } else if (ageResponse < myAge) {

        alert('too low');
    }
    else if (ageResponse == myAge) {

        alert('that\'s right i am ' + myAge + ' years old');

        score += 1;
      
        break;
    } 
}