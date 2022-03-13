//mobile menu icon toggle open/close and nav items
const menuButton = document.querySelector(".material-icons-outlined");
const navItems = document.querySelector(".nav-items");
const navLinks = document.querySelector(".nav-items li a");

menuButton.addEventListener("click", mobileMenu);
navLinks.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu(){
    menuButton.classList.toggle("active");
    navItems.classList.toggle("active");
}
function closeMenu(){
    menuButton.classList.remove("active");
    navItems.classList.remove("active");
};

//for choosing the destination result based on your chosen answers to the 5 questions

//variables
const questionContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById('submit');

//questions of the quiz (object literals = questions)
const myQuestions = [
    {
        question: "1. What does your ideal destination look like?",
        answers: {
            A: "On the beach",
            B: "Surrounded by mountains",
            C: "Big city life with shopping",
            D: "A little bit of everything",
        },
        correctAnswer: "A" //if they choose 'A'
    },
    {
        question: "2. What does your budget look like?",
        answers: {
            A: "Let's travel in luxury",
            B: "All about that frugal life",
        },
        correctAnswer: "A" //if they choose 'A'
    },
    {
        question: "3. How far are you willing to travel?",
        answers: {
            A: "Let's stay in the states",
            B: "Let's go international",
        },
        correctAnswer: "A" //if they choose 'A'
    },
    {
        question: "4. What kind of weather would you like to experience?",
        answers: {
            A: "Beautiful winter snow",
            B: "Sun, sun, sun",
            C: "Some rain is nice",
            D: "Any of the four seasons",
        },
        correctAnswer: "D" || "B" //if they choose D or B
    },
    {
        question: "5. Why do you want to travel?",
        answers: {
            A: "To relax and recharge",
            B: "To learn about different cultures",
            C: "To embark on an adventure",
            D: "To indulge in delicious cuisine",
        },
        correctAnswer: "A" //if they choose A 
    },
];

//building the quiz
function buildQuiz(){}
//variable to store the HTML output
const output = [];

//for each question
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        
    }
)


function showResults(){}



//display quiz right away
buildQuiz();

//on submit, show the results
submitButton.addEventListener('click', showResults);







