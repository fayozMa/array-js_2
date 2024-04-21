// uyga vazifa qismi 13-vazifa

let arr = [4, 5, 7, 8, 6, 9]
let newArr = []
function getOddMin(arr) {
    for(let i = 0 ; i <= arr.length ; i++){
        if(i % 2 == 0){
            newArr.push(arr[i])
        }
    }
    newArr.sort((a , b) => a-b)
    console.log(newArr[0])
} getOddMin(arr)