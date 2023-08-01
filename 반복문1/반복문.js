let students=[
    {name: "철수", age: 18},
    {name: "훈이", age: 15},
    {name: "짱구", age: 25},
    {name: "유리", age: 17},
    {name: "맹구", age: 22},
]
let result;
for(let i=0;i<students.length;i++){
    if(students[i].age>=20){  
        result="성인";
    } else{
        result="미성년자";
    }
    document.write(students[i].name+"는"+result+"입니다<br>");
}
document.write("<br><br>");

for(let k=0;k<students.length;k++){
    if(students[k].age>=20){  
        document.write(students[k].name+"는 성인입니다<br>");
    } else{
        document.write(students[k].name+"는 미성년자입니다<br>");
    }
}
document.write("<br><br>");
for(i=0;i<students.length;i++){
    if(students[i].age>=20){  
        result="성인";
    } else{
        result="미성년자";
    }
    document.write(`${students.name[i]}는 ${result}입니다`);
}
document.write("<br><br>");