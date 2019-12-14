$(document).ready(function () {
    var titleEl = document.querySelector('#title')
    var questionEl = document.querySelector('#quiz-question')
    var buttonBoxEl = document.querySelector('#button-box')
    var formBoxEl = document.querySelector('#form-box')
    var scoreBoxEl = document.querySelector('#scores-box')
    var scoreName = document.querySelector('#inputName')
    var highscoresEl = document.querySelector('#highscores')
    var interval
    var count = 75
    var questionindex = 0
    var score
    var highscores

    //start quiz
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
        stopTimer()
        $("#button-box").empty();
        buttonBoxEl.setAttribute("class", "hide")
        formBoxEl.removeAttribute("class", "hide")
        formBoxEl.setAttribute("class", "col-8 text-center")
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
                answerButton.setAttribute("class", "btn answerbtn")
                answerButton.innerHTML = currentQuestion.choices[i]
                answerButton.setAttribute("data-id", currentQuestion.choices[i])
                buttonBoxEl.appendChild(answerButton);
            }
        }

        else {
            stopQuiz()
        }

        //answer buttons click event
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
    //score form submit click 
    $("#submit").click(function (event) {
        generateScores()
    });

    //Function to populate scores
    function generateScores() {
        highscores = JSON.parse(localStorage.getItem("scores")) || [];

        highscores.unshift({
            name: scoreName.value,
            score: score,
        });

        localStorage.setItem("scores", JSON.stringify((highscores)))

        formBoxEl.setAttribute("class", "hide")
        questionEl.innerText = "Can you beat your high score?"
        scoreBoxEl.removeAttribute("class", "hide")
        scoreBoxEl.setAttribute("class", "col-8 text-center")
        for (var j = 0; j < highscores.length; j++) {
            var highscores = JSON.parse(localStorage.getItem("scores")) || [];
            $("#yourScores").append('<li class="list-group-item">' + "Name: " + highscores[j].name + "  Score: " + highscores[j].score + '</li>')
        }

    }

    //Highscores nav link click event
    highscoresEl.addEventListener("click", function () {
        titleEl.setAttribute("class", "hide")
        $("#button-box").empty();
        generateScores()
    })

    //Clear Scores button click event
    $("#clearScore").click(function () {
        localStorage.clear()
        // highscores = ""
        $("#yourScores").empty()
    })
})
