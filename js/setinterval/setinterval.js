let timer = [];
let start = function(){
    let year = document.getElementById("y").value;
    let month = document.getElementById("m").value;
    let day = document.getElementById("d").value;
    let d2 = new Date(`${year}-${month}-${day}`);
    stop();
    let loop = setInterval(() => {
        let d1 = new Date();
        document.getElementById("time").innerText = d1-d2;
        timer.push(loop)
        console.log(timer);
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
