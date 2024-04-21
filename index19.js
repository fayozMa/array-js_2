// uyga vazifa qismi 14-vazifa

let arr = [4, 5, 7, 8, 6, 9]
let newArr = []
function getEvenMax(arr) {
    for(let i = 0 ;i <= arr.length ; i++)
    if(i % 2 !== 0){
        newArr.push(arr[i])
    }
    newArr.sort((a , b) => a-b)
    console.log(newArr[newArr.length - 1]);
}
getEvenMax(arr)