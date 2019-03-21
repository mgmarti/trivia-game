$(document).ready(function() {
    $('.question-one').hide();
    $('.question-two').hide();
    $('.question-three').hide();
    $('.question-four').hide();
    $('.question-five').hide();

    $('.btn').on('click', () => {
        $('.click-start').hide();
        $('.question-one').show();
        $('.question-two').hide();
        $('.question-three').hide();
        $('.question-four').hide();
        $('.question-five').hide();
    });
});
