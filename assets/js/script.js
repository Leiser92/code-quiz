//global variables
const intro = document.getElementById("intro");
const timer = document.getElementById("countdown");
const startBtn = document.getElementById("start-btn");
const quizQuestions = document.getElementById("quizQuestions");
const answer = document.getElementById("answer");
let timeLeft = 60;
let questionNum = 0;


//questions
const questions = [
   
    {
        question: "Inside which HTML element do we put the Javascript?",
        answer: "<script>",
        options: [
            "<javascript>",
            "<script>",
           "<scripting>" ,
           "<js>"
        ]
    },
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        answer: "toUpperCase()",
        options: [
           "toUpperCase()" ,
            "toUpper()",
            "changeCase(case)",
            "None of the above.",
        ]
    },
    {
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answer: "local variable",
        options: [
            "global variable",
           "local variable" ,
           "Both of the above" ,
           " None of the above"
        ]
    },
    {
        question: "Using a period between the object name and property is called what?",
        answer: "Dot Notation",
        options: [
         "Dot Notation",
         "Dot Conjunction",
         "Dot Addition",
         "Dot Function"
         
        ]
    },
];


//timer
function setTimer() {
    let timeInterval = setInterval(function (){
        timer.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}


//start button

startBtn.addEventListener("click", function (){
    intro.style.display = "none";
    setTimer();
    startQuiz();

});

function startQuiz() {
    const quizBox = document.createElement("div");
    quizBox.setAttribute("id", "quizBox");
    document.body.appendChild(quizBox);
  
    // questions
    const questionContainer = document.createElement("div");
    questionContainer.setAttribute("id", "question");
    quizBox.appendChild(questionContainer);
    questionContainer.textContent = questions[questionNum].question;
  
    //answers
    questions[questionNum].options.forEach(function (answers) {
      const button = document.createElement("button");
      quizBox.appendChild(button);
      button.setAttribute("class", "answers");
      button.textContent = answers;
      button.addEventListener("click", correctAnswer);
    });
  }
  
  //checking for correct answer
  function correctAnswer(event) {
    if (event.target.textContent === questions[questionNum].answer) {
      alert("Correct!");
    
    } else {
      alert("Incorrect!");
      
    }
    questionNum++;
    nextQuestion();
  }
  
  // next question
  function nextQuestion() {
    if (questionNum < questions.length) {
      document.getElementById("quizBox").remove();
      startQuiz();
    } else {
      endQuiz();
    }
  };
  



