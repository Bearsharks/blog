---
title: "Test"
date: "2020-07-29"
description: "This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter."
tag: "Etc"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "./test.png"
---

## 1. [최초 콘텐츠 페인트시간FCP](https://web.dev/fcp/) 가중치 10%

처음에 콘텐츠가 표시되는 시간

## 2. [속도 지수](https://web.dev/speed-index/) 가중치 10%

시각적으로 표시되는 속도
주로 스크립트를 통해서 dom을 조작하거나 데이터를 받아오면서 화면을 순차적으로 표시하게 되는데 그 속도를 말함

## 3. [가장 큰 콘텐츠가 포함된 페인트(Largest Contentful Paint)](https://web.dev/i18n/ko/lcp/) 가중치 25%

이미지 비디오 배경이미지가 있는 요소 아니면 그냥 블록요소 중
뷰포트 내에서 보여지는 영역이 가장 큰 요소가 언제 랜더링되는지를 말합니다.

## 4. [상호 작용까지의 시간](https://web.dev/i18n/ko/interactive/) 가중치 10%

페이지가 완전히 상호작용 가능할때까지의 시간

5초간 긴작업(50ms 이상의 작업)이 없다면 안정적 상호작용이 가능하다고 본다.

## 5. [총 차단 시간](https://web.dev/i18n/ko/tbt/) 가중치 30%

사용자 입력으로 부터 페이지가 응답하지 않도록 차단된 시간, 다시 말하면 렉걸린 시간
여러 긴 작업(50ms 이상)이 있다면, 각 작업의 총 수행시간에서 50ms를 뺀 것을 모두 더한 값

## 6. [누적 레이아웃 이동](https://web.dev/i18n/ko/cls/) 가중치 15%

갑작스러운 화면변화는 사용자의 예측을 빗나가게 하기때문에 사용자경험을 저해합니다.\
예를들면 로그인 버튼을 눌렀는데 그 사이에 광고가 갑자기 켜지면서 광고버튼을 클릭해서 다른페이지로 이동해버린다면 굉장히 불쾌할 것

## PRPL패턴, 선택과 집중

1. preload - 미리 로드

```
<link rel="preload" as="style" href="css/style.css">
```

2. Render 초기화면을 가능한 빨리 랜더링 할 것

```
HTML에 직접 인라인으로 적용하는 방법도 고려 할 수 있다.
<script> ...중요한 스크립트 </script>
<style> ...중요한 css </style>
```

![첫페이지](./%EC%B2%AB%ED%8E%98%EC%9D%B4%EC%A7%80.webp)

3. Pre-Cache미리 캐시함\
   서비스 워커를 사용하여 자주 쓰거나 곧 쓸 자원들을 캐시를 통해 미리 가져오기.

4. Lazy load 혹은 나머지는 지연로드\
   용호님...

#### [Cache Storage API + Service Workers](https://developer.chrome.com/docs/workbox/)

![서비스워커](./%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%9B%8C%EC%BB%A4.webp)

1. 스크립트로 서비스워커를 실행
2. fetch 요청!
3. 서비스워커에서 가로채서 캐시작업 수행한다. 있으면 주고 없으면 받아서 주고

workbox라는 서비스워커 라이브러리가 가장 유명하다고 한다.
