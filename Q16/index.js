"use strict";
let guestList = ['taha', 'hamzah', 'ali aftab'];
let message = "You are invited in Dinner";
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let absentGuest = 'taha';
let newGuest = 'Ahmed';
console.log(`\nNote:
Mr. ${absentGuest} is not coming to dinner. \n`);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList[0] = newGuest;
// Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log('\nWe found a bigger dinner table');
// Add one new guest to the beginning of your array.
let guestName1 = guestList.unshift('faiza');
// Add one new guest to the middle of your array.
let guestName2 = guestList.splice(2, 0, 'Bisma');
// Use append() to add one new guest to the end of your list.
let guestName3 = guestList.push('Siddiqui');
// Print a new set of invitation messages, one for each person in your list.
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
