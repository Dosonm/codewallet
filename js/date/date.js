let input = function(){
    let y = document.getElementById("i1").value;
    let m = document.getElementById("i2").value;
    let d = document.getElementById("i3").value;
    let comang = `${y}-${m}-${d}`;
    return comang;
}
let bt = function(){
    let data = input();
    let d1 = new Date();
    let d2 =  new Date(data);
    let year = Math.floor((d1 - d2) / 1000 / 60 / 60 / 24 / 30 / 12);
    let month = Math.floor((d1 - d2) / 1000 / 60 / 60 / 24 / 30 % 12);
    let day =  Math.floor((d1 - d2) / 1000 / 60 / 60 / 24 % 30);
    let hour = Math.floor((d1 - d2) / 1000 / 60 / 60 % 24);
    let minute = Math.floor((d1 - d2) / 1000 / 60 % 60);
    let second = Math.floor((d1 - d2) / 1000 % 60);

    document.getElementById("txt").innerText= `${year}년${month}월${day}일${hour}시${minute}분${second}초`//year+"년"+month + "월" + day + "일" + hour +"시" + minute +"분" + second + "초"
}