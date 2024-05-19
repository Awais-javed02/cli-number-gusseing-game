#! /usr/bin/env node 
import inquirer from "inquirer";

//1)computer will a random number - done

//2)user input for guessing number - done

//3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "plaese guess a number between 1- 10"
  },
]);

if (answer.userGuessdNumber === randomNumber) {
  console.log("congragulations! you guessd right number");
}
 else {
  console.log("you guessd wrong number");
}
