// document.getElementById("bt").setAttribute("onclick","fc2()"); on이벤트는 set/get/removeattribute메소드에 벗어난다




let changecolor = function(){
    document.getElementById('text').style="color: red"
}
document.querySelector("#bt").onclick=changecolor;