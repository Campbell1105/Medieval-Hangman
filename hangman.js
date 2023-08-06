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

const wordList = ["oak gall", "beer", "jester", "gambeson", "pepper", "shire"];

const clueList = [
  "what medieval scribes used for ink, also the same color as this font",
  "most consumed beverage",
  "the only person who could insult the king and get away with it",
  "what you wore under you armor",
  "most expensive spice in England",
  "english name for a county",
];

const alphabet = document.querySelector(".alphabetBox");

let chosenLoopedWord;

let indexedChosenWord;

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
  
  
  
  
  const orderedWord = wordList[Math.floor(Math.random() * wordList.length)];
  const chosenWord = document.getElementById("wordStatus");
  chosenWord.innerHTML = orderedWord;
  // const answer = chosenWord;
  const wordIndex = wordList.indexOf(orderedWord);
  // console.log(wordIndex);
  
  indexedChosenWord = wordList[wordIndex];
  
  
  // Producing letter blanks
  
  for (let b = 0; b < indexedChosenWord.length; b++) {
    
    let answerLetterDiv = document.createElement("div");

    answerLetterDiv.setAttribute("id", `blankDiv-${indexedChosenWord[i]}`)
    
    chosenWord.appendChild(answerLetterDiv)
    

  }
    //loop over indexedChosenWord
      //create as many divs as there are letters
      

      
      console.log(indexedChosenWord.split(""));
  // console.log(wordIndexForComparing)
  
  // compare word index with the clue index
  
  // set answer elements to 'display none' and reveal when clicked???
  
  //   console.log(e);
  //   // gray out the letter chosen,
  
  chosenLoopedWord = chosenWord;
  
  
  for (let i = 0; i < alphabetArray.length; i++) {
    for (let j = 0; j < indexedChosenWord.length; j++) {
      // console.log(alphabetArray[i].innerHTML)
      // console.log(indexedChosenWord[j])
      
      if (alphabetArray[i] === indexedChosenWord[j]) {
        
        let correctLetter = document.getElementById(`blankDiv-${alphabetArray[i]}`)
        
        
        correctLetter.innerHTML = `${alphabetArray[i]}`
        
        //access any id with the same letter that's in a blank div
        /// add content to it
        
        
        
        // console.log(indexedChosenWord[j])
        
        //
      }
    }
    
    for (let k = 0; k < alphabetArray.length; k++) {
      let letterClick = document.getElementById(`${alphabetArray[k]}`);
    
      // let grayOut = document.getElementById()
      letterClick.addEventListener("click", (e) => {
        console.log(e);
        // gray out the letter chosen,
        e.target.style.color = "rgb(46, 12, 12)";
        //here is where we need to show if the clicked letter matches any of the blanks
        
        // 
    });
    
    
    }
  }
}

setAnswer();

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

  // function checkArrays(chosenWord, clueList) {
  //   for (let i = 0; i < chosenWord.length; i++) {
  //     chosenWord[i] === clueList[i];
  //     clueList[i] = document.querySelector.innerHTML(".clueClass");
  //   }
  // }

  // checkArrays("hello", "this is a clue");

  //_________________________________________________________________________________________
