let timer = [];
let start = function(){
    let year = document.getElementById("y").value;
    let month = document.getElementById("m").value;
    let day = document.getElementById("d").value;
    let d2 = new Date(`${year}-${month}-${day}`);
    
    let loop = setInterval(() => {
        let d1 = new Date();
        document.getElementById("time").innerText = d1-d2;
        timer.push(loop)
        console.log(timer);
    }, 1000);
}
let end = function(){
    for(let i =0;i<timer.length;i++){
    clearInterval(timer[i])
}
}
