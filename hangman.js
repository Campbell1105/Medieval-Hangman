// windows.onload = function () {

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
  ["oak gall", "beer", "jester", "gambeson", "pepper", "shire"],
];

const clueList = [
  [
    "what medieval scribes used for ink, also the same color as this font",
    "most consumed beverage",
    "the only person who could insult the king and get away with it",
    "what you wore under you armor",
    "most expensive spice in England",
    "english name for a county",
  ],
];

//
//

const alphabet = document.querySelector(".alphaTest");

// alphabet.textContent = "hello"

console.log(alphabetArray);
// const buttons = function () {

//     alphabet.appendChild(alphabetArray)
//     const myButtons = document.getElementById('buttons');
//       letters = document.createElement('ul');

for (var i = 0; i < alphabetArray.length; i++) {
  let mainLetterNode = document.querySelector(".alphaTest");

  let letterDiv = document.createElement("div");

  letterDiv.setAttribute("id", `${alphabetArray[i]}`);

  let letterNode = document.createTextNode(`${alphabetArray[i]}`);


  letterDiv.appendChild(letterNode);

  mainLetterNode.appendChild(letterDiv);
  
}

for (var i = 0; i < alphabetArray.length; i++) {
  let mainLetterNode = document.querySelector(".alphaTest");

  let letterDiv = document.createElement("div");

  letterDiv.setAttribute("id", `${alphabetArray[i]}`);

  let letterNode = document.createTextNode(`${alphabetArray[i]}`);


  letterDiv.appendChild(letterNode);

  mainLetterNode.append(letterDiv);
  

let letterClick = document.getElementById(`${alphabetArray[i]}`);

letterClick.addEventListener("click", e =>{

console.log(e)

e.target.style.color="white"

  // if (letter.clicked){
  //   console.log("clicked")
  //   //if the div has been clicked, then change the style to gray
  //   letterDiv.style.color = "lightgrey";
  // }
});


}
// gray out the letter chosen,
// let grayOut = document.getElementById()

//show a letter if it is in the word,

//inside word status, have as many underscore images inside divs as there are words in the answer



//advance the hangman a step}

// let addsSmallP = mainLetterNode.append(letterP)

// let pNode = document.createTextNode("basicLetter")

let answer = "";

function setAnswer() {

  //randomly choose a word to show

  const wordOrder = Math.floor(Math.random() * wordList.length);
  const chosenWord = wordList[wordOrder];
  answer = chosenWord;
}

setAnswer();

// const wordDisplay = [];

let generatedAnswerDisplay = document.getElementById("wordStatus");

function generateAnswerDisplay(word) {
  var wordList = word.split("");
  for (var i = 0; i < answer.length; i++) {

  //create a div with an image underline in it for each letter

  let letterBlank = document.createElement("div")

  // letterBlank.???

  //TODO: make this function have the same DOM manipulation features as with the alphabet

  //iterate over the letters of the answer
  //  if a letter matches a letter chosen by the user then the letter will replace the image with the blank as many times as it is in the answer




  
  //
  //   if (wordList[i] === ) {
  //     wordDisplay.push("_");
  //   } else {
  //     wordDisplay.push("-");
  //   }
  // }
  // return wordDisplay.join(" ");
}}

const containerHint = document.getElementById("clues");



function showClues() {
  containerHint.innerHTML = `clues - ${hint}`;
}

showClues();
