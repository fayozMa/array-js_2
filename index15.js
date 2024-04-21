// uyga vazifa qismi 9-vazifa

let arr = [1,2,3,4,5,6,7,8,9,10]
let evenArr=[]
let oddArr=[]
for (let i = 0 ; i < arr.length ; i+=2){
    evenArr.push(arr[i])
}
for ( let j = 1 ; j <= arr.length ; j+=2){
    oddArr.push(arr[j])
}
let result = evenArr.concat(oddArr.reverse())
console.log(result.join(','));