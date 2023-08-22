let closeup = function(id,url){
    let dom = document.getElementById(id)
    dom.addEventListener('click',() => {
       document.getElementById('lightboxid').style.display='block';
       document.getElementById('lightimgid').src = url;
    })
}
// for(let i=1;i<2;i++){
//     var data = i
//     var tdata ="../img/tree-" + i + ".jpg";
//     console.log(data,tdata)
//     closeup("'" +data+"'" ,"'" +tdata+"'")
// }
closeup('1','../img/tree-1.jpg')
closeup('2','../img/tree-2.jpg')
closeup('3','../img/tree-3.jpg')
closeup('4','../img/tree-4.jpg')
closeup('5','../img/tree-5.jpg')
closeup('6','../img/tree-6.jpg')


    let zom = document.getElementById('lightboxid');
    zom.addEventListener('click',() => {
        zom.style.display="none";
    })
