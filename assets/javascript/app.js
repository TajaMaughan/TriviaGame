//create an object to hold the questions and answers.
const questions = [
    {
        question: "In <i>The Sword and the Stone</i>, what does Merlin call the greatest force on earth?",
        options: {
            a: "Magic ",
            b: "Love ",
            c: "Family ",
            d: "The Sword ",
        },
        answer: "b"
    },
    {
        question: "What is the name of Belle's horse in <i>Beauty and the Beast</i>?",
        options: {
            a: "Philippe",
            b: "Johnson",
            c: "Napoleon",
            d: "Alexander",
        },
        answer: "a"
    },
    {
        question: "In <i>Aladdin</i>, how many years was Genie trapped in the lamp?",
        options: {
            a: "50",
            b: "2,000",
            c: "6",
            d: "10,000",
        },
        answer: "d"
    },
    {
        question: "How many Disney cruise ships are there?",
        options: {
            a: "2",
            b: "8",
            c: "4",
            d: "6",
        },
        answer: "c"
    },
    {
        question: "In <i>Monsters, Inc.</i>, what is Boo's real name?",
        options: {
            a: "Mary",
            b: "Justine",
            c: "Jessica",
            d: "Matilda",
        },
        answer: "a"
    },
    {
        question: "What is Wall-E's favorite musical?",
        options: {
            a: "<i>Camelot</i>",
            b: "<i>Paint Your Wagon</i>",
            c: "<i>Seven Brides for Seven Brothers</i>",
            d: "<i>Hello, Dolly!</i>",
        },
        answer: "d"
    },
    {
        question: "What were Mickey and Minnie's original names?",
        options: {
            a: "Manuel and Missy",
            b: "Mortimer and Minerva",
            c: "Matthew and Madeline",
            d: "Micah and Mabel",
        },
        answer: "b"
    },
    {
        question: "In <i>101 Dalmations</i>, how many puppies on Pongo and Perdita start out with?",
        options: {
            a: "6",
            b: "12",
            c: "15",
            d: "8",
        },
        answer: "c"
    },
    {
        question: "Which Disney Princess has the least amount of lines?",
        options: {
            a: "Aurora",
            b: "Rapunzel",
            c: "Belle",
            d: "Jasmine",
        },
        answer: "a"
    },
    {
        question: "Which Disney Princess has a star on the Hollywood Walk of Fame?",
        options: {
            a: "Merida",
            b: "Cinderella",
            c: "Pocahontas",
            d: "Snow White",
        },
        answer: "d"
    }
];
//declare variables;
var timer = 60;
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
    $("#timer").html("<p>Time remaining: " + timer + "</p>")
    if (timer == 0) {
        //showResults();
        $("#results").append("<div><p>Times up!</p></div>")
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
            answers.push('<label>' + '<input type="radio" name="answer' + [i] + '"' + 'value="' + letter + '">' + letter + ': &nbsp' + questions[i].options[letter] + '&nbsp </label>')
        };

        output.push('<div class="question"><p>' + questions[i].question + '</p></div>' + '<div class="answers"><p>' + answers.join('') + '</p></div>');
    }
    output = output.join('');
    $("#quiz").append(output);
    $("#quizHide").append('<div><button id="submitButton">Submit</button></div>')
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
function showResults() {
    $("#quizHide").hide();
    clearInterval(intervalId);
    getValues();
    checkValues();
    $("#results").append("<p>Correct: " + correctAnswers + "</p>");
    $("#results").append("<p>Incorrect: " + incorrectAnswers + "</p>");
    $("#results").append("<p>Unanswered: " + unanswered + "</p>"); 
}
//submit button
$("body").on("click", "#submitButton", showResults)