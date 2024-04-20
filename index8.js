//uyga vazifa qismi 1-masala

let n = 5
let arr = []
function getLevel2(n) {
    for(let i = 1 ; i < n ; i++){
        arr.push(2**i) 
    }
    console.log(arr);
}
getLevel2(n)