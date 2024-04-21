// uyga vazifa qismi 5-vazifa

let arr = [4, 5, 7, 8, 6, 9]
let evenArr = []
let primeArr = []
for ( let value of arr){
    if(value % 2 === 0){
        evenArr.push(value)
    }
    else {
        primeArr.push(value)
    }
}
let result = evenArr.concat(primeArr.reverse())
console.log(result.join(' '));


