let topselector = document.getElementById('toplist');

let change = function(){
    if(window.event.keyCode === 13){   //함수 내에서 event값을 사용하려면 반드시 그 값을 변수로 넘겨야한다
        let textinputboxvalue = document.getElementById("textinputbox").value;
        let newli = document.createElement('li');
        let newspan = document.createElement('span');
        let newbutton = document.createElement('button');
        
        newspan.textContent = textinputboxvalue;
        newli.appendChild(newbutton);
        newli.appendChild(newspan);          //하위속성으로 태그 추가
        topselector.appendChild(newli);
        
        newli.classList.toggle('list');
        newspan.classList.add('text');
        
        newbutton.addEventListener('click',() => {
            newspan.classList.toggle('ClearOrNot');
        })
        newspan.addEventListener('dblclick',() => {
            newli.remove();
        })
        document.getElementById("textinputbox").value="";
        saveitems();
    }
} 
let alldeletefunction = function(){
    let allList = document.querySelectorAll('.list');
    for(let i=0;i<allList.length;i++){
        allList[i].remove();
    }
}

let saveitems = function(){
    let saved = [];
    let savedtext = document.getElementsByClassName('text');

    for(let i=0;i<savedtext.length;i++){
        let localobj = {
       objtext: savedtext[i],
       objclass: topselector.children[i].lastChild.classList.contains('ClearOrNot')
        }
        saved.push(localobj);
    }                   //node는 간단히 말해서 html elements 이다 children, childnodes의 차이 구별하기
    console.log(saved);
    localStorage.setItem('data',saved);
}