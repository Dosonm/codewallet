let typingselector = document.getElementById('typingid');

let btnselector = document.getElementById('btnid');

typingselector.addEventListener('keydown',() => {
    if(window.event.keyCode === 13){
        doit();
    }
});
btnselector.onclick = function(){
    doit();
}
let doit = function(){
    let newli = document.createElement('li');
        let newtxt = document.createTextNode(typingselector.value);
        newli.appendChild(newtxt);
        document.querySelector('body').appendChild(newli);
        typingselector.value = "";
}