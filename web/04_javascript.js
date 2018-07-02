// 자바스크립트 한줄 주석
/* 여러줄 주석
*

// script 패키지 설치하면 아톰 내에서 코드 실행 해볼 수 있다. command i 로 실행 할 수 있다.

console.log("data");

// 식별자
// 상수 : SNAKE_CASE (대문자 스네이크 케이스)
// js 자유도가 높아서 수업에서는 보편적인 것을 알려주지만 회사 컨벤션마다 다르다.
// 변수명 : camelCase(카멜케이스)
// 모듈 : PascalCase (파스칼 케이스)
// 파이썬의 식별자 특수기호 : _
// 자바스크립트는 : $, _
// _name : private variable, function
// $target : selector를 변수로 사용할 때, 특정 엘리먼트를 셀렉트 하고 있는 변수임을 알려준다.

var $target = 1; //jquery : js framework 에서 많이 사용한다.
console.log($target);

// 변수 선언시 var 변수명 = "";
var name = "doojin";
console.log(name);

var a = 1;
var b = 2;
console.log(a+b, typeof a);

// 연산자
// +, -, *, /, %, ++, --
var number = 5;
var result = ++number; //앞에 쓰면 증가를 시킨 후 대입을 시킨다.
console.log(result);

// ++ 1을 증가, -- 1을 감소

var number = 5;
var result = number++; // 뒤에 쓰면 대입을 하고 증가를 시킨다.
console.log(result); // ++ for 문에서 많이 사용한다.

// 데이터 타입
var a = 1;    //number
var b = 1.9; //number
var c = "data"; //string
var d = [1,2,3]; //object
var e = {a:1, b:2}; //object
var f = true;    //boolean
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

// null, undefined, NaN 이라는 데이터 타입이 조금 헷갈린다.
// null : 값이 없음을 지정
// undefined : 값이 지정되지 않음
// NaN : 존재하지 않는 데이터의 형태

var a = null;
console.log(a); // null

// var a = 1
// var a = null 로 주는 순간
// 메모리 주소를 저장하고 있는 a에 주소값 삭제하고 null입력, 주소에 1 담고 있는 것은 gc가 삭제해준다.
// garbage collector가 참조하지 않은 애를 찾아서 메모리를 삭제하면서 리소스 효율성을 높여준다.
// GC라고 많이 부른다.

// ECMA 4, 5, 6(2015) 까지 유명한데 6부터 클래스가 생겼다.

var b;
console.log(b); // undefined

var c = 0/0;
console.log(c); // NaN

// 비교 연산자
// >, <, <=, >=, !=, !==, ==, ===
// === 무조건 3개를 사용해야 한다.

// == 는 데이터 값만 비교
console.log(1 == 1);
console.log(1 == "1"); // 문자열로 바꾼 후에 실행하면 true

// === 은 데이터 값과 데이터 타입을 모두 비교
console.log(1 === 1); //true
console.log(1 === "1"); //false

// NaN
// 비교연산을 사용하지 않습니다.
// 비교연산에서 NaN이 한번이라도 언급되면 무조건 false를 리턴합니다.
console.log(NaN == NaN); // convention에 밑줄 에러 뜨고 무조건 false가 리턴된다.

// 할당연산자
// +=, -=, *=, %= ...
var a = 1;
a += 2;
console.log(a);

// 논리 연산자
// &&(and), ||(or)
console.log(true && false); // false
console.log(true || false); // true

// 조건문
if(false){
    console.log("hello");
}else{
    console.log("world");
}

if(false){
    console.log("hello");
}else if(true){
    console.log("dss");
}else{
    console.log("world");
}

// false로 간주되는 데이터
// null, undefined, NaN, 0, ""

// true로 간주되는 데이터
// [], {}

// 문제, 점수를 입력하면 학점이 출력되는 코드를 작성.

var point = 88;

// TODO: if, else if, else 사용해서 결과가

if(point>=90){
    console.log("A");
}else if (point>=80) {
    console.log("B");
}else if (point>=65) {
    console.log("C");
}else if (point>=50) {
    console.log("D");
}else {
    console.log("F");
}
// 반복문
// while, for, do while
var a = 10;
while(true){
    a ++;
    if(a === 12){
        continue;
    }
    if(a > 15){
        break;
    }
    console.log(a);
}


// for 문 파이썬이랑 개념이 조금 다르다. for i in 리스트 데이터:
// for (for문에서 사용될 변수의 초기값; 조건; 변수값 변경)
for(var i=0; i<3; i++){
    console.log(i);
}

// 배열
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr[2]);
console.log(arr.length);

// 배열 추가
arr.push('f'); // python - append
console.log(arr);
// 배열 앞에 추가하기
arr.unshift('z');
console.log(arr);

// 배열 맨 뒤에 요소 뽑아서 삭제하기
var result = arr.pop();
console.log(arr, result);

// 배열 자르기
var result = arr.splice(2,1); // 2번에서 1개 자르기
console.log(arr, result);

var result = arr.splice(2,2); // 2번에서 1개 자르기
console.log(arr, result);

// 객체 - object

var user = {

    name : 'doojin',
    age : 45,
    addr : 'seoul',
    skill : function(){
        console.log('coding');
    }
};

// 실제 모듈이 있으면 모듈을 실행하고 모듈이 없으면 이렇게 만들어서 실행한다.
var Module = Module || {}; // 기존 모듈이랑 충돌 방지하기 위해서 Module

(function(_Module){

    var _name = "doojin";

    _Module.getName = function(){
        return _name;
    };

    _Module.setName = function(name){
        _name = name;
    };

})(Module); //실행과 동시에 바로

console.log(Module.getName());

// oop, 캡슐화 추상화를 이렇게 구현한다. getter setter 사용하면 어떻게 oop 개념이 적용 되는지
// 여러명이 효율적으로 코딩 할 수 있도록 도와준다. 건드리지 않아도 되는 것을 숨겨준다.

// 객체 만드는 방법 (모듈 패턴, 팩토리 패턴) 모듈을 더 많이 사용

// 함수
// function 함수이름(arguments){}

// 함수 선언 방법 1
function sum(num1, num2){
    return num1 + num2;
}

var result = sum(1, 2);
console.log(result);

// 함수 선언 방법 2
var minus = function(num1, num2){
    return num1 - num2;
};

// 호이스팅 - hoisting 변수 선언시 최상단으로 올라가는 특징이 있다. 코드 실행 시 두 방법이 다르게 나타난다.

// 스코프

var a = "dss1";
function disp() {
    a = "dss2"; // var 붙이지 않으면 글로벌 영역 변수로 선언 되게 된다.
    console.log(a);
}
console.log(a);


var a = "dss1";
function disp() {
    a = "dss2"; // var 붙이지 않으면 글로벌 영역 변수로 선언 되게 된다.
    console.log(a);
}

disp();
console.log(a);

// 즉시 실행 함수, 익명함수
// 자바스크립트는 프론트엔드 언어입니다.
// 프론트엔드 언어는 코드가 다 노출 된다.
// 브라우져에서 함수를 마음대로 가져다가 쓸 수 있다.
// 이를 방지 하기 위해 즉시 실행함수나 익명 함수를 사용한다.
// js는 ''를 이용해주세요 ""(사용하지마) 이유는 js html과 함께 사용하기 때문에 ''사용해야 에러를 줄일 수 있다.
// 어떻게 다른지 보자

(function(){
    var name = 'doojin';
    var disp = function(){
        console.log(name);
    };
    disp();
})();

// scope가 전역이 아니기 때문에 함수 밖에서 사용하지 못한다.

(function () {

}());

// callback

// 콜백 함수 - 함수의 아규먼트로 함수를 받아서 모든 코드를 실행한 후에 아규먼트로 받은 함수를 실행
function getData(callback, num1, num2){
    var result = num1 + num2;
    callback(result);   // 코드가 끝나고 특정 함수를 실행 한다.
}

function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

getData(disp, 2, 3);
getData(sqrt, 2, 3);

// 추가 학습 : 클로져(팩토리 패턴으로 객체 생성 가능), 프로토타, es6 문법
