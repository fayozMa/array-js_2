// uyga vazifa qismi 6-vazifa

let arr = [1,2,3,4,5,6,7,8]
let newArr = []
for ( let i = 0 ; i < arr.length ; i+=2){
    newArr.push(arr[i])
}
newArr = newArr.join(",")
console.log(newArr);