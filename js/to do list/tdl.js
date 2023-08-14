let ttop = document.getElementById('top');

let ip = function(){
    if(window.event.keyCode === 13){   //함수 내에서 event값을 사용하려면 반드시 그 값을 변수로 넘겨야한다
        let txt = document.getElementById("tt").value;
        let li = document.createElement('li');
        let sp = document.createElement('span');
        
        sp.textContent = txt;
        li.appendChild(sp);          //하위속성으로 태그 추가
        ttop.appendChild(li);
    }
} 
