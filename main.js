#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let playername = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.rgb(255, 0, 255).italic("\nType Your Good name here :"),
    validate: (input) => /^[A-Za-z]+$/.test(input) ? true : "Please Enter only alphbatical character"
});
console.log(chalk.rgb(112, 128, 144)(`\n\t\t====================-------------------------------======================\t`));
console.log(chalk.rgb(255, 253, 208).italic.bold(`\t\t\t------------ WELCOME TO THE QUIZ "${playername.name}"! ------------`));
console.log(chalk.rgb(64, 224, 208).italic.bold(`\t\t\t   This quiz based on 10 question each carry 2 Marks`));
console.log(chalk.rgb(255, 253, 208).italic.bold(`\t\t\t\t---------- let get started! 🚀----------`));
console.log(chalk.rgb(112, 128, 144)(`\t\t====================-------------------------------======================\t\n`));
let score = [0];
let quiz = await inquirer.prompt([
    {
        name: "quiz1",
        type: "confirm",
        message: chalk.rgb(255, 0, 255).italic("1) Does TypeScript code run directly in the browser?")
    }
]);
if (quiz.quiz1 == false) {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    console.log();
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\t    Correct answer is : NO\n"));
}
let quiz2 = await inquirer.prompt([
    {
        name: "quiz2",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("2) TypeScript type checks our code, but when can this type checking process take place?"),
        choices: ["whilest we write our code", "during the project build procees", "At run time", "befor compilation"]
    }
]);
if (quiz2.quiz2 == "At run time") {
    console.log(chalk.rgb(255, 255, 102)("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is :'At run time'\n"));
}
let quiz3 = await inquirer.prompt([
    {
        name: "quiz3",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("3) Which of the following is a benefit of using TypeScript over JavaScript?"),
        choices: ["Faster execution speed", "Stronger typing", "Easier syntax", "Better browser compatibility"]
    }
]);
if (quiz3.quiz3 == "Stronger typing") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'Stronger typing' \n"));
}
let quiz4 = await inquirer.prompt([
    {
        name: "quiz4",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("4) What is the purpose of TypeScript's 'class' keyword?"),
        choices: ["To define a new HTML elemet", "To create a new instance of an object", "To define a blueprint for creating objects with similar properties and methods", "To include external libraries"]
    }
]);
if (quiz4.quiz4 == "To define a blueprint for creating objects with similar properties and methods") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'To define a blueprint for creating objects with similar properties and methods' \n"));
}
let quiz5 = await inquirer.prompt([
    {
        name: "quiz5",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("5) What does the ! operator do when used with a variable in TypeScript?"),
        choices: ["Converts the variable to a boolean value", "Denotes a nullable type", "Asserts that the variable is not null or undefined", "Indicates a bitwise operation"]
    }
]);
if (quiz5.quiz5 == "Asserts that the variable is not null or undefined") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'Asserts that the variable is not null or undefined' \n"));
}
let quiz6 = await inquirer.prompt([
    {
        name: "quiz6",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("6) Which TypeScript feature allows for combining multiple types into one type"),
        choices: ["Union types", "Intersection types", "Type literals", "Conditional types"]
    }
]);
if (quiz6.quiz6 == "Union types") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'Union types' \n"));
}
let quiz7 = await inquirer.prompt([
    {
        name: "quiz7",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("7) What does the === operator do in TypeScript?"),
        choices: ["Checks for equality without type coercion", "Checks for equality with type coercion", "Assigns a value to a variable", "Indicates strict mode"]
    }
]);
if (quiz7.quiz7 == "Checks for equality without type coercion") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'Checks for equality without type coercion' \n"));
}
let quiz8 = await inquirer.prompt([
    {
        name: "quiz8",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("8) What does the ?. operator, also known as the optional chaining operator, do in TypeScript"),
        choices: ["Checks for strict equality between two values", "Performs nullish coalescing", "Exponentiation", "Provides optional property access on possibly null or undefined values"]
    }
]);
if (quiz8.quiz8 == "Provides optional property access on possibly null or undefined values") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'Provides optional property access on possibly null or undefined values' \n"));
}
let quiz9 = await inquirer.prompt([
    {
        name: "quiz9",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("9) What is the purpose of TypeScript's 'void' keyword in function declarations"),
        choices: ["To specify that the function is an arrow function", "To specify that the function is a generator function", "To specify that the function returns no value", "To specify that the function returns a boolean value"]
    }
]);
if (quiz9.quiz9 == "To specify that the function returns no value") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'To specify that the function returns no value' \n"));
}
let quiz10 = await inquirer.prompt([
    {
        name: "quiz10",
        type: "list",
        message: chalk.rgb(255, 0, 255).italic("10) In TypeScript, what does the this keyword refer to inside a class method?"),
        choices: ["It refers to the instance of the class itself.", "It refers to the parent class of the current class.", "It refers to the global object.", "It refers to the function scope."]
    }
]);
if (quiz10.quiz10 == "It refers to the instance of the class itself.") {
    console.log(chalk.rgb(255, 255, 102).bold("\n\t\tCorrect answer!\n"));
    score.push(2);
}
else {
    console.log(chalk.red.bold("\n\t\tIncorrect answer!"));
    console.log(chalk.green.bold("\n\tCorrect answer is: 'It refers to the instance of the class itself.' \n"));
}
let src = score.reduce((val1, val2) => val1 + val2);
console.log(chalk.magentaBright.italic.bold(`\n\t   ------------------------ ${playername.name} Your FINAL SCORE 📋-----------------------\t\t\n`));
console.log(chalk.cyanBright.italic(`\n\t\t\t"${playername.name}" Your final Score out of 20 is ${chalk.yellow.italic(src)}\n`));
if (src <= 20 && src > 15) {
    console.log(chalk.blueBright.bold.italic(`\t\t\t\t   "A+" Grade 🏆\n
           "${playername.name} Your dedication and hard work is shining  Keep it up! ✨⭐"`));
}
else if (src <= 15 && src >= 10) {
    console.log(chalk.blueBright.bold.italic(`\t\t\t\t   "A" Grade ⭐\n
           "${playername.name} Your commitment to excellence is truly inspiring!✨"`));
}
else if (src <= 10 && src >= 5) {
    console.log(chalk.blueBright.bold.italic(`\t\t\t\t   "B" Grade 👏\n
           "${playername.name} Your dedication to improvement is evident in your progress!"⭐`));
}
else if (src <= 5 && src >= 0) {
    console.log(chalk.blueBright.bold.italic(`\t\t\t\t   "C" Grade \n
            "${playername.name} Keep pushing yourself to reach higher and never underestimate your potential for growth."👍`));
}
console.log(chalk.rgb(112, 128, 144)(`\n\t====================-------------------------------======================\t`));
console.log(chalk.rgb(64, 224, 208).italic.bold(`\t\t========= I'm hoping that you found it informative ========\t`));
console.log(chalk.rgb(112, 128, 144)(`\t====================-------------------------------======================\t\n`));
