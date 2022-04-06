//Time is limited to 60 seconds
let timeshow = 60;
//Getting the Start Button
const start_Button = document.getElementById("Start-button")

//opening the quiz container and closing the windows of the start button when the start button is clicked
start_Button.onclick=() => {
  document.getElementById("start").id = "close-start"
  document.getElementById("quiz").id = "quiz-start"

//Initialising the timer when the start button is clicked
  const time = document.getElementById("Timer");

  //Reducing the time second by second
  const countDown = setInterval(() => {
    timeshow--;
    displayTime();
    //Ending the time at 00:00
    if (timeshow < 1) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);

//Logic on displaying the time
  function displayTime() {
    const min = Math.floor(timeshow / 60);
    const sec = Math.floor(timeshow % 60);
    //displaying the time to the Timer ID on HTML
    time.innerHTML= `Time Left: ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
}

//Array to store questions and answers
const quizdata = [
  {
    Number: "1",
    question: "What animal is known to be man's best friend?",
    a: "Dog",
    b: "Cat",
    c: "Elephant",
    d: "Sloth",
    correct: "a",
  },
  {
    Number:"2",
    question: "What reptile is known for the ability to change its body color?",
    a: "Frog",
    b: "Snake",
    c: "Chameleon",
    d: "Beaver",
    correct: "c",
  },
  {
    Number:"3",
    question: "In the entire animal kingdom, What is the only species where the male gives birth?",
    a: "Seahorses",
    b: "Jellyfish",
    c: "Sea-anemone",
    d: "Euglena",
    correct: "a",
  },
  {
    Number:"4",
    question: "What is the largest species of bird?",
    a: "Emus",
    b: "Ostriches",
    c: "Bustards",
    d: "Pelicans",
    correct: "b",
  },
  {
    Number:"5",
    question: "What color is the blood of an octopus?",
    a: "Red",
    b: "Blue",
    c: "Brown",
    d: "Crimson",
    correct: "b",
  },
  {
    Number:"6",
    question: "Which animal is known to spend 90% of its day, sleeping?",
    a: "Bat",
    b: "Python",
    c: "Sloth",
    d: "Koala Bear",
    correct: "d",
  },
  {
    Number:"7",
    question: "What fish is known to be the largest in the world?",
    a: "Shark",
    b: "Tuna",
    c: "Seer",
    d: "Catfish",
    correct: "a",
  },
  {
    Number:"8",
    question: "What animal is the fastest land animal?",
    a: "Panther",
    b: "Puma",
    c: "Cheetah",
    d: "sloth",
    correct: "c",
  },
  {
    Number:"9",
    question: "which animal is known to be the slowest animal in the world?",
    a: "Giraffe",
    b: "Sloth",
    c: "Llama",
    d: "Koala Bears",
    correct: "b",
  },
  {
    Number:"10",
    question: "How many arms do most starfish have?",
    a: "Six",
    b: "Eight",
    c: "Four",
    d: "Five",
    correct: "d",
  },
];

//Initializing variables for bearing quiz question and and radio buttons
const quiz = document.getElementById("quiz");
//Answers
const allanswers = document.querySelectorAll(".answer");
//Question
const questions = document.getElementById("question");
//Radio Buttons
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
//submit button
const nextbtn = document.getElementById("submit");

//setting up variables to
let currentQuiz = 0;
let score = 0;
let correctQuestions = 0;

loadquiz();
//Initating quiz data into the place holders
function loadquiz() {
  showAnswers();
  const currentQuizData = quizdata[currentQuiz];
  questions.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
//Making sure every radio value is not checked 
function showAnswers() {
  allanswers.forEach((ans) => (ans.checked = false));
}

//Getting the value from the radio buttons
function getRadioValue() {
  let answer;
  allanswers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}
//Arrays to store data for correct and incorrect answers
let correct=[]
let incorrect=[]

nextbtn.addEventListener("click", () => {
  const answer = getRadioValue();
  if (answer) {
    if (answer === quizdata[currentQuiz].correct) {
      //if the answer given is correct
      correct.push("Question "+(currentQuiz+1)+" Correct");
      score = score + 2;
      correctQuestions = correctQuestions + 1;
    } else{
      //if the answer is incorrect
      incorrect.push("Question "+(currentQuiz+1)+" inCorrect");
      score=score-1;
    }
    currentQuiz++;
    //if the questions are not over
    if (currentQuiz < quizdata.length) {
      loadquiz();
      //if the questions are over
    } else {
      document.getElementById("quiz-start").id ="quiz"
      document.getElementById("result").id = "active-result"  
      document.getElementById("Time-show").innerHTML=`You ended the quiz in ${(60-timeshow)} seconds`
      changeBackground();  
    }
  }
})

//when the time ends
function endTime() {
  document.getElementById("quiz-start").id = "quiz"
  document.getElementById("result").id = "active-result"
  changeBackground();
}
 
//changing back grounds according to the marks and displaying the marks
function changeBackground() {
  document.getElementById("User-score").innerHTML=`${score}`
  document.getElementById("Number-score").innerHTML=`You have got ${correctQuestions} out of ${quizdata.length} questions right`
  if (score < 5) {
    document.getElementById("static").id = "static-weak";
  } else if (score < 9) {
    document.getElementById("static").id = "static-poor";
  } else if (score < 13) {
    document.getElementById("static").id = "static-average";
  } else if (score < 17) {
    document.getElementById("static").id = "static-good";
  } else {
    document.getElementById("static").id = "static-best";
  }
}