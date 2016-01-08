//Ask the user their name

var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName + '.');
alert('That is a great name ' + userName + '!  I will ask you 3 yes or no questions about myself.  Please answer with a Y or a N.');

var correctCount = 0;

var questions = ['Question 1: Was Joe born in Cincinnati?', 'Question 2: Does Joe like to snowboard?', 'Question 3: Does Joe have 2 younger brothers?'];

var answers0 = ['Y', 'YES', 'N', 'NO'];

var responses0 = ['You are correct!  Joe was born in Cincinnati.', 'You are correct!  Joe was born in Cincinnati.', 'Sorry, you are wrong, Joe was actually born in Cincinnati', 'Sorry, you are wrong, Joe was actually born in Cincinnati', 'You did not answer Y or N :\('];
var responses1 = ['You are correct!  Joe does like to snowboard.', 'You are correct!  Joe does like to snowboard.', 'Sorry, you are wrong, Joe does like to snowboard', 'Sorry, you are wrong, Joe does like to snowboard', 'You did not answer Y or N :\('];
var responses2 = ['You are correct!  Joe does have 2 younger brothers.', 'You are correct!  Joe does have 2 younger brothers.', 'Sorry, you are wrong, Joe does have 2 younger brothers.', 'Sorry, you are wrong, Joe does have 2 younger brothers.', 'You did not answer Y or N :\('];

var answers = [answers0, answers0, answers0];
var responses = [responses0, responses1, responses2];

var responseElement = [document.getElementById('resultOne'), document.getElementById('resultTwo'), document.getElementById('resultThree')];


function question(index) {
  responseElement[index].textContent = questions[index];
  var promptInput = prompt(questions[index]).toUpperCase();
  var matchNum = answers[index].indexOf(promptInput);
  if (matchNum === -1) {
    responseElement[index].className = 'wrong';
    responseElement[index].textContent = responses[index][(responses[index].length - 1)];
  } else {
    if (matchNum === 0 || matchNum === 1) {
      responseElement[index].className = 'right';
      responseElement[index].textContent = responses[index][matchNum];
      correctCount++;
    } else {
      responseElement[index].className = 'wrong';
      responseElement[index].textContent = responses[index][matchNum];
    }
  }
}

question(0);
question(1);
question(2);

//Question 4
var res4=document.getElementById('resultFour');
function fourthQuestion(){
  var ans4 = prompt('Question 4: How many years did Joe live in Houston?  Please answer with a number.');
  console.log('The user guessed that Joe lived in Houston for ' + ans4 + ' years.');

  if (ans4 > 3) {
      res4.className = 'wrong';
    res4.textContent='Sorry, Joe only lived in Houston for 3 years.';
  } else if (ans4 < 3) {
    res4.className = 'wrong';
    res4.textContent='Sorry, Joe lived in Houston for 3 years.';
  } else if (ans4 == 3) {
    res4.className = 'right';
    res4.textContent='You guessed it!  He lived in Houston for 3 years.';
    correctCount += 1;
  } else {
    res4.className = 'wrong';
    res4.textContent='Sorry, you did not enter a number :\(';
  }
}

fourthQuestion();

//Let them know how many they got correct
if (correctCount > 2) {
  alert('Way to go buddy, you got ' + correctCount + '/4 questions correct.  You must know Joe pretty well!');
} else {
  alert('Ouch.  You only got ' + correctCount + '/4 questions correct.  You obviously don\'t know joe very well.');
}

//Final question: Guess my number
var res5=document.getElementById('resultFive');
function fifthQuestion(){
  var ans5 = prompt('Final question: What is the number I am thinking of?');
  var correctGuess = 0;
  var numGuess = 0;
  var myNum = 83;

  while (correctGuess < 1) {
    if (ans5 < myNum) {
      numGuess += 1;
      console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
      res5.className = 'wrong';
      ans5 = prompt('That guess was too low, guess again');
    } else if (ans5 > myNum) {
      numGuess += 1;
      console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
      res5.className = 'wrong';
      ans5 = prompt('That guess was too high, guess again');
    } else if (ans5 == myNum) {
      numGuess += 1;
      console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
      res5.className = 'right';
      res5.textContent='That guess was just right!  You guess my number ' + myNum + '.';
      correctGuess += 1;
    } else {
      numGuess += 1;
      console.log('Guess ' + numGuess + ': The user guessed ' + ans5 + '.');
      res5.className = 'wrong';
      ans5 = prompt('You did not guess a number :\(, please guess a number this time.');
    }
  }
}

fifthQuestion();

var pGame = document.createElement('a');
var linkText = document.createTextNode("Click on me to check out my partner Nick\'s game.");
pGame.appendChild(linkText);
pGame.href = "http://nicksenger.github.io/qgame/";
document.body.appendChild(pGame);

alert('Awesome.  Have a great day!');

//End of Guessing Game script
