//5-masala

let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
let newArr = []
function getSingleArr(arr) {
    for(let value of arr){
        let bool = newArr.includes(value)
        if(bool == false){
            newArr.push(value)
        } 
    }
    return newArr
}
console.log(getSingleArr(arr));

