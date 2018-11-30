//create an object to hold the questions and answers.
const questions = [
    {
        question: "This is question 1?",
        options: {
            a: "1-a",
            b: "1-b",
            c: "1-c",
            d: "1-d",
        },
        answer: "a"
    },
    {
        question: "This is question 2?",
        options: {
            a: "2-a",
            b: "2-b",
            c: "2-c",
            d: "2-d",
        },
        answer: "a"
    },
    {
        question: "This is question 3?",
        options: {
            a: "3-a",
            b: "3-b",
            c: "3-c",
            d: "3-d",
        },
        answer: "a"
    },
    {
        question: "This is question 4?",
        options: {
            a: "4-a",
            b: "4-b",
            c: "4-c",
            d: "4-d",
        },
        answer: "a"
    },
    {
        question: "This is question 5?",
        options: {
            a: "5-a",
            b: "5-b",
            c: "5-c",
            d: "5-d",
        },
        answer: "a"
    }
]

var timer = 60;
var intervalId;
var answers = [];

function timerStart() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
}

function countDown() {
    timer--;
    $("#timer").html("<p>" + timer + "</p>")
}

function showQuiz(question, quizContainer) {
    var output = [];
    var answers;
    for (i = 0; i < questions.length; i++) {
        answers = [];
        for (letter in questions[i].options) {
            answers.push('<label>' + '<input type="radio" name="question' + i + ' value="' + letter + '">' + letter + ': ' + questions[i].options[letter] + '</label><br>')
        };
    
        output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
    }
    output = output.join('');
    $("#quiz").append(output);
}
//start button to begin quiz
function startButton() {
    //starts timer
    timerStart();
    countDown();
    showQuiz();

    //shows quiz
    //have it bring up the questions with corresponding answers.
    //make sure it has radios before each answer. (should make it so that only one can be chosen)
    // when the timer lapses or the user submits the quiz, show results
}
//on the results page show number of questions answered correctly, incorrectly, or not answered.
//give the user the option to restart the quiz.
function showResults() {

}