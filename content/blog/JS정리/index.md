---
title: JS 정리
date: "2022-05-21T22:40:32.169Z"
description: "자바스크립트의 함수와 다른 언어와의 차이점은 함수를 데이터로 바라본다는 것이다. 다시 말해 자바스크립트에서 함수는 일급객체이다."
tag: Web
---

# 원시 값과 전역객체와 전역프로퍼티

## 전역객체

브라우저에서 자바스크립트의 전역객체는 window이다. 전역이라 여겨지는 객체와 함수는 window객체의 프로퍼티
자바스크립트의 객체는 프로퍼티를 갖는다.

## 전역프로퍼티

window의 프로퍼티 중 Infinity, NaN, undefined이 있는데
Infinity는 어떤 숫자보다 큰 값이고, NaN는 숫자가 아님을, undefined는 원시 값 undefined를 가진다.

### 메서드

window의 메서드를 전역함수라고 부른다. 다음과 같은 메서드들이 있다.

- eval() code를 문자열로 전달하면 그 코드를 실행하고 표현식을 전달하면 표현식을 출력한다.
- isFinite() 인자로 전달한 것이 유한하면 참 아니면 거짓을 리턴한다.
- isNaN() 인자로 전달한 것이 숫자면 거짓 아니면 참을 리턴한다.
- parseFloat() 문자열을 전달하면 부동소수점수로 바꿔서 반환한다.
- parseInt() 문자열을 전달하면 정수로 바꿔서 반환한다.
- encodeURI() / decodeURI() 문자열을 이스케이프처리 / 복원한다.
- encodeURIComponent() / decodeURIComponent() =?&도 이스케이프 처리/복원한다.

## 원시 값

원시값은 값이며 변수가 아니다. 불변데이터로 각자가 각자만의 의미를 가진다. 예를들어 32는 원시값으로
원시값 32는 32라는 의미를 갖는다.

```
var a = 32;
a += 1 // 여기서는 a라는 변수의 원시값이 33이 된 것으로
       // 32라는 원시값이 33이 된것이 아니다.
```

- 원시 값에는 아래와 같은 타입이 있다.
  - Boolean 타입
  - Null 타입
  - Undefined 타입
  - Number 타입
  - BigInt 타입
  - String 타입
  - Symbol 타입

# 호스트 객체와 네이티브객체

## 네이티브 객체

ECMAScript에서는 아래와 같은 네이티브 객체를 정의하고 있다.

- Object
- Number
- Math
- Date
- Array
- String
- RegExp

### 자바스크립트의 array의 특징

- array는 다른 언어의 배열과는 다르게 배열 요소들의 타입이 서로 달라도 무방하다.
- 그리고 배열 요소들이 메모리에서 연속적으로 이어져 있지 않다.
- 이는 일반적인 배열 자료구조와는 다르며 인덱스( 0, 1, 12 등)을 프로퍼티 이름으로 갖고 있는 객체라고 보는게 더 적절하다.

## 호스트 객체

네이티브 객체가 아니면 모두 호스트 객체이다.

- DOM : document, HTMLElement 등
- XMLHttpRequest
- location : 주소창 관련
- history : 히스토리 관련
- navigator 브라우저 상태나 관련 정보들
- screen : 화면 크기 등 화면 정보 제공

# 자바스크립트의 함수

## 다른언어와의 차이점

자바스크립트의 함수와 다른 언어와의 차이점은 함수를 데이터로 바라본다는 것이다.
다시 말해 자바스크립트에서 함수는 일급객체이다.

## Call-by-value / Call-by-reference

자바스크립트에서 원시값을 인자로 전달하면 Call-by-value(값을 복사해서 전달한다.)

객체를 인자로 전달하면 Call-by-reference(참조 값을 전달한다.)로 전달된다.

Call-by-reference로 전달 시 객체 자체를 변경할 수 있다는 점을 주의할 것

## 선언방법

1. function f(){}
2. var f = function(){}
3. new Function(arg1, arg2,arg3, ... , '함수몸체, 중괄호로 감싸는부분')

## 즉시실행함수

주로 라이브러리에서 충돌을 방지하고 글로벌 스코프를 깨끗하게 유지하는데 사용한다. 혹은 초기화 코드를 실행할때
단 한번만 실행되도록 하기 위해서 사용한다.

```
(function () {
  // ...
}());
//위와 같이 사용한다.
```

## this와 apply/call/bind

this는 호출대상을 의미한다. 매서드의 this는 해당 매서드를 가진 객체가 된다.

### 주의할점

- 내부함수에서는 그 함수를 실행하는 대상이 전역객체이기 때문에 전역객체가 this가 된다. 콜백함수 역시 마친가지다.

this를 변경하고 싶다면 apply, call, bind등의 함수를 사용한다.

- apply call
  함수의 기본 메서드로 첫번째 인자로 전달하는 객체를 해당 함수의 this로 하여 실행시킨다.
  - f.apply(bar, [인수 배열]) f.call(bar, 인수1, 인수2, 인수3...);
- bind
  var f1 = f.bind(a); this를 a로 바인드시킨 함수를 반환한다.

# 실행 컨텍스트와 스코프 그리고 클로저

실행컨텍스트는 일종의 코드실행환경으로 코드를 실행하는데 필요한 데이터(변수, 함수, 객체)를 담는다.

실행 컨텍스트가 생성되고 파괴되는 흐름은 다음과 같다.

1. 함수를 실행하면 새로운 실행 컨텍스트가 생성되고 이것이 실행 컨텍스트 스택에 쌓인다.
2. 현재 실행중인 코드는 스택의 제일 위에있는 실행 컨텍스트에서 정보를 찾게 된다.
3. 함수가 종료되면 스택에서 실행컨텍스트를 pop한다.

## 실행컨텍스트가 가지는 3가지 객체

1. Variable object : 현재 컨텍스트의 변수를 담은 activation object(AO)를 가리킨다.
2. Scope chain : 현재 AO, 스택 아래쪽의 실행컨텍스트의 AO, ... ,전역 컨텍스트의 GO를 가리키는 포인터리스트
3. this : 는 this

## 스코프

자바스크립트에서 찾고자 하는 것이 현재 스코프에 없다면 스코프체인의 다음 스코프에서 찾고 이를 반복한다.
함수마다 `[[Scopes]]` 프로퍼티가 있는데 내부에 선언된 함수라면 자신을 선언한 함수의 스코프도 볼 수 있다.
이를 이용해서 클로저를 구현한다.

?의문사항 실행컨텍스트의 스코프와 `[[scopes]]`가 다르다면 무엇이 우선으로 적용되는가? 아마 함수가 먼저일듯
?클로저의 내부구현은 어떨까?

### 랙시컬 스코프

함수를 기준으로 스코프를 판단한다. 실행하는 곳이 아니라 선언된 곳 기준이라는 것을 주의할 것

### 블록 스코프 (es5아님)

{}으로 감싸고 let 과 const를 사용한다면 블록스코프에서 찾는다.

## 클로저

내부함수가 외부함수의 스코프에 접근 할 수 있는 것을 이용
외부함수의 실행 컨텍스트가 이미 pop되었더라도 내부함수가 외부함수의 스코프의 데이터를 사용하게 하는 기법.
접근방법을 제한하는 효과를 얻는다.

### 클로저활용방법

1. 상태를 저장하고 갱신함 - 특정 상태값을 여러곳에서 접근가능하다면 관리가 힘들어지기 때문에 제한하는데 사용
2. private 모방

```
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  return innerFunc;
}
var f = outerFunc();
f();//x에 접근 할수 있고 10이 출력된다.
```

## 호이스팅

함수 호이스팅 변수 호이스팅 등 차별하여 생각하기보다는 실행되기 전에 미리 사용할 데이터(함수,변수)를 메모리에 할당시키게 되고
그렇기 때문에 코드에서 선언되기 전에 접근 할 수 있다고 생각하는게 쉽다.

다만 주의할 점은 함수 선언방법에 따라 호이스팅이 다르게 동작하는것처럼 보이는데, 함수표현식을 사용했다면
해당 라인이 실행되기 전이라 메모리에 공간은 만들어뒀지만 아직 변수에 함수를 저장되어 있지 않은 것으로 생각하면 된다.

# 객체와 프로토타입

모든 객체는 부모객체와 프로토타입으로 연결되어 있다. 모든 객체는 프로토타입으로 조상객체의 프로퍼티에 접근 할 수 있다.
이를 이용해서 자바스크립트에서 상속을 구현 할 수 있다.

자바스크립트에서는 객체를 new 연산자로 객체를 생성하거나
new Object();(혹은 {})로 빈객체를 만든 후 프로퍼티와 메소드 그리고 프로토타입을 추가하는 것을 통해 객체를 만들 수 있다.

```
var arr = [];
var obj = {};
obj.__proto__ = arr.__proto__
obj.length //이제 obj는 array 객체이다.
```

## 생성자

모든 함수는 생성자가 될 수 있다. 대신 new 연산자를 사용해야한다.
함수에서 this에 바인딩 한 변수는 생성된 객체의 프로퍼티가 된다.

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);
```

모든 프로토타입 객체는 constructor 프로퍼티를 갖는다. 그리고 constructor 프로퍼티는 자신을 생성한 생성자를 가리킨다. 다시 말해 자신을 생성한 함수를 가리킨다.

## **proto**, `[[prototype]]`, prototype 프로퍼티

1. **proto**는 `[[prototype]]`을 가리키는 포인터이다.
2. prototype 프로퍼티는 함수객체가 생성자로 사용 될 때, 그 생성자가 생성하는 객체의 프로토타입 객체를 가리킨다.

```
function a(){}
var aa = new a();
aa.__proto__ === a.prototype //true 이다.
```

## ES5 상속

```
__proto__를 통한 상속
function Circle() {}
const shape = {}
const circle = new Circle()

// Set the object prototype
// DEPRECATED. 예시용일 뿐입니다. 실제 코드에서는 이렇게 하지 마세요.
shape.__proto__ = circle
```

```
//ES5 상속
var Student = function(name) {
  Human.apply(this, [name]);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
//사람과 생성자가 같으면 안되니까 학생을 생성자로 넣어준다
Student.prototype.study = function () {
  console.log("hi");
};
var stu = new Student('kim');
```

# 브라우저의 랜더링 과정

1. html, css, javascript 등 파싱 대상이 되는 자원들은 브라우저의 파서가 파싱한다.
2. HTML를 파싱하여 DOM tree를 얻고 CSS를 파싱하여 스타일 규칙을 얻는다.
3. DOM tree의 노드와 그에 대응되는 각각의 스타일 정보를 합쳐 레이아웃 트리를 구성한다.
4. 레이아웃 트리 를 보고 페인트 트리를 구성한다.(z-order, 자식요소 등을 고려해 그려야할 순서를 판단)
5. 각 paint operation을 수행하면서 layer생성조건이 부합되면 새로운 layer를 만들어낸다.
6. 각 layer들은 레스터화(픽셀단위로 이미지화) 되어있고, 화면을 움직이면 브라우저는 그에 맞춰 레이어를 움직여가면서 새로운 화면을 그린다.
