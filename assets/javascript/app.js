    const quiz = $('#quiz');
    const submit = $('#submit');
    const totalCorrect = 0;
    const totalIncorrect = 0;

    const triviaQuestions = [
        {
            question: "What movie has a pirate named Jack Sparrow?",
            answers: {
                a: "Treasure Island",
                b: "Pirates of The Caribbean",
                c: "Hook",
                d: "Princess Bride"
            },
            correctAnswer: "b"
        },
        {
            question: "What's the name of Batman's loyal butler?",
            answers: {
                a: "James Stevens",
                b: "Otis",
                c: "Alfred Pennyworth",
                d: "Norman Osborn"
            },
            correctAnswer: "c"
        },
        {
            question: "What kind of creature is Smaug in The Hobbit Trilogy?",
            answers: {
                a: "Orc",
                b: "Elf",
                c: "Dwarf",
                d: "Dragon"
            },
            correctAnswer: "d"
        },
        {
            question: "In Transformers, who is the leader of the Autobots?",
            answers: {
                a: "Optimus Prime",
                b: "Megatron",
                c: "Ironhide",
                d: "Bumblebee"
            },
            correctAnswer: "d"
        },
        {
            question: "What movie features Jack Nicholson as the caretaker of the Overlook Hotel?",
            answers: {
                a: "The Shining",
                b: "Batman",
                c: "Mars Attacks!",
                d: "Anger Management"
            },
            correctAnswer: "a"
        }

    ];

function buildQuiz() {

}

function showResults() {

}

buildQUiz();

$('#submit').on('click', () => {
    $('#results').show();
});