// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.

// While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.

//Which country => ...etc
//from amount => ...etc
//to amount => ...etc

import inquirer from "inquirer"

let amount: any = {
    USD : 1,
    AED : 3.67,
    PKR : 278
}

let a = Object.keys(amount)

let user_input = await inquirer.prompt([{
    name : "ans1",
    type : "list",
    message : "Please select country, From amount",
    choices: a
},
{
    name : "ans2",
    type : "list",
    message : "Please select country, To amount",
    choices: a
},
{
    name : "ans3",
    type : "number",
    message : "Please enter your amount",
}
])


console.log(amount[user_input.ans2] / amount[user_input.ans1] * user_input.ans3);
