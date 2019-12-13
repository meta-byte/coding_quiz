$(document).ready(function () {
    var titleEl = document.querySelector('#title')
    var startbutton = document.querySelector('#start')
    var questionEl = document.querySelector('#quiz-question')
    var buttonBoxEl = document.querySelector('#button-box')
    var formBoxEl = document.querySelector('#form-box')
    var interval
    var count = 75
    var questionindex = 0
    var score

    $("#start").click(function () {
        $("#button-box").empty();
        titleEl.setAttribute("class", "hide")
        console.log("click")
        timer()
        nextquestion()
    });

    //Function for the timer
    function timer() {
        var time = document.querySelector("#time")
        time.innerHTML = count
        interval = setInterval(function () {
            if (count === 0) {
                stopTimer()
                stopQuiz()
            }
            else {
                count--
                time.innerHTML = count
            }

        }, 1000);
    }

    //Function to stop timer
    function stopTimer() {
        clearInterval(interval);
    }

    //Function that stops quiz and stores time as score
    function stopQuiz() {
        $("#button-box").empty();
        buttonBoxEl.setAttribute("class", "hide")
        formBoxEl.removeAttribute("class", "hide")
        questionEl.innerText = "You completed the quick coding quiz!"
        score = time.innerText
        console.log(score)
    }

    //Function that gets next question
    function nextquestion() {
        var currentQuestion = questions[questionindex];
        questionindex++
        console.log(currentQuestion)

        if (questionindex <= questions.length) {
            questionEl.innerText = currentQuestion.title
            for (var i = 0; i < currentQuestion.choices.length; i++) {
                var answerButton = document.createElement("button")
                answerButton.setAttribute("class", "answerbtn")
                answerButton.innerHTML = currentQuestion.choices[i]
                answerButton.setAttribute("data-id", currentQuestion.choices[i])
                buttonBoxEl.appendChild(answerButton);
            }
        }

        else {
            stopTimer()
            stopQuiz()
        }


        $(".answerbtn").click(function () {

            var selected = $(this).attr("data-id")
            var answer = currentQuestion.answer
            console.log(answer)
            console.log(selected)

            if (answer === selected) {
                count = count + 15
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

//highscores page is loaded so high score can be viewed.
//create README
//** Bonus: Add light mode dark mode switch **/
