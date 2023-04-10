//introMsg
(function () {
  document.write("<br /><br />");
  let title = "## Change Machine\n\n"
  let msg =
    title
    + "Imagine we have a very versatile change machine. Create a variable called amount stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.\n"
    + "After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones)."
  console.log(msg);
  instructions.innerHTML =
    instructions.innerHTML
    + msg.replace(/\n/gi, "<br />");
})();
//base values
(function () {
  howTo = 'Only the first letter will be used'
  oHowTo.innerHTML = howTo
  strTested = 'Bills to be used: '
  pTest.innerHTML = strTested
})();

//create array, add prefix, remove final 2 values
(function () {
  const bills = [20, 10, 5, 1];
  let money = ''
  bills.forEach(addDollarSign)
  function addDollarSign(value, index, array) {
    money += '$' + value + ', ';
  }
  pTest.innerHTML =
    pTest.innerHTML
    + money.substring(0, money.length - 2);
})();
//global variables
let moneyTarget = 0;

//button press
submit.onclick = function () {

  let input = document.getElementById('input');
  //use Variable to store value
  moneyTarget = input.value;
  input.value = '';
  if (isNaN(moneyTarget) === true | moneyTarget === '') {
    pResult.innerHTML = 'NaN: Not a Number'
  } else if (moneyTarget.substring(0, 1) === ' ') {
    pResult.innerHTML = "Don't start with leading spaces"
  } else {
    pResult.innerHTML = mathHardCode(moneyTarget);
  }

  //Alternative to pass values
  // if (isNaN(input.value) === true | input.value.substring(0, 1) === ' ' | input.value === '') {
  //   pResult.innerHTML = 'NaN: Not a Number'
  // } else {
  //   pResult.innerHTML = mathHardCode(input.value);
  // }
  // input.value = '';
};

//hard coded math, MVP
function mathHardCode(moneyTarget) {
  console.log('moneyTarget: ' + moneyTarget);
  let moneyRemaining = moneyTarget;

  console.log('moneyRemaining: ' + moneyRemaining)
  let m20 = Math.floor(moneyRemaining / 20)
  moneyRemaining = moneyRemaining - (m20 * 20)
  console.log('moneyRemaining: ' + moneyRemaining)
  let m10 = Math.floor(moneyRemaining / 10)
  moneyRemaining = moneyRemaining - (m10 * 10)
  console.log('moneyRemaining: ' + moneyRemaining)
  let m5 = Math.floor(moneyRemaining / 5)
  moneyRemaining = moneyRemaining - (m5 * 5)
  console.log('moneyRemaining: ' + moneyRemaining)
  let m1 = Math.floor(moneyRemaining / 1)
  moneyRemaining = moneyRemaining - (m1 * 1)
  console.log('moneyRemaining: ' + moneyRemaining)

  return (
    "20's: " + m20 + '<br />'
    + "10's: " + m10 + '<br />'
    + "5's: " + m5 + '<br />'
    + "1's: " + m1 + '<br />'
  )
}

//reset to 0
function reset() {
  moneyTarget = 0;
  pResult.innerHTML = '';
  input.value = '';
};