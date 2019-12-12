$(document).ready(function () {
    var titleEl = document.querySelector('#title')
    var startbutton = document.querySelector('#start')
    var questionEl = document.querySelector('#quiz-question')
    var buttonBoxEl = document.querySelector('#button-box')


    $("#start").click(function () {
        $("#button-box").empty();
        titleEl.setAttribute("class", "hide")
        console.log("click")
        timer()
        nextquestion()
    });

    //Function for the timer
    var count = 75
    function timer() {
        var time = document.querySelector("#time")
        time.innerHTML = count
        var interval = setInterval(function () {
            count--
            time.innerHTML = count
        }, 1000);
    }

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

})

//Stop time when questions run out or time hits 0
//form appears for initial / name entry > saves to local storage when submitted then automatically appends to highscores
//highscores page is loaded so high score can be viewed.
//clean and refactor code and css
//create README

//** Bonus: Add light mode dark mode switch **/
