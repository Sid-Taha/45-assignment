"use strict";
// Tests for equality
console.log("taha" === "ahmed"); // flase
// Tests for inequality
console.log("taha" != "ahmed"); // true
// Tests using the lower case method
console.log("Bisma".toLowerCase() === "bisma"); //true
// Numerical tests involving equality
console.log(12 === 12); //true
// Numerical tests involving inequality
console.log(30 != 15); //true
// greater than
console.log(10 > 5); //true
// less than
console.log(10 < 5); //false
// greater than or equal to
console.log(10 >= 10); //true
// and less than or equal to
console.log(30 <= 40); //true
// Tests using "and" and "or" operators
console.log(7 === 7 && 5 === 5); //true
console.log(10 < 5 || 7 > 9); //false
let names_array = ["taha", "ahmed", "ali"];
console.log(names_array.includes("ahmed") === true); //true
// Test whether an item is not in a array
console.log(!(names_array.includes("sara"))); //true
