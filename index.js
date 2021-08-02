var readlineSync = require('readline-sync');
const chalk = require('chalk');
const CFonts = require('cfonts');

//score of quiz
var score=0;

//highscores scored 
var highscore = [
  {
    name: "Rohan",
    score: 10
  },
  {
    name: "Nishant",
    score: 9
  }
]

//questions object
var questions = [
  {
  question:"Who is the current world chess champion? ",
  answer: "Magnus Carlsen"
},
{
  question: " What is the total number of squares on a chess board? ",
  answer: "64"
},
{
  question: "Which piece could be “checkmated” in chess? ",
  answer: "King"
},
{
  question: "Which is the most powerful piece on a chess board? ",
  answer: "Queen"
},
{
  question: "What is the highest title for professional chess players? ",
  answer: "Grandmaster"
},
{
  question: "Chess is originated from which country? ",
  answer: "India"
},
{
  question: "Which color can make the first move in a chess game? ",
  answer: "White"
},
{
  question: "Which piece can jump over another piece in a move? ",
  answer: "Knight"
},
{
  question: "Which piece can only move diagonally in a move? ",
  answer: "Bishop"
},
{
  question: ". Which piece can move only in a forward direction? ",
  answer: "Pawn"
}
]


//welcome the player
function welcome(){
  CFonts.say("THE CHESS QUIZ");
  var userName = readlineSync.question('Can I know your name? ');
  console.log('Welcome ' +userName+ ' to "The Chess Quiz"');
}

//logic of whole quiz
function quiz(){
  for(i=0;i<questions.length;i++){
    var response = readlineSync.question((i+1)+". "+questions[i].question);
    if(response.toUpperCase()===questions[i].answer.toUpperCase()){
      score++;
      console.log(chalk.green("You are correct!"));
      console.log("Your score is "+score)
    }
    else{
      console.log(chalk.red("Your answer is unfortunately wrong"));
      console.log("Your score is "+score);
    }
  }
}

//show the final score and highscore
function showScore(){
  console.log(chalk.green("Your final score is: "+score));
  console.log("Check out the highscores: ");
  console.log("1."+ highscore[0].name+"  score: "+ highscore[0].score);
  console.log("2."+ highscore[1].name+"  score: "+ highscore[1].score);
  console.log("ping me if you beat the highscores to update!");
}

//call functions
welcome();
quiz();
showScore();
