// Task - 4

//1. For Loop
for (let i = 1; i<= 10; i++) {
    console.log(i);
}
//2. Reverse Number
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//3. Even Number
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//4. Odd Number 
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

//5. Multiplication Table
let number = prompt("Enter a number:");

for (let i = 1; i <=10; i++) {
    console.log(number + " x " + i + " = " + (number * i));

}

//6. Countdown
let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

//7. Sum Of Numbers
let num = 1;
let sum = 0;
while (num <= 10) {
    sum += num;
    num++;
}
console.log(sum);

//8. Print Numbers
let num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 5);

//9. Do While Understanding
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5);

//10. String Characters
let name = "Javascript";
for (let char of name) {
    console.log(char);
}

//11. Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

//12. Student Names
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
for (let student of students) {
    console.log("student: " + student);
}

//13. Employee Object
let employee = {
    name: "Badhrinath",
    age: 26,
    role: "Full Stack Developer",
    city: "Hyderabad"
};
for (let key in employee) {
    console.log(key, employee[key]);
}

//14. Product Object
let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};
for (let key in product) {
    console.log(key, product[key]);
}

//15. Simple Function
function welcome() {
    console.log("Welcome to JavaScript");

}
welcome();
welcome();
welcome();

//16. Function With Parameter
function greet(name) {
    console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

//17. Multiple Parameters
function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}
student("Naveen", 22, "CSE");
student("Arun", 23, "ECE");
student("Priya", 21, "IT");

//18. Addition Function
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

//19. Salary
function salary(amount) {
    return amount;
}
let salaryResult = salary(50000);
console.log(salaryResult);

//20. Bonus Calculator
function bonus (salary, bonusAmount) {
    return salary + bonusAmount;
}
let totalSalary = bonus(50000, 5000);
console.log(totalSalary);

//21. Default Parameter
function employee1(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role", role);
}
employee1("Arun");
employee1("Priya", "Designer");

//22. Named Function
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(5));
console.log(square(7));
console.log(square(10));
console.log(square(12));

//23. Anonymous Function
let calculate = function(a, b) {
    return a + b;
};
console.log(calculate(10, 20));

//24. Arrow Function
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(10, 5));

//25. Scope
function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log(a);
        console.log(b);
        console.log(c); 
    }
    console.log(a);
    //console.log(b);
    //console.log(c);
}
test();

//26. Hoisting
console.log(a1);
var a1 = 10;

//27. Predict
//console.log(b);
//let b = 20;

//28. Predict
//console.log(c);
//const c = 30;

//29. Self Invoking function
(function () {
    console.log("Welcome to JavaScript");
})();

(function (product, discount) {
    console.log(product + " discount is " + discount + "%");
})("Laptop", 20);

//30. Callback/ Higher-Order Function
function welcome() {
    console.log("welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);

//31. Generator Function 
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let cashbackGenerator = cashback();
for (let value of cashbackGenerator) {
    console.log(value);
}

//32. Employee Management Console
let employees = [
    { 
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
},
{
    name: "Priya",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000
}
];

// 1. for.....of - print every employee
for (let employee of employees) {
    console.log(employee);
}

// 2. for...in - Print keys and values
for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }
}

// 3 & 4 Function with parameters
function dispalyEmployee(employee) {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}

for (let employee of employees) {
    dispalyEmployee(employee);
}

//5. Return - Salary
function getSalary(employee) {
    return employee.salary;
}
for (let employee of employees) {
    console.log("Salary:", getSalary(employee));
}

//6. Condition
for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " is eligible");
    }
}

//7. Arrow function
let calculateBonus = (salary) => {
    return salary * 10 / 100;
};

console.log("Bonus:", calculateBonus(40000));

//8. Generate - Employee benefits 
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}
let employeeBenefits = benefits();
for (let benefit of employeeBenefits) {
    console.log(benefit);
}


