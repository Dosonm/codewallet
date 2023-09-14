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
getlocation();

//매개변수(파라미터)는 외부에서 데이터(정보)를 "받아오는 역할"이라고 생각하면 편하다