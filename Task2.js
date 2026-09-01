// JavaScript Task 2

//Create three variables:
//1. Var, let, const

var studentname = "Badhrinath";
let studentage = 26;
const collegename = "SRTIST";
//Requirements:
//Print all three values.
console.log(studentname);
console.log(studentage);
console.log(collegename);
//change the var value and let value.
studentname = "Bhanu";
studentage = 25;
console.log(studentname);
console.log(studentage);
//Try changing the const value.
//collegename = "SRV College";
//Try redeclaring the var variable.
//var studentname = "sai";
//Try redeclaring the let variable
//let studentage = "30";

//2. User information
//Get information from user 
let Name = prompt("Enter your name:");
let Age = prompt("Enter your age:");
let City = prompt("Enter your city:");
//Print the result in the console.
console.log(Name);
console.log(Age);
console.log(City);

//3. Welcome message
let display = prompt("Enter your name:");
alert("Welcome Badhrinath!");

//4. Age calculator
let birthyear = prompt("Enter your birth year:");
let age = 2026 - birthyear;
console.log("birthyear:", birthyear, "Age:", age);

//5. Identify data types
let text = "Hello";
let number = 100;
let decimal = 25.5;
let yes = true;
let no = false;
let notDefined = undefined;
let empty = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof yes);
console.log(typeof no);
console.log(typeof notDefined);
console.log(typeof empty);

//6. Student Data
let student = {
    name: "Badhrinath",
    age: 26,
    city: "Hyderabad",
    qualification: "B.Tech",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

//7. Fruit Array
let fruits = [
    "Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"
];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

//8. Basic Calculator
let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//9. Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let total = Shirt + Pant + Shoes;

console.log("Total =", total);

//10. Simple Marks Calculation
let Tamil = 80;
let English = 75;
let Maths = 90;
let Total = Tamil + English + Maths;
let Average = Total / 3;

console.log("Total marks =", Total);
console.log("Average marks =", Average);

//11. Post Increment
let A = 10;
let B = A++;

//Expected Output
//11
//10

console.log(A);
console.log(B);

//12. Pre Increment
let C = 10;
let D = ++C;

//Expected Output
//11
//11

console.log(C);
console.log(D);

//13. Post Decrement
let c = 20;
let d = c--;

//Expected Output
//19
//20

console.log(c);
console.log(d);

//14. Pre Decrement
let E = 20;
let F = --E;

//Expected Output
//19
//19

console.log(E);
console.log(F);

//15. Find the final values
let G = 5;
let H = G++;
let I = ++G;
let J = H--;

//Expected Output
//7
//4
//7
//5

console.log(G);
console.log(H);
console.log(I);
console.log(J);

//16. Assignment Operators
let num1 = 10;
num1 += 5;
console.log(num1);
let num2 = 10;
num2 -= 5;
console.log(num2);
let num3 = 10;
num3 *= 5;
console.log(num3);
let num4 = 10;
num4 /= 5;
console.log(num4);
let num5 = 10;
num5 %= 5;
console.log(num5);
let num6 = 10;
num6 **= 5;
console.log(num6);

//17. Mini Student Profile
//variables
let studentName1 = "Badhrinath";
let studentAge1 = 26;
let studentCity1 = "Hyderabad";
let studentCollege1 = "SRTIST";

//Arry - 5 favorite subjects
let subjects1 = ["JavaScript", "HTML", "CSS", "Java", "SQL"];

//Object
let student1 = {
    name: studentName1,
    age: studentAge1,
    city: studentCity1,
    subjects: subjects1,
    isStudent: true
};

//Print required details
console.log(student1.name);
console.log(student1.age);
console.log(student1.city);
console.log(subjects1[0]);
console.log(subjects1[subjects1.length - 1]);
console.log(subjects1.length);
console.log(student1);

//Final Challenge User + Calculator
let userNum1 = prompt("Enter first Number:");
let userNum2 = prompt("Enter second number");

console.log("Addition =", userNum1 + userNum2);
console.log("Subtraction =", userNum1 - userNum2);
console.log("Multiplication =", userNum1 * userNum2);
console.log("Divison", userNum1 / userNum2);
console.log("Modulus =", userNum1 % userNum2);
console.log("Power =", userNum1 ** userNum2);

