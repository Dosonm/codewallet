let time=30;
let arr=[];

let timer = function(){
     let stimer=setInterval(function(){
        if(time>=0){
            let min=Math.floor(time / 60);
            let sec=String(time % 60).padStart(2,0);
            document.getElementById("timer").innerText=min + ":" + sec;
            time=time-1;
            arr.push(stimer);
            console.log(arr);
        }  else{
            time=30;
            clearInterval(stimer);
        }
    },1000)
}
let rnum=function(){
    let num=Math.floor(Math.random()*1000000);  
    document.getElementById("change").innerText=num;
    document.getElementById("change").style.color="#"+num;
}
let total=function(){
    for(i=0;i<arr.length;i++){
         clearInterval(arr[i])
    }
    time=30;
    rnum();
    timer()
}