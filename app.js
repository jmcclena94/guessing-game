/* Ask the user their name */
var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName + '.');
alert('That is a fantastic name ' + userName + '!');

alert('I will ask you 3 yes or no questions about myself.  Please answer with a Y or a N.');
var correctCount = 0;

/* Question 1 */
var ans1 = prompt('Question 1: Was Joe born in Cincinnati?');
console.log('The user answered ' + ans1 + ' to question 1');

if ((ans1.toUpperCase() === 'Y') || (ans1.toUpperCase() === 'YES')) {
  alert('You are correct!  Joe was born in Cincinnati.');
  correctCount += 1;
} else if ((ans1.toUpperCase() === 'N') || (ans1.toUpperCase() === 'NO')) {
  alert('Sorry, you are wrong, Joe was actually born in Cincinnati');
} else {
  alert('You did not answer Y or N :\(');
}

/* Question 2 */
var ans2 = prompt('Question 2: Does Joe like to snowboard?');
console.log('The user answered ' + ans2 + ' to question 2');

if ((ans2.toUpperCase() === 'Y') || (ans2.toUpperCase() === 'YES')) {
  alert('You are correct!  Joe does like to snowboard.');
  correctCount += 1;
} else if ((ans2.toUpperCase() === 'N') || (ans2.toUpperCase() === 'NO')) {
  alert('Sorry, you are wrong, Joe does like to snowboard');
} else {
  alert('You did not answer Y or N :\(');
}

/* Question 3 */
var ans3 = prompt('Question 3: Does Joe have 2 younger brothers?');
console.log('The user answered ' + ans3 + ' to question 3');

if ((ans3.toUpperCase() === 'Y') || (ans3.toUpperCase() === 'YES')) {
  alert('You are correct!  Joe does have 2 younger brothers.');
  correctCount += 1;
} else if ((ans3.toUpperCase() === 'N') || (ans3.toUpperCase() === 'NO')) {
  alert('Sorry, you are wrong, Joe does have 2 younger brothers.');
} else {
  alert('You did not answer Y or N :\(');
}

/* High/Low question 4 */
alert('I will now ask you another question with a numeric answer.  Please answer with a number.');

var ans4 = prompt('Question 4: How many years did Joe live in Houston, TX?');
console.log('The user guessed that Joe lived in Houston for ' + ans4 + ' years.');

if (ans4 > 3) {
  alert('Sorry, Joe only lived in Houston for 3 years.');
} else if (ans4 < 3) {
  alert('Sorry, Joe lived in Houston for 3 years.');
} else if (ans4 == 3) {
  alert('You guessed it!  He lived in Houston for 3 years.');
  correctCount += 1;
} else {
  alert('Sorry, you did not enter a number :\(');
}

/* Let them know how many they got right */
if (correctCount > 2) {
  alert('Way to go buddy, you got ' + correctCount + '/4 questions correct.  You must know Joe pretty well!');
} else {
  alert('Ouch.  You only got ' + correctCount + '/4 questions correct.  You obviously don\'t know joe very well.');
}

/* Final question, guess my number */
alert('Great job answering those questions about Joe.  For my final question, I would like you to guess the number I am thinking of.');
var ans5 = prompt('What is the number I am thinking of?');
var correctGuess = 0;
var numGuess = 0;
var myNum = 83;

while (correctGuess < 1) {
  if (ans5 < myNum) {
    numGuess += 1;
    console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
    ans5 = prompt('That guess was too low, guess again');
  } else if (ans5 > myNum) {
    numGuess += 1;
    console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
    ans5 = prompt('That guess was too high, guess again');
  } else if (ans5 == myNum) {
    numGuess += 1;
    console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
    alert('That guess was just right!  You guess my number ' + myNum + '.');
    correctGuess += 1;
  } else {
    numGuess += 1;
    console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
    ans5 = prompt('You did not guess a number :\(, please guess a number this time.');
  }
}


alert('Awesome.  Have a great day!');

/*End of Guessing Game script */
