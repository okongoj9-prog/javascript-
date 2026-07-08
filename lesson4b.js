// Arrrow functions with parameters

const greet = (name) =>{
    console.log("Hello, " + name + "How have you been? I trust you  are good...")
}

greet("James Atieno")
greet("Mary Joseph")

console.log("==========================")
// Create an arrow functions with parameters of your own.
const calculateDiscountpercantage = (price,discount) =>{
    let prices = price * (discount/100)
    let finalprice = price - prices 
    console.log(finalprice)
}
calculateDiscountpercantage(20,5)

console.log("========================")

// example 3
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is: ", area, "cm2")
}

CircleArea(3.142, 7)
CircleArea(22/7, 35)