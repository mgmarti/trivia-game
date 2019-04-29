$("#start").on("click", function () {
    $("#start").remove();
});

const triviaQuestions = [{
        question: "What movie has a pirate named Jack Sparrow?",
        choices: ["Treasure Island", "Pirates of The Caribbean", "Hook", "Princess Bride"],
        answer: "Pirates of The Caribbean",
        image: "assets/images/jack-sparrow.gif"
    },
    {
        question: "What's the name of Batman's loyal butler?",
        choices: ["James Stevens", "Otis", "Alfred Pennyworth", "Norman Osborn"],
        answer: "Alfred Pennyworth",
        image: ""
    },
    {
        question: "What kind of creature is Smaug in The Hobbit Trilogy?",
        choices: ["Orc", "Elf", "Dwarf", "Dragon"],
        answer: "Dragon",
        image: ""
    },
    {
        question: "In Transformers, who is the leader of the Autobots?",
        choices: ["Optimus Prime", "Megatron", "Ironhide", "Bumblebee"],
        answer: "Optimus Prime",
        image: ""
    },
    {
        question: "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?",
        choices: ["The Shining", "Batman", "Mars Attacks!", "Anger Management"],
        answer: "The Shining",
        image: ""
    }
];

var game = {
    questions:questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    countdown: function() {
         game.counter--;
         $("#counter").html(game.counter);
         if(game.counter<=0){
             console.log("Time Up!");
             game.timesUp();
         }
    },
    loadQuestion: function() {

    },
    nextQuestion: function() {

    },
    timesUp: function() {

    },
    results: function() {

    },
    clicked: function() {

    },
    answeredCorrect: function() {

    },
    answeredIncorrect: function() {

    },
    reset: function() {

    }
}


