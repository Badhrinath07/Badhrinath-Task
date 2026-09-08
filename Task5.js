// Task - 5

//1. What is the difference between var, let and const?
// var:
// Can be redeclared and reassigned. it has function scope.

// let:
// let can be reassigned but cannot be redeclared in the same scope.
// it has block scope.

//const:
//const cannot be reassigned or redeclared. 
// it has block scope and must be intialized when declared.


//2. Can you re-declared a variable with var? what about let and const?
// Yes, a variable declared wirh var can be redeclared
// in the same scope without an error.

// A variable declared with let cannot be redeclared
// in the same scope.

// A variable declared with const cannot be redeclared
// in the same scope.

//3. What is the output of this code?
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
//z = 30;
//Output
// ReferenceError: Assignment to constant variable.

//4. What is the difference between declaring and initializing a variable?
// Declaring a variable means creating a variable
// without giving it a value.

// Initializing a variable means giving a value
// to a variable when it is declared.

// Difference:
// Declaration - creates the variable.
// Initialization - gives the variable its first value.

//5. What will be the output?
let a;
console.log(a);
//Output:
// undefined

//6. What is hoisting?
// Hoisting is the JavaScript behavior where variable
// and function declarations are processed
// before the code is executed.

//Example:
console.log(a1);
var a1 = 10;
//Output:
// undefined

//7. What is the difference between null and undefined?
// undefined means a variable has been declared,
// but no value has been given.

// null means we intentionally give the variable no value.

//8. What will be the output?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

//Output:
// object
// undefined
// object
// object

//9. What is the difference between == and ===?
// == checks only the value.
// It can convert the data type before comparing.

// === checks both value and data type.
// It does not convert the data type.

//10. What is the difference between ++i and i++?
// ++i - First increases the value, then uses it.

// i++ - First uses the value, then increases it.

//11. What will be the output?
let c = 10;
let d = "5";
console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);

//Output:
// 105
// 5
// 50
// 2

//12. What are logical operators? Explain with examples.
// Logical operators are used to combine or reverse conditions.

// 1. && (AND)
// Both conditions must be true.
console.log(10 > 5 && 20 > 10);  // true
console.log(10 > 5 && 20 < 10);  // false

// 2. || (OR)
// At least one condition must be true.
console.log(10 > 5 || 20 < 10);  // true
console.log(10 < 5 || 20 < 10);  // false

// 3. ! (NOT)
// It reverse the result of a condition.
console.log(!(10 > 5));  // false
console.log(!(10 < 5));  // true

//13. What will be the output
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

//Output
// true
// true
// false

//14. What is the ternary operator?
// The ternary operator is a short way to write
// a simple if...else condition.

// Example:
let age = 20;
let result = age >= 18 ? "Eligible" :
"Not Eligible";
console.log(result);

//Output
// Eligible

//15. What is the difference between implicit and explicit type casting?
// Implicit type casting:
// JavaScript automatically converts one data type into another data type.

// Explicit type casting:
// We manually convert one data type into another
// using functions like Number(), String(), Boolean().

//16. What will be the output
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

//Output
// 123
// Nan 
// 1
// 0
// false
// true

//17. What is Nan? Give an example.
// NaN means "Not a Number".
// It represents a value that is not a valid number.

//Example:
console.log(Number("hello"));
//Output
// NaN

//18. What is the difference between if-else and switch?
// if-else:
// Used to check different conditions.
// It is useful for complex conditions and ranges.

// switch:
// Used to compare one value with multiple fixed values.
//It is useful when there are many exact choices.

//19. What will be the output
let age1 = 20
if (age1 >= 18) {
    console.log("Adult");
}   else {
    console.log("Minor");
    }
    //Output
    // Adult


//20. What is nested if? Given an example.
// Nested if means writing one if statement
// inside another if statement.

//Example:
let age2 = 20
if (age >= 18) {
    if (age <= 60) {
        console.log("Eligible")
    }
}

//21. Write a program to check if a number is even or odd using ternary operator?
let number = 10;
let result1 = number % 2 === 0 ? "Even" : "odd";

console.log(result1);
//Output
// Even

//22. What is the difference between while and do-while?
// while:
// The condition is checked first.
// If the condition is false, the loop will not execute.

// do-while
// The code executes first, then the condition is checked.
// So, it executes at least once.

//23. What will be the output
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//Output
// 1
// 2
// 3
// 4
// 5

//24. What is the difference between for...of and for...in?
// for...of:
// Used to get the values from an iterable,
// such as an array or string.

// for...in:
// Used to get the keys or property names of an object.

//25. Write a program to find sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//26. What is the difference between slice and splice?
// slice():
// Used to get a portion of an array.
// It does NOT change the original array.

// splice():
// Used to add, remove, or replace elements in an array.
// It changes the original array.

//27. What will be the output?
let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

//Output:
// [1, 2, 3]

//28. What is the difference between function declaration and function expression?
// Function Declaration:
// A function is declared using the function keyword with a function name.

// Function Expression:
// A function is created and assigned to a variable.

//29. What is an arrow function? Give an example.
// An arrow function is a shorter way to write a function.

// Example:
let add = (a, b) => {
    return a + b;
}
console.log(add(10, 20));

//30. What will be the output?
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

//Output:
// Hello

