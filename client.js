// http://stackoverflow.com/questions/22704963/sum-of-two-numbers-with-prompt-beginner-javascript

// function test () {
//   var value1 = 90;
//   var value2 = 90;
// if (value1 < value2) {
//   console.log(value1 + " is less than " + value2);
// } else {
//   console.log(value1 + " greater than or equal to " + value2);
// }
// return;
// }
// console.log(test());



// function greatLess () {
//   var baseLine = prompt("Please enter a number:");
//   var a = +prompt("Please enter a number:"); //
//   var b = Number(prompt("Please enter a second number:")); //
//   var c = parseInt(prompt("Please enter a third number:")); // only handles leading characters and wont add decimals
//   var d = parseFloat(prompt("Please enter a fourth number:")); // will handle 4.5 and 4.5xyz
//   var e = (prompt("Please enter a fifth number:")) * 1; // the * operator forces everything to act like numbers.
//   if (a > b) {
//     alert("The first number was bigger!");
//   } else if (a < b) {
//     alert("The second number was bigger!");
//   } else {
//     alert("The numbers are the same!");
//   }
//   console.log(baseLine);
//   console.log(typeof baseLine);
//   console.log(a);
//   console.log(typeof a);
//   console.log(b);
//   console.log(typeof b);
//   console.log(c);
//   console.log(typeof c);
//   console.log(d);
//   console.log(typeof d);
//   console.log(e);
//   console.log(typeof e);
//     return;
// }
// console.log(typeof greatLess());
// console.log(typeof greatLess);



// var baseLine = prompt("Please enter a number:"); // added later
// var a = +prompt("Please enter a number:"); //
// var b = Number(prompt("Please enter a second number:")); //
// var c = parseInt(prompt("Please enter a third number:")); // only handles leading characters and wont add decimals
// var d = parseFloat(prompt("Please enter a fourth number:")); // will handle 4.5 and 4.5xyz
// var e = (prompt("Please enter a fifth number:")) * 1; // the * operator forces everything to act like numbers.
// NOTE: RESULTS:
// All 3 statements work with approiate numbers entered
// "23" results in NaN & typeof: number on all 5
// 34.5798 results in typeof: number on all 5 and:
//    a = 34.5798
//    b = 34.5798
//    c = 34
//    d = 34.5798
//    e = 34.5798
// 9987taco results in typeof: number on all 5 and:
//    a = NaN
//    b = NaN
//    c = 9987
//    d = 9987
//    e = NaN
// 3456.89 taco 9876.54 results in typeof: number on all 5 and:
//    a = NaN
//    b = NaN
//    c = 3456
//    d = 3456.89
//    e = NaN



function greatLess () {
  var a = parseFloat(prompt("Please enter a number:"));
  var b = parseFloat(prompt("Please enter a second number:"));   // NOTE: Letters first, than numbers results in NaN and message 'Numbers are the same'
  if (a > b) {
    alert("The first number was bigger!");
    console.log("The first number was bigger!");
  } else if (a < b) {
    alert("The second number was bigger!");
    console.log("The second number was bigger!");
  } else {
    alert("The numbers are the same!");
    console.log("The numbers are the same!");
  }
  console.log(a);
  console.log(typeof a);
  console.log(b);
  console.log(typeof b);
    return;
}
console.log(typeof greatLess()); // QUESTION: Why undefined??
// console.log(typeof greatLess);
