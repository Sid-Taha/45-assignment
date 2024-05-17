"use strict";
let alien_color1 = ["green", "yellow", "red"];
for (let i = 0; i < alien_color1.length; i++) {
    if (alien_color1[i] === "green") {
        console.log("The player just earned 5 points.");
    }
    else if (alien_color1[i] === "yellow") {
        console.log("The player just earned 10 points.");
    }
    else if (alien_color1[i] === "red") {
        console.log("The player just earned 15 points.");
    }
    else {
        console.log("you failed");
    }
}
