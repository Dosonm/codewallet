let data = {
    a:12,
    b:24,
    c:55,
    d:67
}
//객체 내에 있는 프로퍼티의 값들을 모두 불러오는 방법 for in은 객체 for of 는 배열
console.log(data.a);
console.log(data.b);
console.log(data.c);
console.log(data.d);

//위에거를 간편하게 하는 방법
let dkey = Object.keys(data);
for(let i = 0; i<dkey.length;i++){
    console.log(data[dkey[i]]);
}

//이거를 좀 더 간편하게 하는 방법
for(let okey in data){
    console.log(data[okey]);
}