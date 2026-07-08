// Exporting modules in js
// We do export function, variable, modules etc to make them available for use in other parts of a program.

 export const calculator = (x,y) =>{
    let difference = x - y
    console.log("The difference of the 2 numbers is: ", difference)
}

export const simpleinterest = (principle, rate, time) =>{
    let si = (principle * rate * time) /100
    console.log("The interst gained is: ", si)
}

// create you own function, export it and uise it in lesson4e.js
export const TriangleArea = (base, height) =>{
    let area = 1/2 * base * height
    console.log("The area of the triangle is: ", area,"cm2")
}