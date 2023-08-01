let rnum=function(){
    const num=Math.floor(Math.random()*1000000);
    document.getElementById("check").innerText=num;
    document.getElementById("check").style.color="#"+num;
}