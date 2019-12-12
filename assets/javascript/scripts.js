$(document).ready(function () {
    // put everything in here
})

startbutton = document.querySelector('#start')


$("#start").click(function () {
    startbutton.setAttribute("class", "hide")
    console.log("click")
    timer()
});

console.log(questions)



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


//Function that updates timer and gets next question

function nextquestion() {

}

//Function that stops the quiz when the time ends and saves the score to storage
//Get score from storage and append it to high scores page.
