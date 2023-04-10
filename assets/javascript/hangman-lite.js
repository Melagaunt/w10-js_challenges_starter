(function () {

  document.write("hello from hangman-lite.js");

})();

//introMsg
(function () {
  document.write("<br /><br />");
  let title = "## Hangman Lite"
  let nlLog = '\n'
  let nlDoc = "<br /><br />"
  let msg = "Create a variable called word that contains a hangman word, and create a second variable called letter that indicates the letter that the player guessed. Print out \"Yeah, the letter x exists y times in my word\" if the letter exists (but substitute the actual letter and the number of times). If the letter doesn't exist, print out \"Nope, that letter doesn't exist in my word."
  console.log(title + nlLog + msg);
  document.getElementById('instructions').innerHTML =
    document.getElementById('instructions').innerHTML
    + (title + nlDoc + msg);
})();

(function () {
howTo = 'Only the first letter will be used'
oHowTo.innerHTML = howTo
strTested= 'Results Set'
pTest.innerHTML = strTested
})();

const listGuess = []
let word = 'hangman'

submit.onclick = function () {
  let guess = document.getElementById('guess').value
  listGuess.push(guess.substring(0, 1));
  pTest.innerHTML = listGuess
  document.getElementById('guess').value = '';
  correctGuess = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === guess.substring(0, 1)) {
      correctGuess++;
    }
  }

  pResult.innerHTML = (
    "Your current guess is in the word "
    + correctGuess
    + " times."
  )
}

reset.onclick = function () {
  for (i = 0; i = listGuess.length; i++) {
    listGuess.pop();
    pTest.innerHTML = listGuess
    pResult.innerHTML = ''
    pTest.innerHTML = strTested
  }
}

