// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_array: string[] = ["magician_1","magician_2","magician_3","magician_4"]

function make_great(arr: string[]){
    
    for (let i = 0; i < arr.length; i++) {
 
        magician_array[i] = "The Great " + arr[i]
        
    }
}

make_great(magician_array)

console.log(magician_array);



