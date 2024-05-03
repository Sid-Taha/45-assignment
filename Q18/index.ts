
// Store the locations in a array. Make sure the array is not in alphabetical order.
let locations: string[] = ['hyderabad', 'saudia Arab', 'india', 'pakistan', 'canada'] 

// Print your array in its original order.
console.log('Orignal:');
console.log(locations);

// Print your array in alphabetical order without modifying the actual list.
console.log('Copy:');
console.log([...locations].sort());


// Show that your array is still in its original order by printing it.
console.log('Orignal:');
console.log(locations);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy:');
console.log([...locations].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Orignal:');
console.log(locations);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal:');
console.log(locations.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Orignal:');
console.log(locations.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal:');
console.log(locations.sort());


// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Orignal:');
console.log(locations.sort().reverse());
