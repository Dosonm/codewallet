function first(){
    document.write("함수 선언식<br>");
}
let second=function(){
    document.write("함수 표현식<br>");
}
let third=()=>{
    document.write("화살표 함수");
}
first();
second();
third();


/*let num=function(){
    let p=String(Math.floor(Math.random()*1000000)).padStart(6,0);
    document.getElementById("randomnum").innerText=p;
}
*/
let num=()=>{
    let p=String(Math.floor(Math.random()*1000000)).padStart(6,0);
    document.getElementById("randomnum").innerText=p;
    document.getElementById("randomnum").style.color="#"+p;
}