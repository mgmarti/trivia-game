$(document).ready(function() {
    //variables
    var questionCount = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

    var triviaQuestions = ["What movie has a pirate named Jack Sparrow?", "What's the name of Batman's loyal butler?",
    "What kind of creature is Smaug in The Hobbit Trilogy?", "In Transformers, who is the leader of the Autobots?", 
    "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?"];

    var answers = ["Pirates of The Caribbean", ];
    var optionOne = ["Treasure Island", "James Stevens", "Orc", "Optimus Prime"];
    var optionTwo = ["Pirates of The Caribbean", "Otis", "Elf", "Megatron"];
    var optionThree = ["Hook", "Norman Osborn", "Dragon", "Ironhide"];
    var optionFour = [];

    //display at start
    $('#answer-space').hide();
    $('#question-space').hide();


    //question one
    $('#click-start').on('click', () => {
        $('#click-start').hide();
        $('#question-space').show();
        $('#question-space').html(triviaQuestions[questionCount]);
        $('#answer-space').show();
        $('#option-one').html(optionOne[0]);
        $('#option-two').html(optionTwo[0]);
        $('#option-three').html(optionThree[0]);
        $('#option-four').html(optionFour[0]);
    });

    $('#option-two').on('click', () => {
        $('#answer-space').show();
        $('#answer-space').html("Wrong! answer is...");
        correctAnswers++
    });

    $('#option-one')

    //question two

    //question three

    //question four

    //question five

});
