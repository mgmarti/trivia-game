$("#start").on("click", function () {
    for(var i = 0; i<questions.length; i++){
        $("#subwrapper").append("<h2>"+questions[i].question+"</h2>");
        for(var j = 0;j<questions[i].answers.length; j++) {
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
    }
});

var questions = [{
        question: "What movie has a pirate named Jack Sparrow?",
        answers: ["Treasure Island", "Pirates of The Caribbean", "Hook", "Princess Bride"],
        correctAnswer: "Pirates of The Caribbean"
    },
    {
        question: "What's the name of Batman's loyal butler?",
        answers: ["James Stevens", "Otis", "Alfred Pennyworth", "Norman Osborn"],
        correctAnswer: "Alfred Pennyworth"
    },
    {
        question: "What kind of creature is Smaug in The Hobbit Trilogy?",
        answers: ["Orc", "Elf", "Dwarf", "Dragon"],
        correctAnswer: "Dragon"
    },
    {
        question: "In Transformers, who is the leader of the Autobots?",
        answers: ["Optimus Prime", "Megatron", "Ironhide", "Bumblebee"],
        correctAnswer: "Optimus Prime"
    },
    {
        question: "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?",
        answers: ["The Shining", "Batman", "Mars Attacks!", "Anger Management"],
        correctAnswer: "The Shining"
    }
];

// var game = {
//     questions: questions,
//     currentQuestion: 0,
//     counter: 30,
//     correct: 0,
//     incorrect: 0,
//     countdown: function () {
//         game.counter--; //lowers counter
//         $("#counter").html(game.counter); //posts counter to page
//         if (game.counter <= 0) { //checks if counter is less than or equal to 0
//             console.log("Time Up!");
//             game.timesUp();
//         }
//     },
//     loadQuestion: function () {
//         timer = setInterval(game.countdown, 1000) //every 1000 ms the countdown function will run
//         $("#subwrapper").html("<h2>"+questions[game.currentQuestion].question+"</h2>");
//         for (var i = 0; i < questions[game.currentQuestion].answers.length; i++); {
//             $("#subwrapper").append('<button class="answer-button" id="button-'+i+'f" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
//         }
//     },
//     nextQuestion: function () {

//     },
//     timesUp: function () {

//     },
//     results: function () {

//     },
//     clicked: function () {

//     },
//     answeredCorrect: function () {

//     },
//     answeredIncorrect: function () {

//     },
//     reset: function () {

//     }
// }