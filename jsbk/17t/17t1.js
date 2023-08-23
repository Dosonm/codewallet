let checkboxclassselector = document.querySelectorAll('.checkboxclass')
let check = function(){
    // console.log(checkboxclassselector[1].checked)
    // console.log(this)
    // console.log(this.nextElementSibling)
    if(this.checked === true){
        this.nextElementSibling.style.color='gray';
        this.nextElementSibling.style.textDecoration='line-through'
    }   else{
        this.nextElementSibling.style.color='black';
        this.nextElementSibling.style.textDecoration='none'
    }
}
for(let i=0;i<checkboxclassselector.length;i++){
    checkboxclassselector[i].onclick=check
}
