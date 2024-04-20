// 2-masala

let arr = [4, 5, 7, 8, 6, 9]
let newArr = []
function getEvenReverse(arr) {
    for ( let value of arr){
        if(value % 2 === 0){
            newArr.push(value)
        }
    }
    console.log(newArr.reverse())
}
getEvenReverse(arr)