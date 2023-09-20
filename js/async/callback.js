//콜백함수란 1.다른함수의 인자로써 이용되는 함수 2.어떤 이벤트에 의해 호출되어지는 함수

function printImmediately(print){
    print();
}
function printDelay(print, timeout){
    setTimeout(print,timeout);
}
//settimeout은 web api로 비동기방식이다.
console.log('1'); //동기
setTimeout(() => {  //비동기
    console.log('2')
}, 2000);
console.log('3')    //동기  
setTimeout(() => {   //비동기
    console.log('4')
}, 3000);
printImmediately(() => console.log('hello')) //동기
printDelay(() => console.log('hi'),2000) //비동기