let timer=function(){
    let time=180;
    setInterval(function(){
        if(time>=0){
            let min=Math.floor(time / 60);
            let sec=String(time % 60).padStart(2,0);
            document.getElementById("timer").innerText=min + ":" + sec;
            time=time-1;
        }
    },1000)
}
let rnum=function(){
    let num=Math.floor(Math.random()*1000000);  
    document.getElementById("change").innerText=num;
    document.getElementById("change").style.color="#"+num;
}
let total=function(){
    timer();
    rnum();
}