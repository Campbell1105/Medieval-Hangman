const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const wordList = [
   "venice",
   "beer",
   "jester",
   "gambeson",
   "pepper", 
   "shire", 
   "vassal", 
   "charlemagne",
  ];

const clueList = [
  "in the middle ages, what city did the medici family rule",
  "the most consumed beverage",
  "the only person who could insult the king and get away with it",
  "what you wore under your armor",
  "the most expensive spice in England",
  "english name for a county",
  "in the middle ages, what was a the term for a low ranking noble",
  "who was the first ever holy roman emperor",
];

const alphabet = document.querySelector(".alphabetBox");

let chosenLoopedWord;



for (let a = 0; a < alphabetArray.length; a++) {
  let mainLetterNode = document.querySelector(".alphabetBox");

  let letterDiv = document.createElement("div");

  letterDiv.setAttribute("id", `${alphabetArray[a]}`);

  let letterNode = document.createTextNode(`${alphabetArray[a]}`);

  letterDiv.appendChild(letterNode);

  mainLetterNode.appendChild(letterDiv);
}

//__________________________________________________________________________________________

let answer = "";

function setAnswer() {
  //randomly choose a word to show
  const wordStatus = document.getElementById("wordStatus"); 
  
  const wordIndex = Math.floor(Math.random() * wordList.length)
  answer = wordList[wordIndex];

  // create the answer layout
  for (let b = 0; b < answer.length; b++) {

    let answerLetterDiv = document.createElement("div");

    answerLetterDiv.setAttribute("id", `blankDiv-${b}`);
    wordStatus.appendChild(answerLetterDiv);

   }

// display clue
    let cluesDiv = document.getElementById('clues');
    let clue = clueList[wordIndex]
    cluesDiv.innerHTML = `${clue}`

// add click event to the alphabet
    for (let k = 0; k < alphabetArray.length; k++) {
      let letterDiv = document.getElementById(`${alphabetArray[k]}`);
      


      letterDiv.addEventListener("click", (e) => {
        //gray out the letter chosen,
        e.target.style.color = "rgb(46, 12, 12)";
      // Next if the letter matches the letter in the answer then show the letter
guessIsCorrect = false
        // comparing the clicked letter to the letters in the answer
          for (let j = 0; j < answer.length; j++){
          // does the clicked letter equal the answer letter?
            if (alphabetArray[k] === answer[j]) {
              let correctLetter = document.getElementById(`blankDiv-${j}`);
              correctLetter.innerHTML = alphabetArray[k];

              guessIsCorrect = true


            }    
          }

          fullAnswer = true
            // SET WIN CONDITIONS
            // if all the answer letters have been selected then set "you win" in the text box
            for (let j = 0; j < answer.length; j++){
              if (document.getElementById(`blankDiv-${j}`).innerHTML === ""){
                fullAnswer = false
              }
            }

            if (fullAnswer === true) {
              document.getElementById("textBox").innerHTML = " YOU WIN"
              return
            }
            


          if (guessIsCorrect === false) {
            document.getElementById("textBox").innerHTML += "X" 
          }
          // if the text in the text box = XXXXXX then trigger the you lose statement
          if (document.getElementById("textBox").innerHTML === "XXXXXX"){
            document.getElementById("textBox").innerHTML = " YOU LOSE"
          }

        //If e.target'ID' === letterDiv'ID' then document.getElementById.innerHTML'ID'
        //if innerHTML of target equals the any element of split string, put the letter in the div
      });
    }
//  }
}

setAnswer();

clueList;

// const wordDisplay = [];
//  console.log(chosenLoopedWord.innerHTML)

// let generatedAnswerDisplay = document.getElementById("wordStatus");

// function generateAnswerDisplay() {

//__________________________________________________________________________________________

//inside word status, have as many underscore images inside divs as there are words in the answer

// {
//   for (var i = 0; i < answer.length; i++) {
//     let mainAnswerNode = document.querySelector(".wordStatus");

//     let blankDiv = document.createElement("div");

//     // let mainAnswerTextNode = document.createTextNode(`${answer[i]}`);

//     let answerNode = document.createTextNode(`${answer[i]}`);

//     blankDiv.appendChild(answerNode);

//advance the hangman a step

//_______________________________________________________________________________
//TODO: when answer is chosen randomly, the clue is also accessed and shown

// checkArrays("hello", "this is a clue");

//_________________________________________________________________________________________
