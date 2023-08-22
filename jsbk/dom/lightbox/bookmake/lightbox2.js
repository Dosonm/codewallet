
let lightbox = function(){
    document.getElementById('lightboxid').style.display='block';
    document.getElementById('lightimgid').src = this.src
}

let zom = document.getElementById('lightboxid');
zom.addEventListener('click',() => {
    zom.style.display="none";
})


let dom = document.getElementsByClassName('box');
    for(let i=0;i<dom.length;i++){
        dom[i].addEventListener('click',lightbox);
    }