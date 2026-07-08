// Js for loop
// Loops are used to iterate through something until a condition is met
// Structure of the for loop
// 1. for keyword followed by the paranthesis
// 2. intialization; set a condition; increment/decrement
// 3. Body of the loop (statement to be printed out.)

for(i =0; i <= 10; i++){
    console.log("The new value of i is: ", i)
}
console.log("=============================")
// create a program by use of the for loop that prints out the leap years in btwn 2000 and 2030
for (let year = 2000; year <= 2030; year++) {
    if (year % 4 === 0) {
        console.log("Leap year: ", year)
    }
}

//research on the whlie loop.