// Create a function that takes two parameters.
// The first parameter is an array, the second parameter will be a number.
// Your function should return a string
//  that combines all of the values
//    starting at the index
//      of the number
//        passed in
//          through the end
//            of the array.
// Example 1
// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));
// Hi There!

// Example 2
// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 2));
// Oh! Hi There!

// Create a README Markdown file and explain each of the files within the projec
//
//
//
var sumNum = 3;
var zombieArrayTwo = ['not Kris', 'not Catherine'];
var sumArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
// function funcOne(zombieArrayTwo[0], sumArray[1]){
//   return zombieArrayTwo + sumArray;
//   // return (console.log(zombieArrayTwo)); // sumArray[3] + sumArray[4];
// }
// console.log(funcOne());
// //console.log(zombieArrayTwo);

// Internet help:
// function sample (sumArray) {
//   if (typeof sumArray == "string" || typeof sumArray == "number" || typeof sumArray == "undefined") {
//     return 0;
//   } else {
//     return sumArray.length;
//   }
// }
//
// "pass an array as an argument into a javascript function parameter"
//
// Typeof shows sumArray to be an object, but function returns 0 == WTF!
// https://teamtreehouse.com/community/how-do-i-pass-an-array-into-a-function-parameter



// Parameter Rules:
// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

var sumArray = ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
var showArgs = function(a, b) {
    console.log(arguments);
};
showArgs('zero', 'one');
// results: ["Zero", "one"]

function sample2(enter) {
  console.log(sumArray[3] + sumArray[4]);
  return;
}
console.log(sample2());
// http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/








//
