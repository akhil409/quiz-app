const quizData = [{
    question:'How old is Akhil?',
    a:"20",
    b:"22",
    c:"24",
    d:"26",
    correct:'d',
},{
    question:'What is the most used Programming Language in 2022?',
    a:'Java',
    b:'Angular',
    c:'Python',
    d:'REACT',
    correct:'c',
},{
    question:'Who is the President of USA?',
    a:'Narendra Modi',
    b:'Donald Trump',
    c:'Joe Biden',
    d:'Putin',
    correct:'c',
},{
    question:'Who is the CEO of Google?',
    a:'Elon Musk',
    b:'Satya Nadella',
    c:'Sundar Pichai',
    d:'Jeff Bezos',
    correct:'c',
},{
    question:'What is HTML Stands for?',
    a:'Hyper Test Markup Language',
    b:'Hyper Text Markup Language',
    c:'High Test Markup Language',
    d:'High Text Markup Language',
    correct:'b',
}];

const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submit');

let currentQuiz=0; //It is like index of anquizdata [0,1,2,3,4]

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    //  currentQuiz++;   //// Calling this currentQuiz here and also in button too, so that behavier is changing - like skipping one option another and not getting the final result ////
}

loadQuiz();

//Selected Radio Buttons
function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}

getSelected();

//Deselect Radio Buttons
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

//Buttom Click EventListener
let score=0;

submitbtn.addEventListener('click',()=>{
    //Check to see the answer
    const answer = getSelected();

    // console.log(answer);
    
  if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++;
      }

    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
   } else{
       //TODO Show Results 
       quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. <h2>
       <button onclick="location.reload()"> Reload </button>`;   //location.reload() it is a method to reload the page
   }
  }  

});


// 01:10:15 https://www.youtube.com/watch?v=dtKciwk_si4

// Mistakes Done in this Quiz App //
//1.Forgot to give the class in all input elements in HTML file -Behaviour By that getting Undifined in console and not getting into next option in chrome
//2.i have Called this currentQuiz++ in loadQuiz() and also in button too,Behaviour is changing - like skipping one option another and not getting the final result .So i have put currentQuiz++ in button script only//// 
//3.Commenting the currentQuiz++ in button function and load quiz - Behaviour is not going to the next option