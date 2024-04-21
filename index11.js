// uyga vazifa qismi 4-vazifa

let arr = [4, 5, 7, 8, 6, 9]
let answer = ''
let sum =0
for(let value of arr) {
    if(value % 2 !== 0 ){
        answer += `${value} `
        sum += 1
    } 
}
console.log(answer += `toq sonlar = ${sum}`);