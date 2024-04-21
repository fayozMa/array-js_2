// uyga vazifa qismi 12-vazifa

let arr = [10, false, "", "Abdulaziz", null]
let truthy = []
let falsy = []
for(let value of arr){
    if(Boolean(value) === true){
        truthy.push(value)
    }
    if(Boolean(value) === false ){
        falsy.push(value)
    }
}
console.log(`Truthy: ${truthy}`);
console.log(`Falsy: ${falsy}`);