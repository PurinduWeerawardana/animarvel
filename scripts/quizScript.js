const start_Button = document.getElementById("Start-button")


start_Button.onclick=() => {
  document.getElementById("start").id = "close-start"
  document.getElementById("quiz").id = "quiz-start"

  const time = document.getElementById("Timer");
let timeshow = 100000;

displayTime(timeshow);

const countDown = setInterval(() => {
  timeshow--;
  displayTime(timeshow);
  if (timeshow <= 0 || timeshow < 1) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  time.innerHTML= `Time Left: ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}
}

const quizdata = [
  {
    question: "What animal is known to be man's best friend?",
    a: "Dog",
    b: "Cat",
    c: "Elephant",
    d: "Sloth",
    correct: "a",
  },
  {
    question: "What reptile is known for the ability to change its body color?",
    a: "Frog",
    b: "Snake",
    c: "Chameleon",
    d: "Beaver",
    correct: "c",
  },
  {
    question:
      "In the entire animal kingdom, What is the only species where the male gives birth?",
    a: "Seahorses",
    b: "Jellyfish",
    c: "Sea-anemone",
    d: "Euglena",
    correct: "a",
  },
  {
    question: "What is the largest species of bird?",
    a: "Emus",
    b: "ostriches",
    c: "Bustards",
    d: "Pelicans",
    correct: "b",
  },
  {
    question: "What color is the blood of an octopus?",
    a: "Red",
    b: "Blue",
    c: "Brown",
    d: "Crimson",
    correct: "b",
  },
  {
    question: "Which animal is known to spend 90% of its day, sleeping?",
    a: "Bat",
    b: "Python",
    c: "Sloth",
    d: "Koala Bear",
    correct: "d",
  },
  {
    question: "What fish is known to be the largest in the world?",
    a: "Shark",
    b: "Tuna",
    c: "Seer",
    d: "Catfish",
    correct: "a",
  },
  {
    question: "What animal is the fastest land animal?",
    a: "Panther",
    b: "Puma",
    c: "Cheetah",
    d: "sloth",
    correct: "c",
  },
  {
    question: "which animal is known to be the slowest animal in the world?",
    a: "Giraffe",
    b: "Sloth",
    c: "Llama",
    d: "Koala Bears",
    correct: "b",
  },
  {
    question: "How many arms do most starfish have?",
    a: "Six",
    b: "Eight",
    c: "Four",
    d: "Five",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let correctQuestions = 0;

loadquiz();

function loadquiz() {
  deselectAnswers();
  const currentQuizData = quizdata[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}


nextbtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizdata[currentQuiz].correct) {
      score = score + 2;
      correctQuestions = correctQuestions + 1;
    }
    currentQuiz++;
    if (currentQuiz < quizdata.length) {
      loadquiz();
    } else {
      document.getElementById("quiz-start").id = "quiz"
      document.getElementById("result").id = "active-result"
      if (currentQuiz === 0 || score < 1) {
        score === 0;
      }
      changeBackground();  
    }
  }
});

function endTime() {
  document.getElementById("quiz-start").id = "quiz"
  document.getElementById("result").id = "active-result"
  document.getElementById("User-score").innerHTML=`${score}`
  changeBackground();
}

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
