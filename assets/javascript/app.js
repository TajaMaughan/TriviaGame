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
];
//declare variables;
var timer = 10;
var intervalId;
var answers;
var output;
var values;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
//timer function
function timerStart() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
}
//decrement timer function
function countDown() {
    timer--;
    $("#timer").html("<p>" + timer + "</p>")
    if (timer == 0) {
        //showResults();
        $("#results").append("<div>Times up!</div>")
        showResults();

    }
}
//show quiz function
function showQuiz(question, quizContainer) {
    output = [];
    answers;
    for (i = 0; i < questions.length; i++) {
        answers = [];
        for (letter in questions[i].options) {
            answers.push('<label>' + '<input type="radio" name="answer' + [i] + '"' + 'value="' + letter + '">' + letter + ': ' + questions[i].options[letter] + '</label><br>')
        };

        output.push('<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>');
    }
    output = output.join('');
    $("#quiz").append(output);
}
//retrieve user input
function getValues() {
    values = [];
    for (j = 0; j < answers.length + 1; j++) {
        var selectedAnswer = $("input[name=answer" + [j] + "]:checked").val()
        values.push(selectedAnswer);

    }
    console.log(values);
}
//check user input against answers
function checkValues() {
    for (k = 0; k < questions.length; k++) {
        if (questions[k].answer === values[k]) {
            correctAnswers++;
        } else if (values[k] === undefined) {
            unanswered++;
        } else {
            incorrectAnswers++;
        }
    }
}
//start button to begin quiz
$("body").on("click", "#startButton", function startButton() {
    $("#startButton").hide();
    //starts timer
    timerStart();
    countDown();
    //shows quiz    
    showQuiz();
})
//on the results page show number of questions answered correctly, incorrectly, or not answered.
$("body").on("click", "#submitButton", function showResults() {
    $("#quizHide").hide();
    clearInterval(intervalId);
    getValues();
    checkValues();
    $("#results").append("Correct: " + correctAnswers + "<br>");
    $("#results").append("Incorrect: " + incorrectAnswers + "<br>");
    $("#results").append("Unanswered: " + unanswered + "<br>"); 
})