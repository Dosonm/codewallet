let timer = [];
let saved_data = localStorage.getItem('key');

let target = function(){
    let year = document.getElementById("y").value;
    let month = document.getElementById("m").value;
    let day = document.getElementById("d").value;
    let d2ing = new Date(`${year}-${month}-${day}`);
    return d2ing;
}
let remain = function(remaining, d1, d2){
        
        let h = Math.floor(remaining/3600);
        let m = Math.floor(((remaining/3600)-h)*60);
        let s = Math.floor(((((remaining/3600)-h)*60)-m)*60);
        let timee = (`${h}-${m}-${s}`);
        return timee;
}
let nloop = function(){
    let llop = setInterval(() => {
        let d1 = new Date();
        let d2 = new Date(saved_data);
        console.log(d2);
        let dday = Math.floor((d1 -d2)/1000);
        let ttimee = remain(dday, d1, d2);
        document.getElementById("time").innerText = ttimee;
        timer.push(llop);
        return;
    }, 1000);
}
let loop = function(){
    let llop = setInterval(() => {
        let d1 = new Date();
        let d2 = new Date(target());
        let remaining = Math.floor((d1 -d2)/1000);
        let ttimee = remain(remaining, d1, d2);
        document.getElementById("time").innerText = ttimee;
        timer.push(llop);
        localStorage.setItem('key',d2);
    }, 1000);
} 
let stop = function(){
    for(let i =0;i<timer.length;i++){
    clearInterval(timer[i])
}
}
let end = function(){
    stop();
}
let go1 = function(){
    if(document.getElementById("y").value.length === 4){
        document.getElementById("m").focus();
    }
}
let go2 = function(){
    if(document.getElementById("m").value.length === 2){
        document.getElementById("d").focus();
    }
}
let start = function(){
    stop();
    loop(); 
}
if(saved_data){                           //여기는 변수에 함수를 담은게 아니기 때문에 바로 실행됨, trusy/falsy 해당 변수에 데이터가 존재하는지 여부에 따라서 true/false 값을 반환함
    stop();
    nloop();                                       //falsy한 데이터 = undefined, null, 0 , nan , "빈문자열" // 이외의 데이터는 모두 trusy
}