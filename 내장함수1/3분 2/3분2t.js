let time=30;
    let timer = function(){
        if(time>=0){
            let min=Math.floor(time / 60);
            let sec=String(time % 60).padStart(2,0);
            document.getElementById("timer").innerText=min + ":" + sec;
            time=time-1;
        }  else{
            time=30;
            clearInterval(stimer);
        }
     }
let stimer=setInterval(timer(),1000);
let rnum=function(){
    let num=Math.floor(Math.random()*1000000);  
    document.getElementById("change").innerText=num;
    document.getElementById("change").style.color="#"+num;
}
let total=function(){
        clearInterval(stimer);
        time=30;
        timer();
        rnum();
}