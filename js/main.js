//nav의 a를 누르면 해당테마로 바꾸기

$('nav a').click(function(e){
    e.preventDefault() //a의 새로고침 기능을 막음

    let txt = $(this).text();

    $('#wrap').removeClass().addClass(txt);

    $(this).addClass('on').siblings().removeClass('on');
});


//시계돌리기.....

//시간객체를 만들자! 

function clock(){

let now = new Date();
console.dir(now);

let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

//각각 span> hr, min, sec안에 출력시키기 
//각각의 숫자가 한자리숫자일 경우, 
//앞에 0 달기

if(hr < 10){
    hr = "0" + hr
}

if(min < 10){
    min = "0" + min
}

if(sec < 10){
    sec = "0" + sec
}

$('.hr').text(hr);
$('.min').text(min);
$('.sec').text(sec);







}//func.clock

clock();
setInterval(clock,500) //0.5초마다 clock 함수 실행 



let now = new Date();
let hr = now.getHours();

if(hr>=5 && hr<=10){

    $('#wrap').addClass('morning');
    $('nav a').eq(0).addClass('on').siblings().removeClass('on');

}else if(hr>=11 && hr<=16){

    $('#wrap').addClass('afternoon');
    $('nav a').eq(1).addClass('on').siblings().removeClass('on');

}else if(hr>=17 && hr<=20){

    $('#wrap').addClass('evening');
    $('nav a').eq(2).addClass('on').siblings().removeClass('on');

}else{

    $('#wrap').addClass('night');
    $('nav a').eq(3).addClass('on').siblings().removeClass('on');

}