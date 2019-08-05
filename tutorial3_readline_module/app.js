const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`, userInput => {
  //   console.log(userInput);
  if (userInput == answer) {
    rl.close();
  } else {
    rl.setPrompt('Your response is incorrect, Please try again..\n');
    rl.prompt();
    rl.on("line", userInput => {
      if (userInput == answer) {
        rl.close();
      } else {
          rl.setPrompt(`Your answer of ${userInput} is incorrect, Please try again..\n`);
          rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("Correct!!!!");
});
