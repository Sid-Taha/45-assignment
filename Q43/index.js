"use strict";
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician_array = ["magician_1", "magician_2", "magician_3", "magician_4"];
function copy_array(arr) {
    return [...arr];
}
let array_copy = copy_array(magician_array);
function make_great(arr) {
    for (let i = 0; i < arr.length; i++) {
        array_copy[i] = `The great ${arr[i]}`;
    }
}
make_great(array_copy);
function show_magicians(arr) {
    return arr;
}
console.log("orignal array: ", show_magicians(magician_array));
console.log("Modified array: ", show_magicians(array_copy));
