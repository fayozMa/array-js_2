//3-masala

let arr = [4, 5, 7, 8, 6, 9]
let result = ''
for(let i = 0 ; i <= arr.length ; i++){
    if(i == 0){
        result += `${arr[i]}`
    } else if(i == arr.length){
        result += `${arr[0]}`
    }
    else {
        result += `${arr[arr.length - i]}${arr[i]}`
    }
}
console.log(result.split("").join(",")); 

4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4