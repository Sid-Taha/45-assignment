"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_array = ["magician_1", "magician_2", "magician_3"];
function show_magicians(array) {
    array.forEach(p => console.log(p));
}
show_magicians(magician_array);
