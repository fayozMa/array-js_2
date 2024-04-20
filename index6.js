//6-masala

let arr = [7, 4, 9, 2, 3, 1, 5]
let arrcopy = [...arr]
arrcopy = arrcopy.sort((a , b) => a - b)
min = arrcopy[0]
max = arrcopy[arrcopy.length - 1]
arr[arr.indexOf(min) ]= max
arr[arr.indexOf(max) ]= min
console.log(arr);