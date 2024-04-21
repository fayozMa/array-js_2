// uyga vazifa qismi 11-vazifa               10ni qila olmadim

let array = [1,2,3,4,5,6,7,8,9,10]
let k = 2
let l = 5
let sum = 0
function rangeOutSum(arr , k , l) {
    for(let i = k ; i <= l ; i++){
        array = array.splice(arr[i],l-k )
    }
    for(let value of arr){
        sum += value
    }
    console.log(sum);
}
rangeOutSum(array ,k ,l)