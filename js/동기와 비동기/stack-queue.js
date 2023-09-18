setInterval(() => {
    console.log('456')
},1000)

console.log('123')

// 자료구조-데이터를 효율적으로 관리하기 위해 만든 것
// stack,queue

//call stack(일반적인 js), callback queue
//동기와 비동기
//비동기란 다른 코드의 실행을 기다리지 않고 바로 실행하는 것

//setinterval함수는 callback queue이면서 비동기 함수이기 때문에 기다리지 않고, call stack함수가 모두 실행을
// 마친 뒤에 실행이 됨

//promise-비동기 fetch-비동기
// promise객체 = 데이터를 받지 못했지만 언젠간 받을거다
// promise객체의 3가지 상태 fullfiled,pending(요청에 대한 응답을 기다리고 있는 상태),rejected