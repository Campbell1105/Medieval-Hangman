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


        // let addsSmallP = mainLetterNode.append(letterP)


        // let pNode = document.createTextNode("basicLetter")

    

      

        // mainLetterNode.appendChild()