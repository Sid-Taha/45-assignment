// Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer.
//name
// welcome message
//task input
//add task message
//show task
//delete task
//thank you message
import inquirer from "inquirer";
//----------------------------------------Variables----------------------------
let User_name = "";
let todo_task = "";
let todo_array = [];
let delete_task = "";
let running = true;
//----------------------------------------name---------------------------------
let question = await inquirer.prompt({
    name: "ans",
    type: "input",
    message: "What is your name? "
});
User_name = question.ans;
//----------------------------------------welcome message------------------------
console.log(`\n\tWelcome ${User_name} to ToDo-list.\n`);
do {
    //-------------------------------------------Select options------------------------
    let option = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "\nPlease select one option !\n",
        choices: ["ADD Task", "Show Task", "Delete Task"]
    });
    //---------------------------------------- add task input------------------------
    if (option.ans === "ADD Task") {
        let task = await inquirer.prompt({
            name: "ans",
            type: "input",
            message: "\nWhat do you want to add in list? "
        });
        todo_task = task.ans;
        todo_array.push(todo_task);
        console.log(`\n${todo_task} has been added in your task list\n`);
    }
    //----------------------------------------Show task------------------------------
    else if (option.ans === "Show Task") {
        show_list(todo_array);
    }
    //----------------------------------------delete task------------------------------
    else if (option.ans === "Delete Task") {
        let show = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "Which task you want to delete?",
            choices: todo_array
        });
        delete_task = show.ans;
        todo_array.splice((todo_array.indexOf(delete_task)), 1);
        console.log(`\n\t${delete_task} has been delete from your todo list.\n`);
        show_list(todo_array);
    }
    //----------------------------------------Confirmation------------------------------
    await User_confirmation();
} while (running);
//----------------------------------------thank you message------------------------------
console.log("\n\tThank you for using Todo list\n");
//----------------------------------------Extra function--------------------------------
//----------------------------------------Show_list function------------------------------
function show_list(a) {
    console.log("\n");
    console.log("----------------TODO-LIST----------------");
    for (let i = 0; i < a.length; i++) {
        console.log(`${[i + 1]}- ${a[i]}`);
    }
    console.log("\n");
}
//----------------------------------------User_confirmation function------------------------------
async function User_confirmation() {
    let question = await inquirer.prompt({
        name: "ans",
        type: "confirm",
        message: "Do you  want to Continue? "
    });
    if (question.ans === false) {
        running = false;
    }
}
