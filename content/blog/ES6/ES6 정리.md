---
title: JS 정리
description: Web
---

# var, const, let
var는 선언한 함수의 내에서 유효하다. 함수 안에 함수가 있었다면 내부 함수에서는 자신을 선언된 함수의 var를 볼 수 있고 depth가 얼마다 되든지 이는 동일하다.

const와 let은 블록레벨 스코프가 적용된다. 그리고 var와 달리 선언과 초기화가 동시에 진행되지 않는다.
다시 말해 let이 있는 코드가 있다면 해당 코드가 실행되기 전에 변수를 해당 스코프에 등록하기는 하지만 초기화되지는 않아서
해당 코드가 실행되기전에 그 변수에 접근하려고 하면 초기화되지 않은 메모리를 참조하려고 했기 때문에 참조 에러가 발생한다.

const와 let의 차이는 재할당여부이다. const는 재할당이 불가능하다.
```
 const a = {};
```
에서 a에 다른 값을 할당 할 수 없다는 것이다. 다만 a의 파라미터는 변경이 가능하다.


# 템플릿 리터럴 
백틱으로 감싼 문자열 ${}안의 코드를 연산하고 문자열로 형변환 후 문자열에 포함되게 할수 있다.
```
let a = 1;
let b = 2;
const test  = `테스트 ${a+b}`
```
## Tagged templates
템플릿 리터럴을 함수로 파싱하는 방법 
```
var output = myTag`that ${ person } is a ${ age }`;
//이런식으로 사용한다.
function myTag(strings, ...exp){...} 
//첫번째 인자로 문자열 배열이 [that, is a ]
//다음번 인자로 표현식이 순차적으로 전달된다.  [person, age]

strings.raw[0] 원시문자열을 입력한대로 가져온다. 
```


# 함수의 인자
function sum(...args) 를 통해 함수로 전달된 인자들을 args라는 배열로 전달 받을 수 있다.

function sum() 이렇게 비워두고 함수내에서 arguments라는 유사배열로 전달 받을 수도 있다.




# Promise
promise는 비동기 함수들을 체이닝하여 순차적으로 처리하게 해주는 패턴으로 es6부터 표준내장객체로 제공하고 있다.
- promise는 3가지 상태(Fulfilled, Rejected, Pending)를 가지고, 초기 상태는 pending이다. promise는 생성 시 콜백으로 execute 함수를 받아서 생성자에서 내부적으로 실행한다.
- **execute**함수는 개발자가 구현한다. execute함수는 **resolve와 reject**라는 promise의 내부 매소드를 인자로 받는데, 각각 execute 작업의 성공과 실패를 처리한다.
- execute에서 작업이 성공하면 resolve에 성공 결과에 따른 값(param)을 인자로 넣어 실행해야한다. resolve는 체이닝된 다음 **then**에 인자로 전달 한 콜백함수를 그 param을 인자로 하여 실행하고, 이를 반복하여 비동기 처리에 순서를 보장한다.
- execute는 작업이 실패하면 reject에 실패에 따른 값(error)을 인자로 넣어 실행하고, reject는 다음 번 catch에 전달 된 콜백함수를 그 error를 인자로 하여 실행해서 에러를 처리한다.
- then과 catch는 promise객체를 반환하기 때문에 다음 .then()이나 .catch()를 이어서 실행 할 수 있고, 이를 반복한다.
- 이렇게 연결된 순서에 따라 비동기 처리가 차례로 이어지게 되는데, 이를 chaining이라고 한다.

```
var promise = new Promise(function (resolve, reject) {
  
  dosomething...
  
  if(err) reject(err);
  return param;
});

promise.then((param)=>{
    return console.log(param);
},(err)=>{
//뭔가 에러처리하는 코드 여기서 에러를 처리하면 다음 catch로 가지 않는다. 
    return 'next'
}).catch((e)=>{
  return console.error(e);
});
```
resolve를 promise에 전달된 콜백함수에서 사용하면 resolve(param)는 새로운 promise객체를 생성하며, 체이닝된 다음 .then(cb)의 cb를 실행하고 cb에 param을 넘겨준다.
체이닝 순서대로 처리하다 어느 곳에서든 에러가 발생했고, reject(err)를 따로 처리 하지 않았다면 체이닝 순서의 다음 .catch에서 err를 처리하게 한다.

## Promise.all
순회 가능한 프로미스들이 담긴 객체를 인자로 받아 객체에 담긴 프로미스들을 전부 실행시키고 전부 resolve되면 체이닝된 then을 실행시키고
하나라도 reject 되면 체이닝된 catch를 실행시키는 함수

## Promise.race
all 이랑 비슷하게 전부 실행시키고 처음 resolve된 것을 다음 then으로 전달하는 함수

# symbol
유일한 것이 필요할 때 사용하면 좋다 유일한 것을 만들어준다. 객체의 프로퍼티 키로 사용할 수 있다.
```
let mySymbol = Symbol();

console.log(mySymbol);        // Symbol()
console.log(typeof mySymbol); // symbol

const mySymbol = Symbol('mySymbol');
obj[mySymbol] = 123; // 객체의 프로퍼티 키로 사용할 수 있다.
```

# 이터레이터 
이터레이터는 순회하게 해주는 것으로 보통 iter.next()를 하면 다음 이터레이터를 반환한다. 이터레이터를 가진 객체를 이터러블이라고 한다.
* 주의 : 처음 사용하는 이터레이터는 iter.next()의 값이 처음값이다.

## for in? of?

of는 이터레이터를 for에서 순회할 수 있게 해준다.
```
for(const a of iterable)
//배열 등 이터레이터 프로퍼티를 가지는 무엇이든 사용가능
```
기본적으로 이터레이터가 없는 객체는 Symbol.iterator를 프로퍼티 키로하는 매소드를 생성해주면
of를 사용할 수 있다.(이터러블이 된다.)

for in은 객체의 모든 키를 순회한다.

## 이터러블이 이터레이터는 아니다.
for of 가 되면 이터러블이다. 다시말해 `[Symbol.iterator]` 매서드가 있다면 이터러블이다.

이터레이터는 .next() 매소드가 있으면 이터레이터이다.

`[Symbol.iterator]`도 있고 .next()도 있어야 이터러블이면서 이터레이터이다.

# 제네레이터
제네레이터는 함수의 코드블록의 일정 부분까지만 실행 시키는 이터러블이자 이터레이터로 .next()를 통해 
이전에 호출됬던 부분부터 다음 부분까지 코드를 실행시킨다.

function* 로 선언하고 하나 이상의 yield문을 포함한다. yield는 코드실행 단위를 구분하는 기준이되며
next를 실행하면 다음 yield까지 실행하고 정지되는 것을 반복한다.


제네레이터의 next에는 인자를 포함 할 수 있는데 이를 통해 객체에 데이터를 전달한다.
* 각 반복마다 다른 값을 전달 할 수 있다!

## webpack
entry, output, loader, plugin 4가지로 구성
loader는 js가 아닌것을 js가 이해할수 있게 변환시키는 녀석
웹팩이 자바스크립트로 동작하기 때문

plugin은 변환 결과를 바꾸거나 주입하는 등의 역할을 한다.