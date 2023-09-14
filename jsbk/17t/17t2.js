


let doit = function(){
    let firstinputvalue = document.querySelector('#firstinput').value;
    let secondinputvalue = document.querySelector('#secondinput').value;
    let table = document.createElement('table');
    let total = document.getElementById('tablebox');
    total.appendChild(table);
    for(let i=0;i<firstinputvalue;i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for(let p=0;p<secondinputvalue;p++){
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText=i+","+p;
        }
    }
}