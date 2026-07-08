// While loop
// This is another type of a loop in js used for iteration purposes.
// The sytax of the while is given as :
// 1. intialization  a variable
// 2. while keyword
// 3.condition to be checked
// 4. body of the whlie loop
// 5. increment/decerment

let i = 0

while (i <= 10){
    console.log("The new value of i is: ", i)
    i++
}

console.log("=============================")

let x = 20

while(x <= 200){
    console.log("x is ", x)
    x+=2
}

console.log("=======================")

// create a program that finds all the odd from 150 to 74.

let y = 150

while (y >= 74){
    if(y % 2 !==0){
        console.log("The odd number is", y)
    }
    y--;
}
