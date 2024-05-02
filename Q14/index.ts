
let guestList: string[] = ['taha', 'hamzah', 'ali aftab']

let message: string = "You are invited in Dinner"

for (let index = 0; index < guestList.length; index++) {
    
    console.log('Mr.' + guestList[index] + ' ' + message);

}