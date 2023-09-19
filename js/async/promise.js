// 1. producer
const prom = new Promise((resolve,reject) => {
    console.log("doing something");
    setTimeout(()=>{
        resolve('doit');
        //reject(new Error())//error라는 obj는 자바스크립트에서 제공하는 obj중 하나이다
    },2000);
})
//2.consumers: then, catch, finally를 통해 값을 받아올 수 있다
// prom.then(value => { //promise객체가 실행하고 잘 되면(then) 값을 value라는 변수로 받아올거야 그리고 실행
//     console.log(value)
// })
prom
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(()=>{
    console.log('finally')
})

//3. promise chaining
const promiseChaining = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve(1);
    },1000)
})
promiseChaining
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve,reject) => {
       setTimeout(() => resolve(num-1),1000
        );
    })
})
.then(num => console.log(num));

//4. error handling
const getHen = () => { //중괄호를 사용했다면 반드시 return을 통해 결과값을 지시해주어야한다(한줄짜리면 굳이 상관없는데 줄이 길어지면 반드시 해줘야함)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('닭');
        },1000)
    })
}
const getegg = (rehen) => 
    new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`${rehen} => 달걀`)
        },1000)
    })

const cook = (reegg) => 
    new Promise((resolve,reject) => {
        setTimeout(()=>{
           resolve(`${reegg} => 치킨`); 
        },1000)
    })


getHen()
.then(hen => getegg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));

// const makefunction = () => 
//     console.log('성공');

// makefunction()
// function makefunction(){
//     console.log('서엉공')
// }
// makefunction()