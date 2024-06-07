// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.



import inquirer from "inquirer"

let id = ""
let pin = 0
let Account_balance = 0
let running = true

//----------------------------------------user id -------------------------
let question1 = await inquirer.prompt({
    name: "id",
    type: "input",
    message: "Please enter your name ?"
})

id = question1.id

//----------------------------------------pin-------------------------
let question2 = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please generate your 4 digit pin !"
})

if(question2.pin <= 9999 && question2.pin > 999){
   pin = question2.pin
}else{
    console.log("You entered more than 4 digits");
}


//----------------------------------------message account created-------------------------
console.log("\n\t🎉Welcome to Bank application, Your account has been created🎉");
console.log(`\tyour id is: ${id}`);
console.log(`\tyour ATM pin is: ${pin}\n`);




do {
    //----------------------------------------list show-------------------------
let options = await inquirer.prompt({
    name: "list",
    type: "list",
    message: "Please select any of one !",
    choices : ["Balance check", "Amount deposit", "Amount widthdraw"]
})
//                                                     -------Balance check----------
if(options.list === "Balance check"){
    console.log(`You account balance is ${Account_balance}`);
}

//                                                     -------Amount deposit----------
else if (options.list === "Amount deposit"){
    let deposit = await inquirer.prompt({
        name: "Amount",
        type: "number",
        message: "Please enter your deposit amount !"
    })

    if(deposit.Amount > 0){
        Account_balance += deposit.Amount
    }else{
        console.log("Invalid amount");
    }
}
//                                                     -------Amount widthdraw----------
else if(options.list === "Amount widthdraw"){
    if(Account_balance > 0){
        let widthdraw = await inquirer.prompt({
            name: "Amount",
            type: "number",
            message: "Please enter your widthdraw amount !"
        })

        if(Account_balance > widthdraw.Amount){
            Account_balance -= widthdraw.Amount
            console.log(`You new balance is Rs:${Account_balance}`);
            
        }else{
            console.log("Low balance");
        }
        
    }else{
        console.log(`Your account balance is 0, Please deposite some amount`);
    }
}

//----------------------------------------User confirmation -------------------------

let confirm = await inquirer.prompt({
    name: "ans",
    type: "confirm",
    message: "Do you want to continue ?",
    default: true
})

if(confirm.ans === false){
    running = false
}
} while (running);


//----------------------------------------Thank you message -------------------------

console.log("🎉Thank you using ATM machine🎉");