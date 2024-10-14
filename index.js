// console.log("----Welcome in JS-----");
// console.table(["a", "b", "c"]); // print data in table format
// console.info("this is info of line ---------INFO");  // give the info of line number e.g who is calling it etc...
// console.warn("this is warning -------Warn");  // text display in yellow color : represent --- warning
// console.error("This is Error------------ERROR");    //  text display in Red color : represent --- Error

// Issue will raise or not?
// console.log("-----------A is equal to : ---:", a);

// Issue will raise or not?
// console.log("-----------B is equal to : ---:", b);

// Issue will raise or not?
// console.log("-----------C is equal to : ---:", c);

// Variables:
// const a = 3;
// let b = 5;
// var c = 7;
// console.log(c);  // printing value of c --->> c = 7

// Problem : [ Var ] can be initialize with other data format
// var c = {
//   name: "dev",
// };

// console.log(c);  // printing again the value of C : what should be output now and is it okay? : to change the formate of same varable?

// const arr = [1, 2, 3, 4, 5];

/*
----------Loops----------
 for loop 
 forEach
 forIn
 forOf

 ----------Function----------
 Noraml Function
 Arrow Function

 ----------Methods----------
 map
 filter

*/

// const arr = [1, 2, 3, 4, 5];

/*
 1. for loop
 2. forEach
 3. forIn
 4. forOf
*/

// const arr = [1, 2, 3, 4, 5];

/*

1. for loop
2. forEach

*/

// Traversel in an array using for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); // 1 2 3 4 5
// }

// For Each Loop : Syntax
// // MyArray.forEach(callback)

// Traversel using ForEach loop
// arr.forEach((val) => {
//   console.log(val);
// });

// // ForIn and For Of Loop
// for (let val of arr) {
//   console.log(val);
// }

// const obj = {
//   name: "a",
//   class: "b",
//   course: "c",
// };

// console.log("--------For In ");
// for (const item in obj) {
//   console.log(item);
// }

// Functions:

function normalFun(val1, val2, val3) {
  return val1 * val2 * val3;
}

// arrow fun:
const arrFun = (...arr) => {
  return arr;
};

const ans = normalFun(3, 4, 5);
const ans2 = arrFun([21, 2, 4, 4, 6]);
const ans3 = arrFun(3, 4, 5, 6, 67, 3);

const array = [1, 2, 3, 4, 5, 6];

// syntax
// MyArray.map(callback)
const result = array.map((val, i) => {
  return val * i;
  console.log("--------Dead Code------");
});

// Filter Method:
const res2 = array.filter((val, i) => {
  if (val % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(res2);

// Find Greater Element in an Array
