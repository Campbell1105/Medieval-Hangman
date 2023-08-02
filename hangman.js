// windows.onload = function () {

    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
// 
//

    const alphabet = document.querySelector('.alphatest')  
    
    // alphabet.textContent = "hello"


    console.log(alphabetArray)
    // const buttons = function () {
    
//     alphabet.appendChild(alphabetArray)
//     const myButtons = document.getElementById('buttons');
//       letters = document.createElement('ul');
  
      for (var i = 0; i < alphabetArray.length; i++) {

        // alphabet.appendChild

        // console.log(alphabetArray[i])

        let mainLetterNode = document.querySelector(".alphatest")

        let letterP = document.createElement('p')

        let attP = document.createAttribute(`id="test"`);

        letterP.append(attP)


        let letterNode = document.createTextNode(`${alphabetArray[i]}`) 
        letterP.appendChild(letterNode);

        mainLetterNode.append(letterP)

      }
        // let addsSmallP = mainLetterNode.append(letterP)


        // let pNode = document.createTextNode("basicLetter")

        function setAnswer() {
          const wordOrder = Math.floor(Math.random() * wordlist.length);
          const chosenWord = wordList[wordOrder];
        }

        var wordDisplay = [];
        var answer = "";

        let generateAnswerDisplay = document.getElementById("wordStatus")

        function generateAnswerDisplay(word) {
          var wordList = word.split("");
          for (var i = 0; i < answer.length; i++) {
            if (wordList[i] !== "-") {
              wordDisplay.push("_");
            } else {
              wordDisplay.push("-");
            }
          }
          return wordDisplay.join(" ");
        }

const containerHint = document.getElementById("clues");

const wordList = [
    ["oak gall", "beer", "jester", "gambeson", "pepper", "shire",]
  ]

const clueList = [[
  "what medieval scribes used for ink, also the same color as this font", 
  "most consumed beverage",
  "the only person who could insult the king and get away with it",
  "what you wore under you armor",
  "most expensive spice in England",
  "english name for a county"
]]

function showClues() {
  containerHint.innerHTML = `clues - ${hint}`;
}