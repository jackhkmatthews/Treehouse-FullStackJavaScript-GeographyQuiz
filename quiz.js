/* 1) 5 questions 2) keep track number of correct answers 3) correctAnswers 4) rank the player */

/* geography game of 5 questions, tracking score and then writing score and rank to document*/

//creating the score variables and rank

var correctAnswers = 0;
var incorrectAnswers = 0;
var rank;

//ask question function

var getResponse = function(country) {
  var response = prompt('Correct answers: ' + correctAnswers + '. Incorrect Answers: ' + incorrectAnswers + '. What is the capital of ' + country + ' ?');
  return response;
};

//update score function

var updateScore = function (response, answer) {
  if (response.toUpperCase() == answer.toUpperCase()) {
    correctAnswers = correctAnswers + 1
  } else {
    incorrectAnswers = incorrectAnswers + 1
  }
};

// ask question and update score function

var askAndUpdate = function(country, answer) {
  var response = getResponse(country);
  updateScore(response, answer);
};

//questions 1 - 5

askAndUpdate('England', 'London');
askAndUpdate('France', 'Paris');
askAndUpdate('Holland', 'Amsterdam');
askAndUpdate('Germany', 'Berlin');
askAndUpdate('French Polynesia', "Pape'ete");

//attributing a rank to each score

switch (correctAnswers){
    case 0:
      rank = 'Woeful'; 
      break;
    case 1:
      rank = 'Terrible';
      break;
    case 2:
      rank = 'Bad';
      break;
    case 3:
      rank = 'Good';
      break;
    case 4:
      rank = 'Expert';
      break;
    case 5:
      rank = 'Master';
      break;
};

//writing score and rank to document

document.write('<p>Correct answers: ' + correctAnswers + '<br>Incorrect Answers: ' + incorrectAnswers + '<br>Rank: ' + rank + '</p>')
  