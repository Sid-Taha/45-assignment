"use strict";
// Make a list of five or more usernames called current_users.
let current_users = ["Taha", "Ahmed", "hasan", "ali", "husain"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["taha", "ahmed", "nazia", "nimra", "yumna"];
let lowercase = [];
for (let j = 0; j < current_users.length; j++) {
    lowercase.push(current_users[j].toLowerCase());
}
// Loop through the new_users list to see if each new username has already been used.
// print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let i = 0; i < new_users.length; i++) {
    if (lowercase.includes(new_users[i])) {
        console.log(`${new_users[i]} is not available`);
    }
    else {
        console.log(`${new_users[i]} is available`);
    }
}
