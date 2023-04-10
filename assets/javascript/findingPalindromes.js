//introMsg
(function () {
  document.write("<br /><br />");
  let title = "## Finding Palindromes\n\n"
  let msg =
    title
    + 'Create a variable called word that stores a word we want to test as a [palindrome](https://en.wikipedia.org/wiki/Palindrome). Write some code that prints out "true" if word is a palindrome, or "false" if its not.'
  console.log(msg);
  instructions.innerHTML =
    instructions.innerHTML
    + msg.replace(/\n/gi, "<br />");
})();
//base values
(function () {
  howTo = 'Enter the word to be tested'
  oHowTo.innerHTML = howTo
  strTested = 'Word tested as Palindrome: '
  pTest.innerHTML = strTested
})();

//create array, add prefix, remove final 2 values
(function () {

})();
//global variables

//button press
submit.onclick = function () {

  let input = document.getElementById('input').value;
  reset()
  input;
  pTest.innerHTML =
    pTest.innerHTML
    + input
  let result = strReverse(input);
  if (input === '') { return }
  if (input === result) {
    pResult.innerHTML =
      pResult.innerHTML
      + '' + result + ''
      + " is indeed a Palindrome of "
      + '' + input + ''
  } else {
    pResult.innerHTML =
      pResult.innerHTML
      + '' + result + ''
      + " is <em>Not</em> a Palindrome of "
      + '' + input + ''
  }

};
//simple, literal reverse
function strReverse(word) {
  let strReverse = '';
  for (i = word.length - 1; i >= 0; i--) {
    strReverse += word[i];
  }
  return strReverse
}
//reset to 0
function reset() {
  document.getElementById('input').value = ''
  pTest.innerHTML = strTested;
  pResult.innerHTML = '';
};