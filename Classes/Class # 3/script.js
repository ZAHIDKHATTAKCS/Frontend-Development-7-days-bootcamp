console.log("hello world"); // to print something or show output on console

console.error("here is an error"); // to throw an error in console

console.warn("here is warning"); // to throw warning on console

// var variable
var number = 23;
console.log(number);

// let variable
let number1 = 34;
console.log(number1);

// const variable
const number2 = 100;
console.log(number2);

// var can be redefine once define
var a = "zahid";
a = "khattak";
console.log(a);

// let can be also redefine once define in program like
let b = "pakistan";
b = "india";
console.log(b);

// while const variable can't be redefine once it declare in program like
// const t = "tahreek insaf";
// t = "tahreek taliban";
// console.log(t);

// The difference in between let and var is var variable is global scope and let variable is block scope and other difference is let variable is used in modren javascript

// string variable because of we assign a string value
let city = "Peshawar";
console.log(city);

// int variable as per we assign the integer value
let num = 34;
console.log(num);

// float variable as per we assign the float value
let fractiion = 34.34;
console.log(fractiion);

// boolean variable as per we assign either true or false
let bol = true;
console.log(bol);

// array
let colors = ["green", "blue", "yellow"];
console.log(colors);

// object , it is the key value pair
let profile = {
  name: "zahid",
  age: 23,
  marks: 2.8,
  isdrive: false,
  intrestedin: ["Programming", "food", "exploring"],
};
console.log(profile);

console.log(profile.intrestedin);

// Operators +,-,/,% etc

// + operator
let n1 = 23;
let n2 = 2;
console.log(n1 + n2);

// - operator
console.log(n1 - n2);

// * operator
console.log(n1 * n2);

// divide operator
console.log(n1 / n2);

// % operator
console.log(n1 % n2);

// conditional statements
let myage = 18;

if (myage > 18) {
  console.log("you can drive");
} else if (myage == 18) {
  console.log("you can or cannot drive");
} else {
  console.log("you can't drive");
}

// declare function
function helloworld() {
  console.log("function hello world print");
}
helloworld();

// addition function
function sum(num1, num2) {
  console.log("The sum of two numbers is :", num1 + num2);
}
sum(2, 3);

// reuse of functions
sum(34, 34);

// Loops , the repeatition of code
for (let i = 1; i <= 5; i++) {
  console.log("Hello, Pakistan");
}

// while loop
let z = 1;

while (z <= 10) {
  console.log("Hello from while loop");
  z++;
}

// string
let country = "Pakistan";
console.log(country.toUpperCase());

console.log(country.toLowerCase());

// string length
console.log(country.length);

// includes to find as this character is available in this string
console.log(country.includes("P"));

// string replaece
let his = "i love my classfellows";
console.log(his.replace("classfellows", "friends"));

// arrays

let data = ["zahid", 23, true, "khattak"];
console.log(data);

// print specific one by indexing
console.log("accessing specific value by indexing", data[1]);
console.log("accessing specific value from array", data[0]);

// array pop which remove the last element from the array
data.pop();
console.log("After pop", data);

// array push which is used to add element at the end in array
data.push("khattak sahab");
console.log("After push a value to the end", data);

// changing values in array
console.log(data);

data[2] = false;
console.log("After changing specific value", data);

// to use try and catch you have to make a mistake like here i am going to create an error then i will use try and catch to continue the next code like

// try and catch : put the code that you want to run in try and put the code that is not to be run can be put in catch , by using try and catch while if there is any error in your code you can continue from the next line to run on browser
try {
  console.log(q);
} catch (err) {
  console.log(err);
}

// after this try and catch the next code is running like here we can see

// array length
console.log(data.length);

