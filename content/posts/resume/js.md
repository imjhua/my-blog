---
date: 2022-08-11
title: JS
slug: /resume/js
tags: [resume]
---

## JS
## 이벤트루프

Javascript는 싱글스레드로 동작한다. 메인 스레드, 하나의 스레드로 구성되어 있기 때문인데 이벤트루프를 통해 동시성을 제공할 수 있다.

이벤트동작이 반복되는 구조에 기반하여 코드 실행이 이루어진다.

- Heap: 변수, 함수 메모리관리
- CallStack: 변수와 함수들이 실행됨 (콜스택이 바쁘지 않도록 해야함)
- WebAPI: setTimeout / Ajax / Event / RequestAnimationFrame / Promise
- TaskQueue: 선입선출. 완료된 비동기 테스크가 하나씩 콜스택으로 들어감

참고) 부드러운 애니메이션은 초당 60frame -> 1프레임당 16ms

## 클로저

- 함수자신이 포함한 스코프의 변수들을 추적하는 함수로
- 함수밖에서 선언된 변수들을 함수내에서 사용가능하다.
- 원래는 함수실행이 종료되면 메모리에서 소멸되는데, 클로저는 환경을 기억하고 있다.
- 외부함수의 변수뿐만아닌 매개변수도 복사가 아닌 참조를 하고 있기 때문에 변경가능하다.
- private변수, 정보은닉

## 실행컨텍스트

- 코드가 실행되기 위해 필요한 정보들을 가진 환경으로 (코드실행을 위한 환경)
- 이를 추상화하기 위해 객체형태로 표현됨.
- 자바스크립트 코드가 실행되고 연산되는 범위를 나타내는 개념
- 즉, 코드는 실행컨텍스트 내부에서 실행되는 것이다.
- 필요한 정보들: 변수 / 함수선언 / 변수유효범위(스코프) / this
- 4가지 타입: 전역실행컨텍스트 / 함수실행컨텍스트 / Eval / ES6부터 블록문

## this

일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적!으로 결정된다.

- 객체의 메소드 호출
- 함수호출
- 생성자 함수
- apply[] / all / bind

참고) 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다.

## arrow function

- 항상 익명 / this 바인딩 하지 않음 / 스코프 지정 불가
- 생성자로 사용 불가 / 제너레이터 함수 사용 불가 / 상위스코프를 this로 가짐

## lexical Env

- EnvRecord: 함수와 변수 저장(let, const)
- OuterEnv: 외부환경에 대한 참조
- this binding: this 결정. 함수가 호출되는 방식에 따라 결정됨.

## variable Env

- var 저장 담당

## 호이스팅

- 변수 선언문을 유효범위의 최상단으로 끌어올린다.
- 코드 실행시 자바스크립트 엔진이 선언된 변수, 함수를 유효범위 최상단으로 끌어 올림.
- 따라서 하단에 선언된 변수와 함수 실행가능. var의 경우 선언만 해도 초기화가 동시에 이루어지므로 undefined 값을 가짐 / let은 reference 에러
- var의 경우, 변수명 중복이 가능하고, 호이스팅에 의해서 전역과 지역의 범위가 햇갈리게된다.
- 새로운 변수선언 방법 등작.
- 함수표현식 x=function(){} / 함수선언식 function x(){} - 호이스팅 대상
- 화살표 함수 호이스팅 불가

참고) 변수와 함수가 동시에 호이스팅된다면? 변수선언 / 함수선언 / 변수할당 순서로 동작함

## var / let / const

스코프와 재할당에 차이가 있다. var는 전역스코프이면서 재할당이 가능하지만 let은 블록스코프이고, const 는 재할당이 불가능하다.

- var: 전역 스코프. 선언과 동시에 초기화가 이루어짐.
- let: 블록 스코프. 선언과 초기화 독립적으로 이루어짐. (초기화시 할당되어 있지 않으면 에러)
- const: 블록 스코프. 선언과 초기화 독립적으로 이루어짐.

호이스팅관점에서도 다르게 동작.

참고) 변수생성 3단계: 선언(호이스팅 대상) / 초기화 / 할당

## 함수형프로그래밍

- 큰문제는 작은문제로 나누어 풀수 있는데
- 모듈내부 응집도를 높이고 / 모듈간 결합도를 낮추어 독립성 유지
- 모듈을 조합하여 복잡성을 단순화하여 오류를 줄인다.
- 외부상태 변경에 의한 부수효과를 없애고, 순수함수를 만들어 모듈화 수준을 높인다.
- 함수의 합성으로 확장한다.
- 조건은? 함수가 일급객체(매개변수, 반환값이 됨) / 클로저 지원
- 이때 순수함수란 항상 같은조건(동일인자)에는 같은 값을 리턴하는 함수. 외부영향을 받으면 안된다.

참고) 모나드: 더이상 나누어지지 않을 때까지 쪼갠다.

## 동적언어와 정정언어

- 동적언어: 자료형을 런타임(실행)시 결정한다. 타입없이 변수를 선언한다. 유연하지만 느리다.
- 정적언어: 자료형을 컴파일시 결정한다.

참고) 동적은 예상치 못한 타입이 들어오면 에러가 발생 / 정적은 협업 또는 유지보수에 좋다.

## script

- 기본: html파싱을 중단 / 스크립트요청 / 실행 / 파싱 재개
- async: 병렬요청. 가능시 실행
- defer: 병렬요청. 페이지 파싱 후 실행.

## 제너레이터

- 여러개의 값을 필요에 따라 하나씩 반환한다. (yield)
- 이터러블 객체와 함께 데이터 스트림을 만들 수 있다.

참고) 일반함수와 다른점은? 코드실행이 되는 것이 아닌 실행을 처리하는 제너레이터 객체를 반환

## 이벤트 전파와 위임

- 이벤트 전파: 이벤트는 위에서부터 아래로 그리고 또 상위로 전파된다. (캡쳐링 / 타겟 /버블링)
- 이벤트 위임: 비슷한 방식으로 여러 요소를 다루어야 할때 사용한다. 이를 사용하면 요소마다 핸들러를 할당하지 않고, 상위노드에서 하위노드의 이벤트를 제어할 수 있다.

참고) React의 경우 rootDiv에서 이벤트를 처리하므로, 위임을 통한 성능상 이익이 없음.

## CSR & SSR

- SSR: 초기 로딩속도 빠름 / 뷰 변경시마다 서버 요청 / SEO 지원
- CSR: 초기 로딩속도 느림 / 변경시마다 빠름 / SEO 미지원

## TTV & TTI

- TTV(time to view): 브라우저가 내용을 볼 수 있는 시점
- TTI(time to interaction): 인터렉션 시점

## 패이지 속도 측정

- TTFB(Time to First Byte): 웹 사이트를 호출하면 웹 서버에서 수신한 첫 번째 바이트가 도착하는 시간
- FCP(First Contentful Paint): 콘텐츠(HTML 코드, 스타일, 이미지 등)가 표시될 때까지의 시간
- FMP(First Meaningful Paint): 사용자에게 의미 있는 콘텐츠가 그려지기 까지의 시간

## 웹접근성

- 저시력자, 고령자들도 인식할 수 있도록 한다.
- 이미지 IR / 명도대비 4.5:1 / 바텀시트 닫기 기능 / 키보드 조작기능 / 대체 텍스트 / 배경 글자

## headless

- 기능은 있지만 스타일이 없는 컴포넌트

## 컴파운드 컴포넌트

- 하나의 완벽한 컴포넌트를 구성하는 암시적 상태 공유 컴포넌트 API 집합을 제공하는 방법
- 관련컴포넌트들이 상태를 공유한다.

## CSS in JS

- 웹 컴포넌트 스타일링 관리. 필요한 컴포넌트 페이지의 CSS 스타일 요소만 사용한다.

## Hydration

- React는 클라이언트 렌더링만 있어서 유저에게 보여줄 html, css, js 모두 렌더링을 통해 DOM을 생성한다.
- Nextjs의 경우 서버로 부터 html 컨텐츠를 가져온다. DOM을 생성하기 위해 렌더링 하지는 않지만, html의 상호작용 이벤트를 연결하기 위한 하이드레이트 작업이 필요하다. 인터렉션을 매칭하는 하이드레이션 수행.

참고) Hydration은 SSR에서 사용되는 용어로, pre-rendering을 통해 정적페이지를 클라에게 전달하고 react에서는 번들링된 js를 클라에게 전달하여 html+js 매칭하는 작업을 말한다. 한번더 렌더링을 하면서 자기자리를 찾는다. 이후 클릭과 같은 이벤트나 모듈이 적용되어 사용자 조작이 가능하다. 정적페이지 -> 동적페이지

## HTTP 캐시

- no-cache: 캐시가 유효한지 매번 서버에 요청한다.
- no-store: 어떤 요청도 캐시로 저장하지 않는다.
- max-age: 캐시신선도를 설정한다.
- must-revalidate: no-cache 정책을 프록시에게 요청한다.
- 유효기간을 날짜로 지정 expire / last-modified
- 이후 etag / if-match 로 entiry 확인

## RestAPI

- 자원의 상태를 주고받을 있는 규약
- URI를 통해 자원을 명시하고 / Method를 통해 자원의 오퍼레이션을 정의 함(post생성 / put업댓 / patch부분업댓)

## CORS

- Cross Origin Resource Sharing 교차출처리소스공유
- http 헤더를 사용하여 실행중인 서버가 다른 출처의 자원에 접근할 수 있도록 함
- Access-Control-Allow-Origin / Header / Method

## attr & prop

- attr: HTML문서의 정적인 속성
- props: HTML문서의 동적인 속성

## window 객체

- DOM: document
- BOM: navigation / location / history / XMLHttpRequest
- JS: Object / Array / function

참고) js 7가지 원시타입: string, number, boolean, null, undefined, bigint, symbol

## 브라우저렌더링

- HTML 마크업 DOM
- CSS 마크업 CSSOM
- DOM + CSSOM = 렌더트리
- 레이아웃의 위치와 크기를 계산하여 box-model을 생성한다. (box-sizing: content-box기본)
- 페인트: 화면에 보여줌

## 동기와 비동기 / 블로킹과 논블로킹

- 동기: 아무것도 하지 않고 기다린다.
- 비동기: 다른것을 하며 기다린다. 이때 작업완료 여부는 return이 됨.
- 블로킹: 제어권을 넘긴다(함수실행 제어권)
- 논블로킹: 제어권을 넘기지 않는다. (함수를 실행한시킴) ex) 대표적 블로킹 alert
- 동기&블로킹 / 비동기&논블로킹 보통
- 동기&논블로킹: 함수실행작업완료여부를 주기적으로 체크
- 비동기&블로킹: 제어권을 넘겼기 때문에 기다린다.

## 비동기 처리방식

- callback: 콜백함수라는 인자를 넣어 실행. 콜백지옥. 제어가 어렵고. 가독성이 좋지 않음
- promise(ES6): 비동기를 값으로 표현한다. pending, fulfilld, reject 상태가 있고 then, catch 를 통해 성공실패를 핸들링한다. 또, all을 통한 병렬처리가 가능한데 주의할점은 하나라도 거절되면 전체요청이 거절된다. then 체이닝을 사용할수 있으며 많아지는 경우 가독성이 좋지 않게 된다.
- asyn/await(ES8): 비동기처리를 명령형으로 프로그래밍할 수 있다. 항상 프로미스를 반환하고 여러 프로미스의 동작을 동기스럽게 사용할 수 있게 해준다. 원래 await은 async 함수내에서만 동작하지만 최근에는 ES2022, 최상위 레벨의 await이 가능하게 되었다.


            - absolute , translate 차이는? 
              목적자체가 다름
              absolute : 포지셔닝 (특정 위치에 위치시키기 위함) / 주변 요소에 영향이 있다.
              translate : 디자인 모션 / 좌표 공간을 변형시키기에 다른 요소(형제 등등..)에 영향을 미치지 않는다.

              absolute를 사용하면 레이아웃을 계산하기 위해 CPU의 연산처리가 동반되고 연산 후엔 reflow와 repaint가 발생해서 속도 저하
              반면 translate()같은 CSS3 애니메이션 함수는 GPU로 처리하기 때문에 성능면에서 우위에 있습니다.