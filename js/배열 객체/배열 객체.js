let obj = {
    q:"qwery",
    w:"window",
    e:"evolve"
}
let arr = ["a","b","c"]
let okey = Object.keys(obj);
console.log(okey) // okey=["q","w","e"]

console.log(obj.q);
console.log(obj[arr[0]]);

let vv = "q";
// console.log(obj.vv)가 아니라
console.log(obj[vv]) // 이렇게 해야함