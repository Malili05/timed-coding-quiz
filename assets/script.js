// WHEN I click the start button
//THEN a timer starts and I am presented with a question
var startBtn = document.querySelector(".start-button");
var questionCont = document.querySelector(".questions");
var questionTitle = document.querySelector("#questions-title");
var choicesCont = document.querySelector("#choices");
var timerEL = document.querySelector("timer-text");

startBtn.addEventListener("click", showQuestions);





var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 60) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);




var currentIndex = 0
function showQuestions() {
    //this console logs the first element of questions array which is an OBJECT containing questionText, options, etc
    console.log(questionsArray[0])
    var currentQuestion=questionsArray[currentIndex]
    questionTitle.textContent = currentQuestion.questionText

            //empty out choices container to remove old buttons
            choicesCont.innerHTML=""

    for (var i = 0; i < currentQuestion.options.length; i++) {
        var choiceEl = document.createElement("button")
        var choice = currentQuestion.options[i]
        console.log("choice", choice)

        choiceEl.textContent=choice
        choiceEl.setAttribute("value", choice)
        choicesCont.appendChild(choiceEl)
    }
}
function questionClick(event) {
console.log("event", event)
var buttonEl = event.target
console.log("value", buttonEl.value)
//we can increment current question counter by 1 on the click of any option button
currentIndex++
//we can call the next question with the currentindex that we just incremented
showQuestions()
}

//attach event listener to the container with choices buttons
choicesCont.addEventListener("click", questionClick)


var questionsArray = [
    {
    questionText: "2 + 2 =", 
    options: ["4","6","9","7"],
    answer: "4"
},
    {
    questionText: "3 + 3 =", 
    options: ["4","6","9","7"],
    answer: "6"
},
    {
    questionText: "4 + 5 =", 
    options: ["4","6","9","7"],
    answer: "9"
},
    {
    questionText: "3 + 4 =", 
    options: ["4","6","9","7"],
    answer: "7"
},
]

//WHEN I answer a question
//THEN I am presented with another question


//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and score
