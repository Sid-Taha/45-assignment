let guestList: string[] = ['taha', 'hamzah', 'ali aftab']
let message: string = "You are invited in Dinner"
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let absentGuest: string = 'taha'
let newGuest: string = 'Ahmed'

console.log(`\nNote:
Mr. ${absentGuest} is not coming to dinner. \n` );

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList[0] = newGuest
// Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < guestList.length; index++) {
    console.log('Mr.' + guestList[index] + ' ' + message);
}