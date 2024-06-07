import chalk from "chalk";
import inquirer from "inquirer";

let running = true

do{
    let question = await inquirer.prompt([
        {
          name: "ans1",
          type: "list",
          message: chalk.redBright.bold("Please select operation: \n"),
          choices: ["➕", "➖", "➗", "❌"],
        },
        {
          name: "ans2",
          type: "number",
          message: chalk.redBright.bold("Please enter your first number: \n"),
        },
        {
          name: "ans3",
          type: "number",
          message: chalk.redBright.bold("Please enter your second number: \n"),
        },
      ]);
      
      if(question.ans1 === "➕"){
         console.log(chalk.green.bold(`\n\t ➕ Result is ${question.ans2 + question.ans3}`));
      }
      else if(question.ans1 === "➖"){
          console.log(chalk.green.bold(`\n\t ➖ Result is ${question.ans2 - question.ans3}`));
      }
      else if(question.ans1 === "➗"){
          console.log(chalk.green.bold(`\n\t ➗ Result is ${question.ans2 / question.ans3}`));
      }
      else if(question.ans1 === "❌"){
          console.log(chalk.green.bold(`\n\t ❌ Result is ${question.ans2 * question.ans3}`));
      }

      let confirm = await inquirer.prompt({
        name: "ans",
        type : "confirm",
        message : chalk.redBright.bold("Do you want to continue? ")
      })

      if(confirm.ans === false){
        running = false
      }


}while(running)

console.log(chalk.hex("#24eb09").bold("\n\tThank you for using calculator 😡"));

