(function(){
  let msg = "Toyed around with a few different options, didn't see a great \"use it this way\" requirement, so i'll leave these scribblings in place for the time."
  console.log(msg);
})();

//This functions on load, but i wasn't able to alter to call during execution.
(function () {

  let ans = "";
  if (Math.random() < .5) {
    ans = "Heads";
  } else {
    ans = "Tails";
  };
  //outputs string to the body of the document
  document.write("hello from coin-flip.js: " + ans);
  //outputs the string to the browsers console
  console.log("hello from coin-flip.js: " + ans);
  document.getElementById("result").innerHTML + "\nwinner: " + ans;

})();

//This works, but not the format originally provided.
function flip() {
  if (Math.random() < .5) {
    // document.write("Heads");
    console.log("Coin flip: Heads");
    return "Heads";
  } else {
    // document.write("Tails");
    console.log("Coin flip: Tails");
    return "Tails";
  };
};

//This calls the above function, and utilizes the return ability
function toss() {
  let ans = flip()

  msg = document.getElementById("result").innerHTML 
  + "winner: " + ans + "<br />"

  document.getElementById("result").innerHTML = msg

};

// worked with Jake
// function toss() {
//   let flip = Math.floor(Math.random() * 10);
//   let ans = "";
//   if (flip % 2 == 0) {
//     ans = "Heads";
//   }
//   else {
//     ans = "Tails";

//   };
//   document.getElementById("result").innerHTML = 
//   document.getElementById("result").innerHTML + "\nwinner: " + ans;
// };