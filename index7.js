//7-masala

let arr = [1, 5, 8, 9, 10]
let first
for(let i = 0 ; i < arr.length ; i++){
    if(i == 0){
        first = arr[0]
    }
    arr[i] = arr[i+1]
    
}
arr.splice(arr.indexOf(arr.length - 1), 1 , first)
console.log(arr)
