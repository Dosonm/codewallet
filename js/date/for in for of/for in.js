let data = {
    a:12,
    b:24,
    c:55,
    d:67
}
let dkey = Object.keys(data);
for(let i = 0; i<dkey.length;i++){
    console.log(data[dkey[i]]);
}