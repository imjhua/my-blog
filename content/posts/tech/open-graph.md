---
date: 2023-01-01
title: Open graph (오픈 그래피, og 태그)
slug: /tech/open-graph
tags: [tech]
---

## 소개

opengraph란 HTML문서의 메타정보를 SNS상에서 공유할때 페이지에 대한 정보를 미리 전달할 수 있도록 정의 하는 프로토콜로 사용자가 클릭 하기 전에 크롤러가 해당 웹사이트를 방문하여 HTML의 head의 메타데이터를 크롤링 하여 미리보기 화면을 생성해 준다.

## Open Graph 기본 태그

1. og:title - 사이트의 제목 태그
2. og:type - 사이트의 종류 스타일 예) video.movie
3. og:image - 사이트를 나타낼 대표 이미지
4. og:url - 사이트의 대표 url

```html
<meta property="og:title" content="콘텐츠 제목" />
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" />
<meta property="og:title" content="웹사이트 이름" />
<meta property="og:description" content="웹페이지 설명" />

<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />

<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

참고) 이미지의 경우 최소한 600 x 315 픽셀은 되어야 하며, 1200 x 630 픽셀 크기를 권장

모바일 앱이 존재하는 경우 앱의 정보를 미리보기로 설정할 수 있다. 앱으로 연결 시 노출된다.

```html
<--iOS-->
<meta property="al:ios:url" content=" ios 앱 URL" />
<meta property="al:ios:app_store_id" content="ios 앱스토어 ID" />
<meta property="al:ios:app_name" content="ios 앱 이름" />
<--Android-->
<meta property="al:android:url" content="안드로이드 앱 URL" />
<meta property="al:android:app_name" content="안드로이드 앱 이름" />
<meta property="al:android:package" content="안드로이드 패키지 이름" />
<meta property="al:web:url" content="안드로이드 앱 URL" />
```

---

- https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
