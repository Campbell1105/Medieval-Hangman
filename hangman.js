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

console.log(alphabetArray);
// const buttons = function () {

//     alphabet.appendChild(alphabetArray)
//     const myButtons = document.getElementById('buttons');
//       letters = document.createElement('ul');

for (var i = 0; i < alphabetArray.length; i++) {
  let mainLetterNode = document.querySelector(".alphabetBox");

  let letterDiv = document.createElement("div");

  letterDiv.setAttribute("id", `${alphabetArray[i]}`);

  let letterNode = document.createTextNode(`${alphabetArray[i]}`);

  letterDiv.appendChild(letterNode);

  mainLetterNode.appendChild(letterDiv);
}

for (var i = 0; i < alphabetArray.length; i++) {
  let letterClick = document.getElementById(`${alphabetArray[i]}`);

  // let grayOut = document.getElementById()
  letterClick.addEventListener("click", (e) => {
    console.log(e);
    // gray out the letter chosen,
    e.target.style.color = "white";

    // if (letter.clicked){
    //   console.log("clicked")
    //   //if the div has been clicked, then change the style to gray
    //   letterDiv.style.color = "lightgrey";
    // }
  });
}

//__________________________________________________________________________________________

let answer = "";

function setAnswer() {
  //randomly choose a word to show

  const wordOrder = wordList[Math.floor(Math.random() * wordList.length)];
  const chosenWord = document.getElementById("wordStatus");
  chosenWord.innerHTML = wordOrder; 
  const answer = chosenWord;
  const wordIndex = wordList.indexOf(wordOrder);
  console.log(wordIndex);

  // compare word index with the clue index

  //TODO: when answer is chosen randomly, the clue is also accessed and shown

  // function checkArrays(answer, clueList) {
  //   for (i = 0; i < array.length; i++)
  //   let(answer.array[i] === clueList.array[i]);
  //   let(clueList.array[i] = querySelector.innerHTML(".clueClass"));
  // }
}
setAnswer();
// const wordDisplay = [];

// let generatedAnswerDisplay = document.getElementById("wordStatus");

// function generateAnswerDisplay() {

//__________________________________________________________________________________________

//inside word status, have as many underscore images inside divs as there are words in the answer

{
  for (var i = 0; i < answer.length; i++) {
    let mainAnswerNode = document.querySelector(".wordStatus");

    let blankDiv = document.createElement("div");

    // let mainAnswerTextNode = document.createTextNode(`${answer[i]}`);

    let answerNode = document.createTextNode(`${answer[i]}`);

    blankDiv.appendChild(answerNode);

    blankDiv.setAttribute("id", `letter-${i}`);

    mainAnswerNode.appendChild(blankDiv);

    // element.style.border = "white 5px solid";
    // element.style.width = "60px";
    // element.style.width = "100px";
  }
}

//letter clicked matches letter in answer){}

//replace blank id with letter id that goes according the position in the answer

// let splitWord = answer[i].split("")

// for(var j = 0; j < splitWord.length; i++
//create a div with an image underline in it for each letter
// letterBlank.???

//iterate over the letters of the answer
//  if a letter matches a letter chosen by the user then the letter will replace the image with the blank as many times as it is in the answer

//__________________________________________________________________________________________

//advance the hangman a step}

const containerHint = document.getElementById("clues");

function showClues() {
  containerHint.innerHTML = `clues - ${hint}`;
}

showClues();
