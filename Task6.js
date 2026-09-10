// Task - 6

//1. Student Result Analyzer
let name = "Badhrinath";
let department = "ECE";

let subject1 = 85;
let subject2 = 78;
let subject3 = 92;
let subject4 = 88;
let subject5 = 80;

function resultAnalyzer(name, department, subject1, subject2,
    subject3, subject4, subject5) {
        let total = subject1 + subject2 + subject3 + subject4 + 
        subject5;
        let average = total / 5;

        let result;
        let grade;

        if (average >= 50) {
            result = "pass";
            if (average >= 90) {
                grade = "A";

            } else if (average >= 75) {
                grade = "B";
            } else if (average >= 60) {
                grade = "C";
            } else {
                grade = "D";
            }
        } else {
            result = "Fail";
            grade = "Fail";
        }

        console.log("Name:", name);
        console.log("Department:", department);
        console.log("Total Marks:", total);
        console.log("Average:", average);
        console.log("Result:", result);
        console.log("Grade:", grade);
    }

    resultAnalyzer(name, department, subject1, subject2, subject3,
        subject4, subject5);





//2. Employee Salary Calculator
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculatorsalary(employee) {
    let basicsalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicsalary * 15 / 100;

    } else if (employee.experience >= 2) {
        bonus = basicsalary * 10 / 100;
    }

    let finalsalary = basicsalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic salary:", basicsalary);
    console.log("Bonus:", bonus);
    console.log("Final salary:", finalsalary);
}

calculatorsalary(employee);




//3. Product Filter System
let products = [
    { name: "Laptop", price: 55000, category: "electronics"},
    {name: "Mouse", price: 800, category: "electronics"},
    {name: "Shirt", price: 1200, category: "fashion"},
    {name: "Shoes", price: 2500, category: "fashion"},
    {name: "Phone", price: 30000, category: "electronics"}
];

// 1. Product above 2,000
let above2000 = products.filter(product => product.price > 2000);
console.log("Above 2000:", above2000);

// 2. Only Electronics
let electronics = products.filter(product => product.category === "electronics");
console.log("Electronics:", electronics);

// 3. First Product below 1,000
let below1000 = products.find(product => product.price < 1000);
console.log("First product below 1000:", below1000);

// 4. Total Price of all products
let totalprice = products.reduce((total, product) => total +  product.price, 0);
console.log("Total Price:", totalprice);

// 5. Any product costs more than 50000
let moreThan50000 = products.some(product => product.price > 50000);
console.log("Any product above 50000:", moreThan50000);

// 6. Every product has price above 500
let allabove500 = products.every(product => product.price > 500);
console.log("Every product above 500:", allabove500);





//4. Employee Management
let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Bhanu",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Vijaya",
        role: "UI Designer",
        salary: 50000
    },
    {
        id: 104,
        name: "Badhrinath",
        role: "Full Stack Developer",
        salary: 55000
    },
    {
        id: 105,
        name: "Divya",
        role: "HR Executive",
        salary: 35000
    },
    {
        id: 106,
        name: "Geetha",
        role: "Software Developer",
        salary: 60000
    }
];

// 1. Display all employee names
let employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

// 2. Display employees earning above 40000
let above40000 = employees.filter(employee => employee.salary > 40000);
console.log("Employees above 40000:", above40000);

// 3. Find employee with ID 103
let employee103 = employees.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employee103);

// 4. Calculate total salary
let totalsalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalsalary);

// 5. Find highest paid employee
let highestpaid = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});
console.log("Highest Paid Employee:", highestpaid);

// 6. Sort employees from highest salary to lowest
let sortedEmployees = employees.sort((a, b) => b.salary - a.salary);
console.log("Salary High to Low:", sortedEmployees);

// 7. New array containing only employee names
let namesOnly = employees.map(employee => employee.name);
console.log("Names Only:", namesOnly);




//5. Shopping Cart
let cart = [
    { name: "Laptop", price: 50000, quantity: 1},
    {name: "Mouse", price: 1000, quantity: 2},
    {name: "keyboard", price: 2000, quantity: 1}
];

function calculateCart(cart) {
    let totalCartValue = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    let discount = 0;
    if (totalCartValue > 50000) {
        discount = totalCartValue * 10 / 100;
    }

    let finalAmount = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);




//6. Student Search System
let students = [
    { name: "Arun", age: 21, mark: 85},
    {name: "Priya", age: 22, mark: 92},
    {name: "Karthi", age: 20, mark: 67},
    {name: "Dinesh", age: 23, mark: 45}
];

// 1. Display all student names
let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

// 2. Dispaly students who scored above 80
let above80 = students.filter(student => student.mark > 80);
console.log("Students above 80:", above80);

// 3. Find student named "Priya"
let priya = students.find(student => student.name === "Priya");
console.log("Student Priya:", priya);

// 4. Calculate average mark
let averageMark = students.reduce((total, student) => total + student.mark, 0) / 
students.length;
console.log("Average Mark:", averageMark);

// 5. Check whether anyone failed
let anyoneFailed = students.some(student => student.mark < 50);
console.log("Anyone Failed:", anyoneFailed);

// 6. Check whether everyone scored above 40
let everyoneAbove40 = students.every(student => student.mark > 40);
console.log("Everyone above 40:", everyoneAbove40);

// 7. Sort students by marks (highest to lowest)
let sortedStudents = students.sort((a, b) => b.mark - a.mark);
console.log("Students by marks:", sortedStudents);




//7. Array Transformation Challenge.
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. Numbers * 2
let doubledNumbers = numbers.map(number => number * 2);
console.log("Numbers * 2:", doubledNumbers);

// 2. Only even numbers
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 3. Numbers greater than 15
let greaterThan15 = numbers.filter(number => number > 15);
console.log("Numbers greater than 15:", greaterThan15);

// 4. First number greater than 20
let firstGreaterThan20 = numbers.find( number => number > 20);
console.log("First number greater than 20:", firstGreaterThan20);

// 5. Total of all numbers
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);

// 6. Any number greater than 40 
let anyGreaterThan40 = numbers.some(number => number > 40);
console.log("Any number greater than 40:", anyGreaterThan40);

// 7. Every number is positive
let everyPositive = numbers.every(number => number > 0);
console.log("Every number is Positive:", everyPositive);

// 8. Sort highest to lowest
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Highest to lowest:", sortedNumbers);




//8. String Analyzer
let sentence = prompt("Enter a sentence:");

// 1. Total characters
console.log("Total Characters:", sentence.length);

// 2. Uppercase sentence
console.log("Uppercase:", sentence.toUpperCase());

// 3. Lowercase sentence
console.log("Lowercase:", sentence.toLowerCase());

// 4. Whether it contains "JavaScript"
console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// 5. First Character
console.log("First Character:", sentence.slice(0, 1));

// 6. Last Character
console.log("Last Character:", sentence.slice(-1));

// 7. Number of words
let words = sentence.split(" ");
console.log("Number of words:", words.length);

// 8. Replace "JavaScript" with "Python"
console.log("Replaced Sentance:", sentence.replace("JavaScript", "Python"));

// 9. Convert sentence into an array
console.log("Sentence Array:", words);





//9. Final Mini Project - Employee Dashboard
let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }

];


// 1. Employee List
console.log("All Employees:", employees1);


// 2. Search employee by name 
let searchName = prompt("Enter employee name:");
let searchedEmployee = employees1.find(employee => employee.name === searchName);
console.log("Searched Employee:", searchedEmployee);


// 3. Department Filter
let department1 = prompt("Enter department:");
let departmentEmployees = employees1.filter(employee => employee.department === department1);
console.log("Department Employees:", departmentEmployees);


// 4. Salary Filter
let highSalaryEmployees = employees1.filter(employee => employee.salary > 50000);
console.log("Employees earning above ₹50,000:", highSalaryEmployees);


// 5. Total Company salary
let totalSalary = employees1.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Company Salary:", totalSalary);


// 6. Highest Salary
let highestSalary = employees1.reduce((highest, employee) => 
    {
        return employee.salary >
        highest.salary ? employee : highest;
    });



// 7. Experience more than 3 years 
let experiencedEmployees = employees1.filter(employee => employee.experience > 3);
console.log("Employees with more than 3 years experience:", experiencedEmployees);


// 8. Sorting Low - High
let lowToHigh = employees1.slice().sort((a, b) => a. salary - b.salary);
console.log("Salary Low to High:", lowToHigh);


// Sorting High - Low
let highToLow = employees1.slice().sort((a, b) => b.salary - a.salary);
console.log("Salary High to Low:", highToLow);


// 9. Statistics
let totalEmployees = employees1.length;
let averageSalary = totalSalary / totalEmployees;

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));

