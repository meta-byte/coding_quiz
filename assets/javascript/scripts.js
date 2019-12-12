$(document).ready(function () {
    // put everything in here
})

var titleEl = document.querySelector('#title')
var startbutton = document.querySelector('#start')
var questionEl = document.querySelector('#quiz-question')
var buttonBoxEl = document.querySelector('#button-box')


$("#start").click(function () {
    startbutton.setAttribute("class", "hide")
    console.log("click")
    timer()
    nextquestion()
});

//Function for the timer
function timer() {
    var time = document.querySelector("#time")
    var count = 15
    time.innerHTML = count
    var interval = setInterval(function () {
        count--
        time.innerHTML = count
    }, 1000);
}

//Function that stops the quiz when the time ends and saves the score to storage


//Function that gets next question
function nextquestion() {
    var currentQuestion = questions[0];
    console.log(currentQuestion)
    questionEl.innerText = currentQuestion.title
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.setAttribute("class", "btn")
        answerButton.innerHTML = currentQuestion.choices[i]
        buttonBoxEl.appendChild(answerButton);
    }

}



//Function that stops the quiz when the time ends and saves the score to storage
//Get score from storage and append it to high scores page.
