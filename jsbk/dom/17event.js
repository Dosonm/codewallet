let first = document.getElementById("img");

 first.addEventListener("mouseover",change);
 first.addEventListener("mouseout",twochange);

function change(){
    // first.src = "../dom/img/b.png" 둘다 가능
    first.setAttribute("src","../dom/img/b.png");
}
function twochange(){
    first.src="../dom/img/c.png";
}

//이와같이 다른곳에서 사용되지 않는 일회용 함수 같은 경우 익명함수로 바로 사용하는 것이 좋다
// first.addEventListener("mouseover",()=>{
//     first.setAttribute("src","../dom/img/b.png");
// });