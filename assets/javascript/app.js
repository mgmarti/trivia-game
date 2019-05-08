$("#start").on("click", function () {
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
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


let game = {
    correct: 0,
    incorrect: 0,
    timer: 120,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0) {
            console.log("times up");
            game.done();
        }
    }
}