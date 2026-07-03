// Comparision operators
// They usually evaluates to a boolean(true or false). They are used for comparing 2/more values

let number1 = 5 
let number2 = 10
let number3 = "5"

console.log(number1 > number2)
console.log(number1 == number2)
console.log(number1 < number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 != number2)
console.log(number1 === number1)// strict equal to - evaluates both the data type and the value.
console.log(number1 !== number1)// strict not equal to - evaluates both data type and the value.

// logical operators
//They are used in multiple condition and return a boolen.
// Logical and (&&)
// it evaluates to true only if both of the conditon are true
console.log((number1 < number2) && (number2 > number1))

// Logical or(||)
// It evalutes to true if one of the condition / statment is true
console.log((6 > 3) || (3>8))

// Logical not (!)
// it negates a  stament/reverse the condition
console.log(!(4 < 5))