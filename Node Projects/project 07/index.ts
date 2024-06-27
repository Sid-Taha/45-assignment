//new addmision (name,id, courses , balance)
//show status
//Exit

import inquirer from "inquirer"

 
class Student {
     name:string
     id: number
     courses: string
     balance: number
     fees_paid: "Paid" | "Unpaid"

     constructor (name:string, id: number, courses: string, balance: number,fees_paid: "Paid" | "Unpaid") {
          this.name = name
          this.id = id
          this.courses = courses
          this.balance = balance
          this.fees_paid = fees_paid
     }
}

//--------------------------------------------variables--------------------------------------------
let std_name = ""
let std_id = 10000
let course = ""
let balance = 0
let fees_paid: "Paid" | "Unpaid" = "Unpaid"
let std_info_array = []
let names_array: any[] = []
let std_status
let running: boolean = true

do {
     //--------------------------------------------Options--------------------------------------------
let question = await inquirer.prompt({
     name: "options",
     type: "list",
     message: "Please select one",
     choices: ["Enroll", "Show status", "Exit"]
})


//--------------------------------------------Enroll--------------------------------------------
if(question.options === "Enroll"){
     //--------------------------------------------Name--------------------------------------------    
     let question1 = await inquirer.prompt({
               name: "name",
               type: "input",
               message: "Please Enter your name"
          })

          if(question1.name){
               std_name = question1.name
               std_id = ++std_id
          }
          else{
               console.log("Please Enter a valid name");
          }

          //--------------------------------------------Cource--------------------------------------------
          let question2 = await inquirer.prompt({
                    name: "cource",
                    type: "list",
                    message: "Please select cource",
                    choices: ["IT", "English", "Cooking"]
          })

          if(question2.cource === "IT"){
               let question = await inquirer.prompt({
                    name: "IT",
                    type: "confirm",
                    message: "Do you want to enroll in this cource for $10000 ?"
               })
               
               if(question.IT === true){
                    balance = 10000
                    fees_paid = "Paid"
                    course = "IT"
               }

          }else if(question2.cource === "English"){
               let question = await inquirer.prompt({
                    name: "ENGLISH",
                    type: "confirm",
                    message: "Do you want to enroll in this cource for $5000 ?"
               })

               if(question.ENGLISH === true){
                    balance = 5000
                    fees_paid = "Paid"
                    course = "English"
               }

          }else if(question2.cource === "Cooking"){
               let question = await inquirer.prompt({
                    name: "COOKING",
                    type: "confirm",
                    message: "Do you want to enroll in this cource for $1000 ?"
               })

               if(question.COOKING === true){
                    balance = 1000
                    fees_paid = "Paid"
                    course = "Cooking"
               }
          }

          const std_info = new Student (std_name,std_id,course,balance,fees_paid)
          std_info_array.push(std_info)
}
//--------------------------------------------Show status--------------------------------------------
else if (question.options === "Show status"){
     names_array = std_info_array.map((obj)=> obj.name)

     let question3 = await inquirer.prompt({
          name: "name",
          type: "list",
          message: "Please select name",
          choices: names_array
})

std_status =  std_info_array.find((obj)=> obj.name === question3.name)
console.log(std_status);
     
}
//--------------------------------------------Exit--------------------------------------------
else if(question.options === "Exit"){
     running = false
     console.log("Thank you for using Student Managment system");
}

} while (running);














































// let std_id = 10000

// //--------------------------------------------Questions--------------------------------------------


// //--------------------------------------------generate_id--------------------------------------------
// if(question.name){
// std_id++
// }else{
//      console.log("Please enter a valid name");
// }



