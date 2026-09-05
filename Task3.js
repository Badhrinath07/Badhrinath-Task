//JavaScript Task 3

//1. Create variable using var, let, and const.
var Name = "Badhrinath";
let Age = 26;
const City = "Hyderabad";
var College = "SRTIST";
//Print all values.
console.log(Name);
console.log(Age);
console.log(City);
console.log(College);

//Change var value
Name = "Pally";
console.log(Name);
//Change let
Age = 25;
console.log(Age);
//Try changing const
//City = "Bangalore";

//Try Redeclaring var
var Name = "Bhanu";
console.log(Name);
//Redecalring let
Age = 27;
console.log(Age);
//Redeclaring const
//const City = "Chennai";

//2. Printing Statements
console.log("Hello JavaScript");
alert("Welcome to JavaScript");
confirm("Are you ready to learn JavaScript?");
prompt("Enter your name:");
document.writeln("JavaScript is easy to learn");

//3. User Details
let Name1 = prompt("Enter your name:");
let Age1 = prompt("Enter your age:");
let City1 = prompt("Enter your city:");
let Qualification = prompt("Enter your qualification:");

console.log(Name1);
console.log(Age1);
console.log(City1);
console.log(Qualification);

//4. Find data types.
let text = "JavaScript";
let number = 100;
let decimal = 99.5;
let yes = true;
let no = false;
let notDefined = undefined;
let empty = null;

//print values
console.log(text);
console.log(number);
console.log(decimal);
console.log(yes);
console.log(no);
console.log(notDefined);
console.log(empty);

//Find Data Types
console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof yes);
console.log(typeof no);
console.log(typeof notDefined);
console.log(typeof empty);

//5. Student Array
let students = ["Arun", "priya", "shiva", "Divya", "Rahul"];
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length-1]);
console.log(students.length);

//6. Employe object
let employee = {
    name: "Badhrinath",
    age: 26,
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["M.Tech", "B.Tech"]
};

//Print
console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length - 1]);
console.log(employee.isWorking);

//7. Arithmetic Calculator
let a = 20;
let b = 5;
console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Divison =", a / b);
console.log("Modulus =", a % b);
console.log("Exponentiation =", a ** b);

//8. Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;
let totalprice = Shirt + Pant + Shoes + Bag;

console.log("Total Price =", totalprice);

//9. Increment & Decrement
//A
let A1 = 10;
let B1 = A1++;
console.log(A1); //11
console.log(B1); //10
//B
let A2 = 10;
let B2 = ++A2;
console.log(A2); //11
console.log(B2); //11
//C
let A3 = 10;
let B3 = A3--;
console.log(A3); //9
console.log(B3); //10
//D
let A4 = 10;
let B4 = --A4;
console.log(A4); //9
console.log(B4); //9

//10. Assignment Operator
let num1 = 10;
num1 += 5;
console.log(num1);

let num2 = 10;
num2 -= 3;
console.log(num2);

let num3 = 10;
num3 *= 2;
console.log(num3);

let num4 = 10;
num4 /= 4;
console.log(num4);

let num5 = 10;
num5 %= 3;
console.log(num5);

let num6 = 10;
num6 **= 2;
console.log(num6);

//11. Comparison Operators
console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 <= 9); //false

console.log(5 == "5"); //true
console.log(5 === "5"); //false

console.log(10 != "10"); //false
console.log(10 !== "10"); //true

//12. AND
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//13. OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//14. NOT
console.log(!true); //false
console.log(!false); //true
console.log(! (5 > 10)); //true
console.log(! (10 > 5)); //false

//15. Combination 
console.log(5 == "5" && !(5 === 5) || 6 > 7); //false
console.log(10 > 5 && 8 < 12 || 4 === "4"); //true
console.log(7 === 7 && 10 != "10" || 5 >= 5); //true
console.log(15 < 10 || 20 > 15 && 5 == "5"); //true

//16. Voting 
let age2 = 20;
let result = age2 >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result);

//17. Password
let password = true;
let loginResult = password ? "Login successful" : "Wrong password";
console.log(loginResult);

//18. User Introduction
let name2 = "Badhrnath";
let age3 = 26;
let city2 = "Hyderabad";
// 1. Using +
console.log("My name is " + name2 + ". I am " + age3 + " years old. I live in " + city2 + ".");
// 2. Using Template Literal
console.log(`My name is ${name2}. I am ${age3} years old. I live in ${city2}.`);

//19. String Conversion
let value1 = String(100);
let value2 = String(true);
let value3 = String(undefined);
let value4 = String(null);
let value5 = String([1, 2]);

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);

//20. Number Conversion
console.log(Number()); //0
console.log(Number("")); //0
console.log(Number("123")); //123
console.log(Number("a1")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

//21. Boolean Conversion
console.log(Boolean()); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(123)); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true

//22. Voting Eligibility
let age4 = prompt("Enter your age:");
if (age4 >= 18) {
    console.log("You can vote");
    }
    else {
        console.log("you can't vote");
    }

//23. Positive or Negative
let number2 = prompt("Enter a number:");
if (number2 > 0) {
    console.log("Positive");
} else if (number2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//24. Grade System
let marks2 = prompt("Enter your marks:");

if (marks2 >=90 && marks2 <= 100) {
    console.log("A Grade");
} else if (marks2 >= 80 && marks2 <= 89) {
    console.log("B Grade");
} else if (marks2 >=70 && marks2 <= 79) {
    console.log("C Grade");
} else if (marks2 >= 60 && marks2 <= 69) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

//25. Job Eligibility
let age5 = prompt("Enter your age:");
let height = prompt("Enter your height:");
let weight = prompt("Enter your weight:");

if (age5 >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
     
    console.log("Congratulations! you are selected");
        } else {
            console.log("You are not selected beacause your weight is below 60");
        }
         } else {
            console.log("You are not selected because your height is below 160");
        }
    } else {
        console.log("you are not selected because your age is below 18");
    }

//26. Traffic Light
let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

//27. Day
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 1:
        console.log("Sunday");
        break;
}

//28. Student Results system
//step 1 User details
let studentname = prompt("Enter your name:");
let studentage = prompt("Enter your age:");
let studentcity = prompt("Enter your city:");

//step2 Get marks
let tamil = prompt("Enter Tamil marks:");
let english = prompt("Enter English marks:");
let maths = prompt("Enter Maths marks:");

//Step3 Calculate
let total = Number(tamil) + Number(english) + Number(maths);
let average = total / 3;

//step4 Check result
let grade;
if (average >= 90) {
    grade = "A";

} else if (average >= 80) {
    grade = "B";

} else if (average >= 70) {
    grade = "C";

} else if (average >= 60) {
    grade = "D";

} else {
    grade = "Fail";
}

//step5 Check Voting 
let voting;
if (studentage >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

//step6 Display
console.log(`Name: ${studentname}
     Age: ${studentage}
     City: ${studentcity}
     Total: ${total}
     Average: ${average.toFixed(2)}
     Grade: ${grade} Voting: ${voting}`);















