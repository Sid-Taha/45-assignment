"use strict";
let username = ["ahmed", "admin", "taha", "asad", "shahid"];
while (username.length > 0) {
    username.pop();
}
if (username.length === 0) {
    console.log("We need to find some users!");
}
