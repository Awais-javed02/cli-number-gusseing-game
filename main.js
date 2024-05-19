#! /usr/bin/env node
import inquirer from "inquirer";
// 1: Computer will generate random number
// 2: User input for guessing number
// 3: Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a Number between 1 to 10"
    }
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log("Conratulations! you suggessed right number");
}
else {
    console.log("Awwwww! You suggessed wrong number");
}
