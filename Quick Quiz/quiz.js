const question = document.getElementById("quiz");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let accepting_answers = false;
let score = 0;
let question_counter = 0;
let available_questions = [];
let current_question = {};

let questions = [
    {
        question : "What is the correct option among them",
        choices : "A",
        choices : "B",
        choices : "C",
        choices : "D",
        answer : 1
    },
    {
        question : "Which one is not correct among them",
        choices : "A",
        choices : "B",
        choices : "C",
        choices : "D",
        answer : 3
    },
    {
        question : "What is the correct option among them",
        choices : "A",
        choices : "B",
        choices : "C",
        choices : "D",
        answer : 4
    }
];

const correct_bonus = 10;
const max_questions= 3;

quiz = ()=>{
    question_counter = 0;
    score= 0;
    available_questions = [... questions];
    getNewQuestions();
};


getNewQuestions = () =>{
    if(available_questions.length === 0 || question_counter >= max_questions){
        return window.location.assign = ("./end.html");
    }
    question_counter ++;
    let question_index = Math.floor(Math.random() * available_questions.length);
    //see if else is required or not
}