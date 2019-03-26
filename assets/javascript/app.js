$(document).ready(function() {
    //variables
    var questionCount = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

    const triviaQuestions = [
        {
            question: "What movie has a pirate named Jack Sparrow?",
            choices: ["Treasure Island", "Pirates of The Caribbean", "Hook", "Princess Bride"],
            answer: 1,
            display: ""
        },
        {
            question: "What's the name of Batman's loyal butler?",
            choices: ["Stevens", "Otis", "Alfred Pennyworth", "Norman Osborn"],
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



// var questionArray = [
//     "What movie has a pirate named Jack Sparrow?",
//     "What's the name of Batman's loyal butler?",
//     "What kind of creature is Smaug in The Hobbit Trilogy?",
//     "In Transformers, who is the leader of the Autobots?",
//     "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?"
// ];

const answerArray = ["Pirates of The Caribbean", "Alfred Pennyworth", "Dragon", "Optimus Prime", "The Shining"];
const answerIndex = 0;
console.log(answerArray);


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
    $('#option-one').text(triviaQuestions[questionCount].choices[0]);
    $('#option-two').text(triviaQuestions[questionCount].choices[1]);
    $('#option-three').text(triviaQuestions[questionCount].choices[2]);
    $('#option-four').text(triviaQuestions[questionCount].choices[3]);
}

$('.btn').click(function() {
    if (answerArray < triviaQuestions.length)
        var buttonValue = answerArray[answerIndex];
        console.log(buttonValue);

        if(buttonValue === triviaQuestions[questionCount].answer) {
            console.log('correct!')
        }
});







//     var triviaQuestions = ["What movie has a pirate named Jack Sparrow?", "What's the name of Batman's loyal butler?",
//     "What kind of creature is Smaug in The Hobbit Trilogy?", "In Transformers, who is the leader of the Autobots?", 
//     "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?"];

//     var answers = ["Pirates of The Caribbean",  ];
//     var optionOne = ["Treasure Island", "James Stevens", "Orc", "Optimus Prime"];
//     var optionTwo = ["Pirates of The Caribbean", "Otis", "Elf", "Megatron"];
//     var optionThree = ["Hook", "Norman Osborn", "Dragon", "Ironhide"];
//     var optionFour = ["Princess Bride", "Alfred Pennyworth", "Dwarf", "Bumblebee"];

//     //display at start
//     $('#answer-space').hide();
//     $('#question-space').hide();
    

//     //question one
//     $('#click-start').on('click', () => {
//         $('#click-start').hide();
//         $('#question-space').show();
//         $('#question-space').html(triviaQuestions[0]);
//         $('#answer-space').show();
//         $('#option-one').html(optionOne[0]);
//         $('#option-two').html(optionTwo[0]);
//         $('#option-three').html(optionThree[0]);
//         $('#option-four').html(optionFour[0]);
//     });
    
//     //question two
//     $('#option-two').on('click', () => {
//         // $('#answer-space').show();
//         // $('#answer-space').html("Wrong! answer is...");
//         $('#question-space').show();
//         $('#question-space').html(triviaQuestions[1]);
//         $('#answer-space').show();
//         $('#option-one').html(optionOne[1]);
//         $('#option-two').html(optionTwo[1]);
//         $('#option-three').html(optionThree[1]);
//         $('#option-four').html(optionFour[1]);
//     });
    
//     //question three
//     $('#option-four').on('click', () => {

//         $('#question-space').show();
//         $('#question-space').html(triviaQuestions[2]);
//         $('#answer-space').show();
//         $('#option-one').html(optionOne[2]);
//         $('#option-two').html(optionTwo[2]);
//         $('#option-three').html(optionThree[2]);
//         $('#option-four').html(optionFour[2]);
//     });
    
});