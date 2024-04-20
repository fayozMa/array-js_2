//4-masala

let arr = [1, 6, 9, 5, 8, 10, 15]
let k = 2
let l = 5
let n = arr.length
let sum = 0
function rangeSum(arr, K, L) {
    for(let i = K ; i <= L; i++){
        sum += arr[i]
    }
    console.log(sum);
}
rangeSum(arr, k, l)
