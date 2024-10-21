// named function:
function add(input1, input2) {
  return input1 + input2;
}

const rohan = add(5, 7);
// console.log(rohan);
add(3, 6);

const cube = (input1) => {
  return input1 * input1 * input1;
};

const pawan = cube(5);
// console.log(pawan);

// [ IIFE or IFFY ] Function
// (function () {
//   console.log("----------hello world--------");
// })();

// Array and Objects:

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = ["abc", 3, {}, []];

a.push(99);
// a.pop();
a.pop();

// a.splice(3, 0, 2, 3);

// console.log(a.at(-3));
// const c = [...a, ...b];
// console.log(c);

for (let i = 0; i < b.length; i++) {
  a.push(b[i]);
}

// console.log(a);

// ForEach : syntax
// array.forEach(function)

let sum = 0;
function addNumber(n) {
  sum += n;
}

a.forEach((n, i, arr) => {
  arr[i] = arr[i] + 1;
});

// console.log(sum);

// Methods: Map and Filter

const newArr = a.map((val, index) => {
  return val + val;
});

// console.log(a, newArr);

const newArr2 = a.filter((val, i) => {
  if (val % 2 == 0) return true;
  else return false;
});

// console.log(newArr2);

// Objects:

const obj = {
  // key: value
  name: "rohan",
  age: 25,
  score: 99,
};
// console.log(obj);
obj.marks = 88;
delete obj.score;
obj.marks = 90;
// console.log(obj);

const data = [
  {
    name: "rahul",
    score: 45,
  },
  {
    score: 55,
  },
  {
    name: "ram",
    score: 50,
  },
  {
    name: "sham",
    score: 32,
  },
  {
    name: "pawan",
    score: 99,
  },
];

for (let i = 0; i < data.length; i++) {
  const element = data[i];
  element.age = 5 + i;
}

const newArr1 = data.filter((val) => {
  if (val.age == 50) {
    val.pass = "Pass";
    return true;
  } else {
    return false;
  }
});
// console.log(newArr1);

const newArr3 = data.map((val) => {
  if (val.score >= 50) return { ...val, result: "Pass" };
  return val;
});

// console.log(newArr3);
