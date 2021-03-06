---
title: css정리
date: "2022-05-23T22:40:32.169Z"
description: "float를 지정하면 해당 요소는 부모 요소가 높이를 파악하지 않는다. float가 적용된 자식요소의 높이가 높다면 부모요소 밖으로 표시되어 다른 요소들을 가려버리는 문제가 발생한다. 그렇기 때문에 clear속성을 이용한다."
tag: Web
---

# html에 css 연동방법

## link

```
<link rel="stylesheet" href="css/style.css">
```

## embed

```
<style>
      h1 { color: red; }
      p  { background: aqua; }
</style>
```

## inline

`<h1 style="color: red">Hello World</h1>`
embed나 inline을 이용하는 것보다 링크방식을 사용해서 마크업과 스타일을 분리하는 것을 추천

# 선택자

- 여러개 선택 : ,
- 바로뒤형제 : +
- 바로뒤형제들 : ~
- 속성으로선택 : 선택자[attr+=""] / 선택자[attr*=""] / 선택자[attr=""]
- 선택된 것 중 처음, 마지막 그리고 중간 : first-child last-child nth-child(n)
- 선택된 것 중 같은 형제들 중 맨 처음에 등장하는 것 맨 나중에 등장하는 것 : first-of-type last-of-type
- n을 1부터 1씩 늘려갈 때 수식의 값과 같은 것 : nth-of-type(An+B)
- 형제들 중 유일한 것 : only-of-type
- 빈 요소 선택 : empty

# Units

## 크기

1. px : 화소 크기 주로 절대 단위
2. em : 기본 값의 몇 배인지 상대적인 크기 상속된 값이 10px인데 font-size:2em이면 두 배의 크기가 된다.
3. rem : 루트 대비 몇배인지
4. % : 상속된 크기의 상대적인 크기
5. vw vh vmax vmin : 뷰포트기준 몇퍼센트인지 min max는 너비 높이 중 큰것 작은 것 기준 비율

## 색상

| 단위                                            | 사용예                 |
| ----------------------------------------------- | ---------------------- |
| Colors                                          | red                    |
| HEX 코드 단위 (Hexadecimal Colors)              | #000000                |
| RGB (Red, Green, Blue)                          | rgb(255, 255, 0)       |
| RGBA (Red, Green, Blue, Alpha/투명도)           | rgba(255, 255, 0, 1)   |
| HSL (Hue/색상, Saturation/채도, Lightness/명도) | hsl(0, 100%, 25%)      |
| HSLA (Hue, Saturation, Lightness, Alpha)        | hsla(60, 100%, 50%, 1) |

# Display

1. block

2. inline
   크기지정 불가 개행되지 않음 상, 하 여백은 line-height로 조절함

3. inline-block
   크기조절되는 inline 요소

# Font & Text 관련

- letter-spacing : 자간
- text-decoration : 밑줄 등과 같은 꾸밈요소
- white-space : 줄바꿈, 공백, 들여쓰기 같은 공백요소에 대한 스타일

| 값       | 개행(엔터) | 공백반영 | 자동줄바꿈 |
| -------- | ---------- | -------- | ---------- |
| normal   | 무시       | 1번만    | O          |
| nowrap   | 무시       | 1번만    | X          |
| pre      | 반영       | 그대로   | X          |
| pre-wrap | 반영       | 그대로   | O          |
| pre-line | 반영       | 1번만    | O          |

- word-break

```
단어를 고려하여 강제개행
.word-wrap  { word-wrap: break-word; }

단어를 고려하지 않고 강제개행
.word-break { word-break: break-all; }
```

# 인라인 요소의 세로 가운데 정렬방법

1. block인 박스에 line-height로 inline 요소들의 세로 가운데 정렬을 할 수 있다. 행높이와 동일하게 지정한다.  
   2줄이상인경우 부모요소 바깥쪽으로 넘어가게 되니 한 줄일 때만 사용하는게 좋다.
2. vertical-align: middle;을 사용한다. 다만 inline요소들만 적용된다.
3. 그냥 flex를 사용한다.

# 말줄임 적용하기 예제

```
.truncate {
  width: 150px;             /* width가 지정되어 있어야 한다. */
  white-space: nowrap;      /* 자동 줄바꿈을 방지 */
  overflow: hidden;         /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */
  text-overflow: ellipsis;  /* ellipsis or clip */
}
```

# float속성과 clear

float를 지정하면 해당 요소는 부모 요소가 높이를 파악하지 않는다. float가 적용된 자식요소의 높이가 높다면 부모요소 밖으로 표시되어 다른 요소들을 가려버리는 문제가 발생한다. 그렇기 때문에 clear속성을 이용한다.  
float적용된 요소의 형제요소에 clear:both;를 적용하면 모든 float요소보다 아래까지 내려서 표시되고 결국 부모 요소는 모든 자식 요소를 모두 감싼 형태로 표시된다. 형제 요소가 없다면 :after 가상 요소를 활용하는 방법도 있다.

# CSS의 적용순서

- 적용 방식 별 우선순위 !important > style attribute > 나머지
- 선택자 별 우선순위 id > class/attr/가상선택자 > tag > \* > 나머지
- 동일한 경우 나중에 선언된 것이 우선

# 서버 폰트 로딩

로컬에 폰트가 없더라도 url로 지정된 폰트를 다운받아 사용 할 수 있는 방법

```
@font-face {
  font-family:"Nanum Gothic";
  src:url("NanumGothic.eot"); /* IE 9 호환성 보기 모드 대응 */
  src:local("☺"),             /* local font 사용 방지. 생략 가능 */
      url("NanumGothic.eot?#iefix") format('embedded-opentype'), /* IE 6~8 */
      url("NanumGothic.woff") format('woff'); /* 표준 브라우저 */
}

* { font-family: "Nanum Gothic", sans-serif; }
```

# 미디어쿼리와 반응형디자인

미디어 쿼리는 스크린이나 미디어의 종류에 따라 서로 다른 스타일을 지정하게 해준다.  
화면크키를 작은 곳부터 정의하고 화면이 클때의 스타일을 하나씩 정해가는 방법
큰 곳부터 정의하고 작을 때의 스타일을 하나씩 지정하는 방법이 있다.

```
@media not|only mediatype and (expressions) {
  CSS-Code;
}
@media only screen and (min-width : 1200px) {

}
@media only screen and (max-width : 1200px) {

}
@media screen and (max-width: 800px) {
    * { color: blue; }
}
```

# Flexbox

- align-content : 여러줄 정렬 방식
- justify-content : 가로정렬
- align-items: normal : 세로정렬

## flex-basis flex-grow flex-shrink

- flex-basis는 아이템들의 기본크기
- flex-grow는 지정한 비율만큼 부모를 꽉 채운다.
- flex-shrink는 0일 때 basis크기보다 줄어들지 않음을 의미한다.  
  기본 값은 flex-basis : auto; flex-grow:0; flex-shrink: 1;

# 사용자 지정 CSS 속성

```
element {
--main-bg-color: brown;
} 지정

element {
  background-color: var(--main-bg-color);
} 사용
```

# Grid

css 레이아웃 방법
정사각형으로 구성된 가상의 표에 아이템들을 배치하는 느낌으로 레이아웃을 구성 할 수 있다.

## grid 컨테이너

```
.container {
    display: grid;
    /* fr은 fraction 비율에 맞게 분할한다.*/
    /* 영역크기에 지정된 갯수만큼 행이나 열을 생성한다.*/
    grid-template-columns: 1fr 200px 2fr auto;
    /* 4개로 분할된 행을 생성한다. 최소 100, 최대는 자동으로 설정하여 크키에 맞게 조절된다. */
    grid-template-rows: repeat(4, minmax(100px, auto));
    /* auto-fill : 최대로 채울 수 있을만큼 채운다. auto-fit : 부족하면 늘려서 꽉채운다.*/
    /*grid-auto-rows: repeat(auto-fill, minmax(100px, auto)); 갯수를 처음부터 알지 못하면 template 대신 auto를 사용한다.*/
    gap: 10px 20px; /* 행 열순 */

    /*자동 채우기 row 행기준으로 더 못들어가면 다음 행에 추가, column, dence 채우다 남은자리에 들어갈 수 잇는 녀석들을 채움 */
    grid-auto-flow: dense;
    & > div{
          { grid-column: auto / span 3; } /* 3열짜리 크기의 아이템 grid auto flow에서 지정한대로 자동으로 위치 지정 */
    }

    /* 한 셀에 대해서*/
    /*열 정렬방식지정  stretch, start, end, center */
    align-items: stretch;
    /*행 정렬방식지정  stretch, start, end, center */
    justify-items: stretch;

    /* 전체 표에 대해서*/
    /*세로 정렬방식지정  stretch, start, center, end, space-between, space-around, space-evenly*/
    justify-content: stretch
    /*가로 정렬방식지정  stretch, start, center, end, space-between, space-around, space-evenly*/
    justify-content: stretch
}
```

## grid 아이템

```
.item {
    grid-column: 1 / span 2; /* 숫자는 라인넘버를 의미하고 1번라인부터 1 +2번 라인까지 채우라는 의미 1번이 첫번째 라인이다. 1/3으로 써도 된다.*/
    grid-row: 1 / 2;
    /*현재 아이템을 포함하는 셀에 대한 아이템의 정렬방식*/
    align-self: stretch;
    justify-self: stretch;
}
```
