$(document).ready(function() {
    //variables
    var questionCount = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var userAnswer;
    var answered;

    const triviaQuestions = [
        {
            question: "What movie has a pirate named Jack Sparrow?",
            choices: ["Treasure Island", "Pirates of The Caribbean", "Hook", "Princess Bride"],
            answer: 1,
            display: ""
        },
        {
            question: "What's the name of Batman's loyal butler?",
            choices: ["James Stevens", "Otis", "Alfred Pennyworth", "Norman Osborn"],
            answer: 2,
            display: ""
        },
        {
            question: "What kind of creature is Smaug in The Hobbit Trilogy?",
            choices: ["Orc", "Elf", "Dwarf", "Dragon"],
            answer: 3,
            display: ""
        },
        {
            question: "In Transformers, who is the leader of the Autobots?",
            choices: ["Optimus Prime", "Megatron", "Ironhide", "Bumblebee"],
            answer: 0,
            display: ""
        },
        {
            question: "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?",
            choices: ["The Shining", "Batman", "Mars Attacks!", "Anger Management"],
            answer: 0,
            display: ""
        }];

//start game
$('#answer-space').hide();

    $('#click-start').on('click', () => { 
        $('#click-start').hide();
        renderQuestions();
    });


//functions
function renderQuestions() {
    $('#question-space').text(triviaQuestions[questionCount].question);
    $('#answer-space').show();
    $('#option-zero').text(triviaQuestions[questionCount].choices[0]);
    $('#option-one').text(triviaQuestions[questionCount].choices[1]);
    $('#option-two').text(triviaQuestions[questionCount].choices[2]);
    $('#option-three').text(triviaQuestions[questionCount].choices[3]);
}

const correctIndex = triviaQuestions.answer[answerCount];
const answerCount = 0;
console.log(correctIndex);




$('#option-zero').click(function() {
    // console.log('click');
    if((userAnswer === correctIndex) && (answered === true)) {
    } else if (userAnswer !== correctIndex) { 
        console.log('wrong');
    }
    console.log('test');
});

$('#option-one').click(function() {
        console.log('click');
});

$('#option-two').click(function() {
        console.log('click');
  
});

$('#option-three').click(function() {
        console.log('click');
  
});


});