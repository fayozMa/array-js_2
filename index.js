// 1- masala
let n = 2
let arr = []
function getInitialOdds(n) {
    for ( let i = 1 ; i <= n ; i++){
        if( i % 2 == 0){
            n++
        } else {
            arr.push(i)
        }
    }
    console.log(arr);
}
getInitialOdds(n)