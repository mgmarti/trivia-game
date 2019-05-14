$("#start").on("click", function () {
    game.start();
});

$(document).on("click", "#end", function(){
game.done();
})

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
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("times up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2> Time Remaining: <span id='counter'>20</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#subwrapper").append("<br><button id='end'>DONE</button>")
    },
    done: function () {
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result()
    },
    result: function () {
        clearInterval(timer); 
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: "+ this.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: "+ this.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+ (questions.length-(this.incorrect+this.correct))+"</h3>");
    }

}