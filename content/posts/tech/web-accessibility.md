---
date: 2022-09-07
title: 웹 접근성
slug: /tech/web-accessibility
tags: [tech]
---

## WAI-ARIA

WAI-ARIA(Web Accessibility Initiative-Accessible Rich Internet Applications)는 HTML의 접근성 문제를 보완하는 W3C 명세이다. WAI-ARIA는 HTML 요소에 role 또는 aria-\* 속성을 추가하여 콘텐츠의 역할(roles), 상태(states), 속성(properties) 정보를 보조기기에 제공한다.

참고) ARIA이란?

접근가능한 리치 인터넷 어플리케이션(Accessible Rich Internet Applications, ARIA)은 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 JavaScript를 사용하여 개발한 경우)에 더 쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 말한다.


### 사용규칙

- HTML5 섹션요소와 중복 사용하지 않는다.
- native요소의 의미, 기능 변경을 하지 않는다.
- 키보드 사용성을 보장하도록 한다.(div, span, p 는 접근이 불가한데 필요에 따라 tabIndex활용)
-

## role 속성

특정 요소에 역할정의하여 사용자에게 정보를 제공한다. 부여한 역할 동적변경 불가하다.

- role="none | presentation": 역할 없음
- role="group": 여러 옵션 중 한가지 선택할 때
- role="banner": `<header>`
- role="navigation": `<nav>`
- role="main": `<main>`
- role="aside | complementary": `<aside>`
- role="form": `<form>`
- role="button": `<button>`
- role="tooltip": 툴팁을 유발하는 요소에 aria-describedby 로 연결한다.
- role="status"
- role="alert": 오류메시지. 실시간 오류인 경우 aria-invalid="true|false" 속성과 aria-errormessage 연결
- role="alertdialog | dialog": 사용자의 응답을 요함(대화상자)
- role="tab"

### role=tablist

탭 목록, 탭, 탭패널의 구조를 제공한다.
웹페이지 제작자는 웹 페이지의 일부 콘텐츠를 숨길 필요가 있다.

- role="tablist|tab|tabpanel"
- aria-selected: 선택상태
- aria-labelledby: 탭(id)과 패널 연결
- aria-controls: 탭과 패널(id) 제어상태

```html
<!-- O: 앵커 형식 탭 -->
<div class="weekly">
  <div role="tablist">
    <a id="mon-anchor" href="#mon" role="tab" aria-selected="true">Tab1</a>
    <a id="tue-anchor" href="#tue" role="tab" aria-selected="false">Tab2</a>
  </div>
  <div id="mon" tabindex="0" role="tabpanel" aria-labelledby="mon-anchor">
    Tab1 content
  </div>
  <div
    id="tue"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tue-anchor"
    hidden
  >
    Tab2 content
  </div>
</div>

<!-- O: 버튼 형식 탭 -->
<div class="weekly">
  <div role="tablist">
    <button
      type="button"
      id="mon-anchor"
      aria-controls="mon"
      role="tab"
      aria-selected="true"
    >
      Tab1
    </button>
    <button
      type="button"
      id="tue-anchor"
      aria-controls="tue"
      role="tab"
      aria-selected="false"
    >
      Tab2
    </button>
  </div>
  <div id="mon" tabindex="0" role="tabpanel" aria-labelledby="mon-anchor">
    Tab1 content
  </div>
  <div
    id="tue"
    tabindex="0"
    role="tabpanel"
    aria-labelledby="tue-anchor"
    hidden
  >
    Tab2 content
  </div>
</div>
```

## ARIA 속성과 상태

### 속성

- aria-required: form 요소의 입력 필수 속성
- aria-label: text없이 이미지로 표현될 때 정보 설명. 간단한 설명
- aria-labelledby: 간단한 설명 참조
- aria-describedby: 자세한 설명 참조
- aria-live: 업데이트된 정보의 상황에 대한 설명(polite,assertive,off)
- aria-controls: 제어대상 참조
- aria-errormessage: 오류설명 참조
- aria-modal: 모달

### 상태

- aria-hidden(true,false,undefined): 숨김 상태
- aria-checked(true,false,undefined): 선택 상태
- aria-disabled(true,false): 사용 불가능/가능 상태
- aria-pressed(true,false,대상): 눌림 상태
- aria-invalid(true,false,grammar,spelling): 오류 상태

#### aria-hidden

웹페이지 제작자는 웹 페이지의 일부 콘텐츠를 숨길 필요가 있다.

- 요소에 장식용으로 간주될 수 있는 컨텐츠
- 모달의 경우 외부 컨텐츠에 접근에 제한

참고) display:none이나 visibility:hidden으로 숨겨진 콘텐츠는 시각적으로 콘텐츠를 숨김으로 화면에 표시되지 않으며, 스크린 리더와 같은 보조기술로도 탐색할 수 없다.

```html
<body>
  <div class="container" aria-hidden="true">보조기기가 무시하는 영역</div>
  <div
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="title"
    aria-describedby="description"
  >
    <h2 id="title">안내</h2>
    <p id="description">
      설명!
    </p>
    <button type="button">취소</button>
    <button type="button">확인</button>
  </div>
</body>
```

### aria-modal

요소가 모달인지 여부를 알린다.

- role="alertdialog | dialog"
- aria-labelledby: 참조하는 타이틀 영역(id속성)
- aria-describedby: 참조하는 컨텐츠 영역(id속성)
- aria-label: 참조할 요소가 없는 경우 직접 작성

```html
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="title-dialog"
  aria-describedby="desc-txt"
>
  <div role="document" tabindex="-1">
    <h2 id="title-dialog">모달 제목</h2>
    <p id="desc-txt">컨텐츠 내용</p>
  </div>
</div>
```

### aria-expanded

요소의 확장상태를 나타낸다. 예를 들면 아코디언, 메뉴, 콤보박스, 트리 등.

```html
<dt>
  <button type="button" aria-controls="answer-1" aria-expanded="false">
    문의사항. 어떻게 할 수 있나요?
  </button>
</dt>
<dd id="answer-1" hidden>
  <p>문의사항 답변</p>
</dd>
```

### aria-current="token"

현재 맥락과 일치하는 항목을 의미한다.

- token: page|step|location|date|time|true|false(default)

```html
<nav>
  <h2>글로벌 네비게이션</h2>
  <ul>
    <li><a href="/home" aria-current="page">홈</a></li>
    <li><a href="/ranking">랭킹</a></li>
    <li><a href="/my">나의페이지</a></li>
  </ul>
</nav>
```

---

- https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html
- https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA
- https://whales.tistory.com/84
