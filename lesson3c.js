// Js Function with parameters
// Parameters are values that get pass as aguments when calling a function
// Help as create functions that can be reusable through out a program
// Parameters appears inside of the brackets of the functions

function greeting(name){
    console.log("Hello", name, "How have you been")
}

// From the above example, greeting is thename of the function. Inside of the parethesis, we have 'name' as the parameters
greeting("Joseph Simon")
greeting("Magret lucy")

console.log("=====================")

// Below is afunction that is able to find the product of 3 numbers
function multiple(number1,number2,number3){
    let product= number1 * number2 * number3
    console.log("The product of the numbers is: ", product)
}

multiple(10, 5, 6)

// by use of function that accepts parametres find the area of a tringle whose base is 20cm and height is 12cm

function areaoftriangle(base,height){
    let area = 1/2 * base * height
    console.log("The area of the triange is: ", area)
}
areaoftriangle(20, 12)

// given the speed as 180 and the distance covered as 80km, create a function to find the time taken by a vehicle moving from piont A to B
function timetaken(speed,distance){
    let time = distance/speed
    let timeinMinutes = time * 60
    console.log("The time taken is: ", timeinMinutes,"minutes")
}
timetaken(180, 80)
// research on arrow function, and anonymous functions

