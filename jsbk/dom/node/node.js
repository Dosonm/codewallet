let make = function(){
    let newli = document.createElement('li');
    let newtext = document.createTextNode("새롭게 추가된 노드");
    newli.appendChild(newtext);
    document.getElementById('top').appendChild(newli);

    let newimg = document.createElement('img');
    let newimgat = document.createAttribute('src');
    newimgat.value="../img/R.jpg"
    newimg.setAttributeNode(newimgat);
    newli.appendChild(newimg);
    newimg.style.width="200px";
    newimg.style.width="100px";
} 


    // document.getElementsByTagName('ul').appendChild(newli)가 안되는 이유
// 클래스던 태그던 가져오는 값이 2개 이상일 수 있기 때문에 이렇게 하나만 지정해서 하는경우 아이디를 사용해야한다