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
  "what you wore under you armor",
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
  
  // chosenWord.innerHTML = orderedWord;
  // const answer = chosenWord;
  
  // console.log(orderedWord);

  // console.log(answer)

  // Producing letter blanks

  for (let b = 0; b < answer.length; b++) {
    // console.log(answer);
    let answerLetterDiv = document.createElement("div");

    // answerLetterDiv.setAttribute("id", `blankDiv-${answer[b]}`);
    answerLetterDiv.setAttribute("id", `blankDiv-${b}`);
    // console.log(answerLetterDiv)
    wordStatus.appendChild(answerLetterDiv);

    // function checkArrays(wordList, clueList) {
    //   const results = [];
    
    //   for (let i = 0; i < wordList.length; i++) {
    //     let answer = wordList[i];
    
    //     if (answer === clueList[i]) {
    //       results.push(clueList[i].querySelector(".clueClass").innerHTML);
    //     }
    //   }
    
    //   return results;
    // } 
   }


    let cluesDiv = document.getElementById('clues');
    let clue = clueList[wordIndex]
    cluesDiv.innerHTML = `${clue}`

  //loop over answer
  //create as many divs as there are letters

  //console.log(answer.split(""), "split");
  // console.log(wordIndexForComparing)

  // compare word index with the clue index

  // set answer elements to 'display none' and reveal when clicked???

  //   console.log(e);
  //   // gray out the letter chosen,

  // chosenLoopedWord = chosenWord;

  for (let i = 0; i < alphabetArray.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      //console.log(answer[j], "looped split")
      //console.log(alphabetArray[i], "just i")
      if (alphabetArray[i] == answer[j]) {
        let correctLetter = document.getElementById(
          `blankDiv-${j}`
        );
        console.log(correctLetter);
        correctLetter.innerHTML = alphabetArray[i];
      }
    }
  }

    for (let k = 0; k < alphabetArray.length; k++) {
      let letterClick = document.getElementById(`${alphabetArray[k]}`);
      //console.log(letterClick)
      // let grayOut = document.getElementById()

      letterClick.addEventListener("click", (e) => {
        //console.log(e);
        //gray out the letter chosen,
        e.target.style.color = "rgb(46, 12, 12)";
        // console.log(e.target.innerHTML);

        //  function letterClick(){
        //   document.getElementById("id", `blankDiv-${answer[b]}`).style.visibility = "visible";
        // }

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
