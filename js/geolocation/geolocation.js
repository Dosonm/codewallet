// geolocation.getcurrentposition의 syntax // 사용자의 위치정보를 가져오는 객체와 함수 
//getCurrentPosition(success)  // success = 성공했을 때 실행시킬 함수(A callback function that takes a GeolocationPosition "object" as its sole input parameter.) 정보를 가져오는 매개변수는 객체이다.
// getCurrentPosition(success, error)
// getCurrentPosition(success, error, options)



// function getgeolocation(){
//     navigator.geolocation.getCurrentPosition((p) => {           //익명함수로 실행한거고 p는 걍 매게변수임 getcurrentposition속 실행하는 함수의 매게변수는 위치정보를 얻음
//         console.log(p);
//     })
// }


function getgeolocation(){
    navigator.geolocation.getCurrentPosition(a);
}
function a(p){
    console.log(p)
    console.log(p.coords);
    console.log(p.coords.latitude); // 객체니까 이런식으로 프로퍼티에 접근이 가능한거다
    console.log(typeof p) // typeof = 주어지는 데이터의 타입을 확인하는 자바스크립트의 기능
}
getgeolocation()

