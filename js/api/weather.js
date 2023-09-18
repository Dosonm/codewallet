function weatherSearch(posi){
    console.log(posi.coords.latitude)
    const openweatherRes = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${posi.coords.latitude}&lon=${posi.coords.longitude}&appid=eb5730266831938537a91a2f95d01c5a`)
    console.log(openweatherRes)
}

function getlocation(){
    navigator.geolocation.getCurrentPosition((p) => {
        console.log(p.coords.latitude);
        console.log(p.coords.longitude);

        weatherSearch(p);
    })

}
// getlocation();

//매개변수(파라미터)는 외부에서 데이터(정보)를 "받아오는 역할"이라고 생각하면 편하다
// promise 객체는 비동기 작업이 맞이할 미래의 안료 또는 실패와 그결과 값을 나타낸다.
// const promisetest = function(){
//     return new Promise((res,rej) => {            //res, rej는 매개변수 res는 성공 했을 때 실행할 함수 rej는 실패 했을 때 실행할 함수
//         setTimeout(() => {
//             res(100);
//         },2000);
//     })
// }
// promisetest().then((res1) => {
//     console.log(res1);
// })

const promisetest = function(){
        return new Promise((res,rej) => {
            res(100);
        })
    }
console.log(promisetest())
