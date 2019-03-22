$(document).ready(function() {
    //variables
    var questionCount = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

    var triviaQuestions = ["What movie has a pirate named Jack Sparrow?", "What's the name of Batman's loyal butler?",
    "What kind of creature is Smaug in The Hobbit Trilogy?", "In Transformers, who is the leader of the Autobots?", 
    "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?"];


    //display at start
    $('#answer-space').hide();
    $('#question-space').hide();


    //functions
    $('#click-start').on('click', () => {
        $('#click-start').hide();
        $('#question-space').show();
        $('#question-space').html(triviaQuestions[questionCount]);
        $('#answer-space').show();

    });
});
