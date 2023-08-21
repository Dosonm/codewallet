function timer(){
    let nowday = new Date();
    let nowdaystr = nowday.toLocaleTimeString();
    document.getElementById('nowdayid').innerText = nowdaystr;
}

setInterval(timer, 1000);





//document.querySelector('#nowdayid').innerHTML = nowdaystr
// //element.innerText = "<div style='color:red'>A</div>";
// element.innerText에 html을 포함한 문자열을 입력하면, 
// html코드가 문자열 그대로 element안에 포함됩니다.

// element.innerHTML = "<div style='color:red'>A</div>";
//빨간색 a만 출력

