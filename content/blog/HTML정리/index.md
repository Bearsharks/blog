---
title: HTML 정리
date: "2022-05-22T22:40:32.169Z"
description: "시멘틱 태그는 태그의 내용에 의미를 부여하는 태그로 컨텐츠의 내용이 무엇인지를 설명한다. 검색엔진은 이를 바탕으로 웹페이지를 파악하고 시멘틱태그를 통해 각 컨텐츠의 의미를 파악한다."
tag: Web
---

# head 태그

브라우저에 표시되지 않는 사항이 주로 head 태그에 포함된다. 주로 메타데이터와 각종 링크들이 담긴다.

```
<head>
  <meta charset="UTF-8">
  <meta name="description" content="오늘의 경제 신문입니다.">
  <meta name="keywords" content="주식, 암호화폐, 경제, 투자">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="index.css">
  <title>Document</title>
</head>
```

## meta 태그

문서의 메타정보가 담는다.

```
<meta http-equiv="" name="" content="" charset=""/>
```

메타태그는 4가지 attr를 가진다.

1. charset은 문자의 인코딩을 지정한다.
2. http-equiv은 HTTP 응답 헤더를 시뮬레이션하는데 사용한다.
3. name은 author description generator keywords viewport Robot 등을 속성으로 가질 수 있다.  
   charset도 아니고 http-equiv도 아니지만 meta에 포함되어야 하는 것들이 모여있다.
4. content 에서 http-equiv name에서 지정한 속성에 관련된 내용을 입력하게된다.

# 시멘틱 태그

태그의 내용에 의미를 부여하는 태그 컨텐츠의 내용이 무엇인지를 설명한다.
검색엔진은 이를 바탕으로 웹페이지를 파악하고 시멘틱태그를 통해 각 컨텐츠의 의미를 파악한다.

## 시멘틱 태그의 종류

- header : 헤더
- nav : 네비게이션
- aisde : 사이드에 위치하는 공간
- section : 본문의 여러 내용을 포함하는 공간
- article : 본문의 주 내용이 들어가는 공간
- footer : 푸터
- strong : 중요한것 볼드로 표시
- em : 중요한것 기울임으로 표시
  ![img_2.png](./img_2.png)

# 하이퍼링크

웹문서에서 동영상 음악 사진 글 등의 자원의 특정위치를 지정하고 그 자원의 위치로 이동시켜주는 링크를 하이퍼링크라고 한다.

주로 a태그를 사용한다.

## a 태그

```
<a href="http://www.google.com" target="_blank" rel="noopener noreferrer">Visit google.com!</a>
```

## href attr

| Value               | Description                         |
| ------------------- | ----------------------------------- |
| 절대 URL            | http://www.example.com/default.html |
| 상대 URL            | html/default.html                   |
| fragment identifier | #top                                |
| 메일                | mailto:example@mail.com             |
| script              | javascript:alert(‘Hello’);          |

# 테이블

## 테이블을 구성하는 태그 목록

| tag   | Description                       |
| ----- | --------------------------------- |
| table | 표를 감싸는 태그                  |
| tr    | 표 내부의 행 (table row)          |
| th    | 행 내부의 제목 셀 (table heading) |
| td    | 행 내부의 일반 셀 (table data)    |

## attr

th td는(셀은) 점유하는 행수 열수인 rowspan과 colspan을 attr로 갖는다. 지정하는 수만큼 셀이 점유하는 크기가 늘어난다.

```
예)
  <table>
    <tr>
      <th>이름</th>
      <th colspan="2">주소</th>
    </tr>
    <tr>
      <td>홍길동</td>
      <td>서울시 관악구</td>
      <td>OO시 OO구/td>
    </tr>
  </table>
```

# 멀티미디어 태그

## img 태그

```
<img src="assets/images/abc.jpg" alt="abc width="100">
```

alt는 그림을 가져올수 없을때 표시되는 텍스트

## audio

```
<audio src="assets/audio/abc.mp3" controls preload autoplay loop></audio>
preload는 재생전 전부 불러올지 여부를 결정한다.
<audio controls>
  <source src="assets/audio/abc.mp3" type="audio/mpeg">
  <source src="assets/audio/abc.ogg" type="audio/ogg">
</audio>
여러가지 소스를 제공할 수도 있다.
```

## video

```
<video width="640" height="360" poster height>
  <source src="assets/video/wildlife.mp4" type="video/mp4">
  <source src="assets/video/wildlife.webm" type="video/webm">
</video>
audio태그와 attr가 비슷하다. poster attr는 준비중 표시할 이미지, height로 높이 지정가능
```

# form

서버로 데이터를 보낼때 주로사용하는 태그

```
<form action="url" method="get이나 post">
  아이디: <input type="text" name="id" value="abcabc"><br>
  비밀번호: <input type="password" name="password" value="test123"><br>
  <input type="submit" value="Submit">
</form>
```

## input

타입의 종류는
checkbox color, date, email, file, hidden, month, number, password, radio, range, submit, text 등이 있다.

## select textarea button

```
<select name="cars1">
  <option value="volvo" selected>Volvo</option>
  <option value="saab" disabled>Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<textarea name="message" rows="10" cols="30">Write something here</textarea>
<button type="button" onclick="">Click Me!</button>
```

## fieldset legend

연관있는 입력값 끼리 묶어줄때 fieldset을 사용하고 legend는 그 그룹의 이름을 정의한다.

```
<fieldset>
  <legend>Login</legend>
  Username <input type="text" name="username">
  Password <input type="text" name="password">
</fieldset>
```
