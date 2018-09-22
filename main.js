const wordCodeElem = document.getElementById('inputWord');
const codeWordElem = document.getElementById('inputCode');
const wordToButton = document.getElementById('wordButton');
const codeToButton = document.getElementById('codeButton');

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

letters.forEach(function(element) {
  console.log(element);
});

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }