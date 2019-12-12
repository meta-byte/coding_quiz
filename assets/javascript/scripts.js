$(document).ready(function () {
    // put everything in here
})

var titleEl = document.querySelector('#title')
var startbutton = document.querySelector('#start')
var questionEl = document.querySelector('#quiz-question')
var buttonBoxEl = document.querySelector('#button-box')


$("#start").click(function () {
    // startbutton.setAttribute("class", "hide")
    $("#button-box").empty();
    titleEl.setAttribute("class", "hide")
    console.log("click")
    timer()
    nextquestion()
});

var count = 75
//Function for the timer
function timer() {
    var time = document.querySelector("#time")
    time.innerHTML = count
    var interval = setInterval(function () {
        count--
        time.innerHTML = count
    }, 1000);
}

//Function that stops the quiz when the time ends and saves the score to storage

//Function that gets next question
var questionindex = 0
function nextquestion() {

    var currentQuestion = questions[questionindex];
    questionindex++
    console.log(currentQuestion)
    questionEl.innerText = currentQuestion.title
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.setAttribute("class", "answerbtn")
        answerButton.innerHTML = currentQuestion.choices[i]
        answerButton.setAttribute("data-id", currentQuestion.choices[i])
        buttonBoxEl.appendChild(answerButton);

    }
    $(".answerbtn").click(function () {

        var selected = $(this).attr("data-id")
        var answer = currentQuestion.answer
        console.log(answer)
        console.log(selected)

        if (answer === selected) {
            $("#button-box").empty();
            // answerButton.setAttribute("class", " hide")
            nextquestion()

        }
        else {
            $("#button-box").empty();
            nextquestion()
            count = count - 15
            time.innerHTML = count
        }
    });

}

//Click answer

//Get score from storage and append it to high scores page.
