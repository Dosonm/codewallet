let activate = function(){
    let email = document.getElementById("fir").value;
    let pw1 = document.getElementById("sec").value;
    let pw2 = document.getElementById("thi").value;
    if(email !== "" && pw1 !== "" && pw2 !== ""){              //if(email && pw1 && pw2) 이렇게 해도됨 값이 있으면 true 없으면 false를 반환하기 때문에
        document.getElementById("but").disabled=false;
    }   else{
        document.getElementById("but").disabled=true;
    }
}
let changefocus1 = function(){
    activate();
    let email = document.getElementById("fir").value;
    if(email.length===3){
        document.getElementById("sec").focus();
    }
}
let changefocus2 = function(){
    activate();
    let pw1 = document.getElementById("sec").value;
    if(pw1.length===4){
        document.getElementById("thi").focus();
    }
}