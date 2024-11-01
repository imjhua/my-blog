---
date: 2024-09-05
title: 모바일앱 개발 원데이클래스
slug: /tech/start-developing-mobile-apps-ios
tags: [tech]
---

## 소개

최소한의 환경으로 가볍게 모바일앱 개발 시작해보자. 앱을 직접 구성하여 앱 환경에 대한 이해를 높이고 크로스플랫폼인 React Native를 사용하여 모바일앱을 개발해 봅니다. 
Android와 iOS를 동시에 개발할 수 있으며, 이 프로젝트의 목표는 iOS 앱을 App Store에 출시하는 것입니다.

- 누구나
- 앱개발에 필요한 기초개념정리
- 앱 개발부터 앱스토어 출시까지 모두 경험할 수 있는 프로젝트
- 배포까지 경험할 수 있도록 도와드리는 프로젝트 운영 노하우

### 학습 목표

1. 모바일앱 개발: React Native / Expo
2. 앱스토어 출시: Apple Developer / App Screen Shot / App Icon / Privacy Policies

참고) 개발 키워드
- React Native  / TypeScript  / Expo  / Expo Go  / EAS Build & Submit  / NativeWind  / Tailwind CSS  / Cross-Platform  / Utility-first  / App Store  / Apple Developer

### 목차
- 프로젝트 개요 및 학습목표
- 모바일앱 개발
  - React Native Componets
  - Expo 빌드
  - Expo 빌드
  - Expo 서브밋
  - 탭 만들어보기
- 앱스토어 출시
  - Apple Developer
  - App Screen Shot
  - App Icon
  - Privacy Policies

참고) 다음 개발환경에서 진행됩니다.
- VSOCDE
- Iphone
- Expo App
- .prettierrc.json

## 커리큘럼

### 1주차
- 프로젝트 소개 및 개념 정리

### 2주차
- 개발환경 셋팅

### 3주차
- 앱 개발

### 4주차
- 앱 배포


## 개발하기에 앞서

### 개발하고 싶은 서비스 정하기
- 서비스
- 앱 이름
- 앱 아이콘
- 개발 플랫폼 선정

### 모바일앱 개발을 위한 개념정리
- Framwork: React Native vs Flutter
- Styling: Iinline Style / Tailwind CSS / Emotion / ...
- Development Environment: Android device / iOS device / Android Emulator / iOS Simulator
- Expo Go Application: Download on the App Store

### 앱스토어 출시를 위한 과정
- 애플 개발자 계정
- 앱 명
- 앱 설명
- 키워드
- 스크린샷
- 개인정보 보호정책(링크)


## 모바일앱 개발을 시작해보자

### 기술스택
- React Native: React로 개발할 때의 장점을 네이티브 개발에 가져옵니다. 이는 사용자 인터페이스를 구축하기 위한 최고의 JavaScript 라이브러리
- Expo: Expo는 JavaScript와 React를 사용하여 Android, iOS, 그리고 웹용으로 보편적인 네이티브 앱을 만드는 오픈 소스 플랫폼
- NativeWind: Tailwind CSS의 유틸리티-퍼스트 접근 방식을 React Native 애플리케이션에 적용할 수 있도록 하는 라이브러리
- Tailwind CSS: HTML을 벗어나지 않고도 모던 웹사이트를 빠르게 구축할 수 있는 유틸리티-퍼스트 CSS 프레임워크

#### React Native
React Native는 페이스북(Facebook)이 개발한 오픈 소스 프레임워크로, 자바스크립트와 React를 사용하여 네이티브 모바일 애플리케이션을 개발할 수 있게 해줍니다. 
주요 특징은 다음과 같습니다.

- 크로스플랫폼 개발: React Native를 사용하면 동일한 코드베이스로 iOS와 Android 플랫폼용 앱을 개발할 수 있습니다. 코드의 대부분을 공유할 수 있어 개발 효율성을 높입니다.
- 네이티브 컴포넌트: React Native는 네이티브 컴포넌트를 사용하여 실제 모바일앱처럼 원활한 사용자 경험을 제공합니다. 즉, HTML이 아닌 네이티브 UI 컴포넌트를 사용합니다.
- Hot Reloading: 코드 변경 시 앱이 자동으로 업데이트되기 때문에 개발 과정에서 빠르게 결과를 확인할 수 있습니다.
- React의 장점: React Native는 React의 선언적 UI와 컴포넌트 기반 개발 방식을 채택하고 있어서, 개발자들이 이미 익숙한 React의 패턴과 생태계를 활용할 수 있습니다.
- 커뮤니티와 라이브러리: 활발한 오픈 소스 커뮤니티가 지원하고 있으며, 다양한 라이브러리와 플러그인을 통해 기능을 확장할 수 있습니다.

이러한 특징들 덕분에 React Native는 빠른 개발과 유지보수가 가능한 모바일앱 개발에 널리 사용됩니다.

#### Expo



Expo는 React Native 기반의 오픈 소스 플랫폼으로, 모바일 애플리케이션을 개발하는 데 도움을 주는 도구와 서비스의 집합입니다. Expo는 React Native의 복잡성을 줄이고, 빠르고 쉽게 모바일앱을 개발할 수 있게 해줍니다. 주요 특징은 다음과 같습니다.

- 단순화된 개발 환경: Expo는 복잡한 네이티브 코드나 설정 없이 React Native 애플리케이션을 쉽게 개발할 수 있도록 도와줍니다. 개발자는 Expo SDK와 도구를 사용하여 다양한 네이티브 기능을 구현할 수 있습니다.
- Expo Go 앱: Expo Go는 iOS와 Android에서 Expo 앱을 직접 테스트하고 미리 볼 수 있는 모바일앱입니다. 개발 중에 실제 기기에서 앱을 실시간으로 테스트할 수 있어 편리합니다.
- 모듈화된 API: Expo는 카메라, 위치 정보, 알림 등 다양한 네이티브 기능을 제공하는 API를 내장하고 있어, 네이티브 모듈을 직접 작성할 필요 없이 기능을 쉽게 구현할 수 있습니다.
- 빌드 서비스: Expo의 빌드 서비스인 Expo Application Services(EAS)를 사용하면, 애플리케이션을 클라우드에서 빌드하고 배포할 수 있습니다. 이 서비스는 앱스토어에 제출할 수 있는 최적화된 빌드를 생성합니다.
- 크로스플랫폼 지원: Expo를 사용하면 iOS와 Android 플랫폼을 동시에 지원하는 크로스플랫폼 애플리케이션을 개발할 수 있으며, 웹용 애플리케이션도 지원합니다.
- 커뮤니티와 문서: Expo는 활성화된 커뮤니티와 잘 정리된 문서 덕분에 개발자들이 문제를 해결하고 기능을 학습하는 데 많은 도움을 줍니다.

Expo는 특히 개발 초기 단계에서 React Native의 복잡성을 피하고, 빠르게 프로토타입을 만들거나 소규모 프로젝트를 진행하는 데 유용합니다.

참고) Expo 가 제공하는 2가지 workflow

Managed workflow
managed 방식은 expo가 앱을 만들 때, 복잡한 과정들을 expo가 관리해주는 방식이다. X-code가 Android Studio를 사용할 필요가 없다. App.json을 통해 자바스크립트 코드와, 환경설정을 작성하기만 하면 된다.

bare workflow
expo로 개발하다가, 더 많은 제어가 필요하다면, expo 도구를 리액트 네이티브 앱으로 프로젝트를 꺼낼 수 있다. 이것이 bare 방식이다. managed 방식과 달리, bare 방식은 개발자가 완전한 제어와 그에 따른 복잡성을 가지고 있다.

#### Tailwind CSS
Tailwind CSS는 유틸리티-퍼스트(utility-first) CSS 프레임워크로, 클래스 기반의 스타일링 접근 방식을 제공합니다. Tailwind CSS는 다음과 같은 주요 특징이 있습니다:

- 유틸리티-퍼스트 접근 방식: Tailwind CSS는 단일 책임의 유틸리티 클래스(예: bg-blue-500, text-center, p-4)를 사용하여 스타일을 적용합니다. 이를 통해 HTML 요소에 직접 스타일을 적용하고, 재사용 가능하며 유지보수가 용이한 코드를 작성할 수 있습니다.
- 모듈성과 커스터마이징: Tailwind CSS는 tailwind.config.js 파일을 통해 커스터마이징할 수 있으며, 색상, 간격, 폰트, 브레이크포인트 등의 기본 값을 사용자 정의할 수 있습니다. 이를 통해 프로젝트의 디자인 시스템에 맞게 쉽게 조정할 수 있습니다.
- 모든 브라우저 지원: Tailwind CSS는 최신 브라우저뿐만 아니라 구형 브라우저도 지원하며, CSS의 최신 기능을 사용하는 동시에 호환성 문제를 최소화합니다.
- 모바일 우선 설계: Tailwind CSS는 모바일 우선 설계를 기본으로 하여, 반응형 디자인을 쉽게 구현할 수 있는 유틸리티 클래스를 제공합니다. 다양한 화면 크기에 맞게 스타일을 조정하는 것이 간편합니다.
- 컨디셔널 스타일링: Tailwind CSS는 상태나 조건에 따라 스타일을 쉽게 적용할 수 있도록 도와주는 hover, focus, active 등의 상태 기반 클래스도 제공합니다.
- 빠른 프로토타이핑: 유틸리티 클래스 덕분에 디자인을 신속하게 구현할 수 있어 프로토타입 작성과 디자인 수정이 빠릅니다.
- 퍼포먼스: Tailwind CSS는 PurgeCSS와 통합되어 사용되지 않는 CSS 클래스를 제거하여 최종 빌드에서 파일 크기를 줄이는 데 도움을 줍니다.
- 커뮤니티와 생태계: 활발한 커뮤니티와 다양한 플러그인, 확장 기능을 제공하여 Tailwind CSS의 기능을 더욱 확장할 수 있습니다.

Tailwind CSS는 개발자들에게 스타일링을 더 세밀하게 제어할 수 있는 도구를 제공하며, 전통적인 CSS 프레임워크에 비해 더 유연하고 강력한 디자인 시스템을 구축할 수 있게 해줍니다.

참고)
"Utility-first"는 CSS 설계 접근 방식으로, 작은 유틸리티 클래스를 사용하여 스타일을 적용하는 방식입니다. 각 유틸리티 클래스는 특정 스타일 속성(예: 색상, 여백, 텍스트 정렬 등)을 하나만 담당합니다. 이를 통해 HTML 요소에 직접 필요한 스타일을 명시적으로 적용할 수 있어, 복잡한 CSS 규칙을 작성하지 않고도 빠르고 일관된 스타일링을 할 수 있습니다.

#### NativeWind

NativeWind의 주요 특징은 다음과 같습니다:

- 유틸리티 클래스: Tailwind CSS에서 사용하는 유틸리티 클래스를 React Native에서 사용할 수 있게 해줍니다. 예를 들어, bg-blue-500, p-4, text-center 같은 클래스가 React Native 컴포넌트에서 직접 적용될 수 있습니다.
- 간편한 스타일링: Tailwind CSS의 클래스 이름을 그대로 사용할 수 있어, 일관성 있는 스타일링을 쉽게 유지할 수 있습니다. CSS 파일을 작성하거나 스타일 객체를 만드는 대신, 클래스 이름으로 스타일을 적용할 수 있습니다.
- 커스터마이징: Tailwind CSS의 설정 파일을 통해 색상, 간격, 폰트 등의 디자인 시스템을 커스터마이즈할 수 있으며, 이 설정이 NativeWind에서도 적용됩니다.
- 반응형 디자인: Tailwind CSS에서 제공하는 반응형 디자인 기능을 React Native에서 사용할 수 있습니다. 다양한 화면 크기와 기기에 맞게 스타일을 조정할 수 있습니다.

NativeWind를 사용하면 React Native 개발자들이 Tailwind CSS의 장점을 그대로 활용하면서, 네이티브 모바일 애플리케이션을 효율적으로 스타일링할 수 있습니다.

### React Native 컴포넌트 맛보기
..

### 프로젝트 시작하기

#### 프로젝트 명
- 프로젝트명: zta 

참고) ChatGPT 활용(별이름으로 프로젝트명 추천해줘!)
- https://chatgpt.com/


#### 필요한 이미지 준비
파비콘으로 아이콘을 제너레이션 할 수 있다.
webp 의 경우 빌드 에러가 발생할 수 있으니 png로!

- 파비콘: 48 x 48 권장
- 아이콘: 1024 x 1024 권장
- 스플래쉬(세로형): 1536 x 2048


```
// webp 빌드 실패 로그
- Creating native directory (./ios)
✔ Created native directory
- Updating package.json
✔ Updated package.json
- Running prebuild
✖ Prebuild failed
Error: [ios.dangerous]: withIosDangerousBaseMod: Unsupported MIME type: image/webp
Error: [ios.dangerous]: withIosDangerousBaseMod: Unsupported MIME type: image/webp
    at Jimp.throwError (/Users/expo/workingdir/build/node_modules/jimp-compact/dist/jimp.js:1:833)
    at Jimp.parseBitmap (/Users/expo/workingdir/build/node_modules/jimp-compact/dist/jimp.js:1:125733)
    at Jimp.parseBitmap (/Users/expo/workingdir/build/node_modules/jimp-compact/dist/jimp.js:1:8514)
    at /Users/expo/workingdir/build/node_modules/jimp-compact/dist/jimp.js:1:7613
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)
npx expo prebuild --no-install --platform ios exited with non-zero code: 1
```

참고)
- svg 만들기: https://editsvgcode.com/
- https://a11y.gitbook.io/graphics-aria/svg-graphics/svg-text
- https://mediamodifier.com/svg-editor#
- 파비콘: https://pgicons.abiro.com/
- https://favicon.io/
- https://www.favicon.cc/
- https://favicon.io/emoji-favicons/
- 이모지 조합하기: https://emoji.supply/kitchen/
- 로고 요청: https://chatgpt.com/
- https://www.istockphoto.com/kr/%EB%B2%A1%ED%84%B0/%EC%9B%8C%ED%84%B0-%EC%9B%A8%EC%9D%B4%EB%B8%8C-%EB%A1%9C%EA%B3%A0-%EC%9D%B4%EB%AF%B8%EC%A7%80-gm1293400499-387820659
- https://favicon.io/logo-generator/
- 아이콘생성: https://www.appicon.co/
- 스플래쉬: https://apetools.webprofusion.com/
- https://developer.apple.com/design/human-interface-guidelines/app-icons#app-top
- https://developer.apple.com/design/human-interface-guidelines/launching
- https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/

#### 프로젝트 생성

```
$ npx create-expo-app --template blank-typescript [DIR_PATH]

// 실행 권한이 없을 때 실행
$ sudo chown -R 501:20 "[PATH]/.npm"
```

참고)
- https://docs.expo.dev/get-started/create-a-project/
- https://github.com/expo/examples


#### 패키지 추가 설치

##### 의존성 패키지
expo 에서 제공하는 앱 제어 기능들. 라우터, 상태바 등
```
// SDK 50 and above
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

// SDK 49 and below
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```

진입점 변경
```
// package.json
{
  "main": "expo-router/entry"
}
```

웹뷰
```
$ npm install react-native-webview@13.8.6
```

스타일
```
npm install nativewind tailwindcss
```

스타일 적용을 위한 바벨 설정
```
// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};

```

타입스크립트 환경 적용
```
// nativewind-env.d.ts
/// <reference types="nativewind/types" />
```

참고)
- https://docs.expo.dev/get-started/create-a-project/
- https://github.com/expo/examples


##### 타입스크립트를 사용하는 경우
에러 발생: 'React'는 UMD 전역을 참조하지만 현재 파일은 모듈입니다.

```
// tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx"
  }
}

```

#### 앱 설정

expo key 하위 특성
- name: expo와 홈 화면에 표시되는 앱의 이름
- slug: 배포를 위한 url이다.(expo.io/@project-owner/study_expo)
- privacy: public / unlisted 두 가지 옵션이 존재한다. unlisted인 경우 검색 결과에서 experience를 숨긴다.
- sdkVersion: 프로젝트를 실행할 expo sdk 버전이다. package.json에서 지정된 버전과 동일한 버전이어야한다.
- platforms: 프로젝트가 지원하는 플랫폼. default 값은 ["ios", "android"]이다.
- version: 개발자의 앱의 버전이다.
- orientation: 앱을 가로나 세로 방향으로 잠글 수 있는 특성이다.
- icon: 앱 설치시 보이는 아이콘 이미지이다.(1024 x 1024 를 권장한다.)
- splash: 로딩 화면을 구성하는 것이다.
- updates: 앱이 OTA 자바스크립트 업데이트를 요청하는 방법 및 시기에 관한 구성이다.


#### 스킴 및 아이콘 적용하기
expo를 통해 앱에 필요한 설정을 한다.

만들어둔 아이콘을 디렉토리에 옮긴다.
- 경로: ~/assets/

- scheme
- icon
- splash
- ios > bundleIdentifier

```
// app.json

{
  "expo": {
    "name": "zta",
    "slug": "zta",
    "version": "1.0.0",
  }
}

```

참고)
- https://docs.expo.dev/versions/latest/config/app/


```
// package.json
{
  "name": "zta",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~51.0.28",
    "expo-constants": "~16.0.2",
    "expo-linking": "~6.3.1",
    "expo-router": "~3.5.23",
    "expo-status-bar": "~1.12.1",
    "nativewind": "^2.0.11",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.5",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "react-native-web": "~0.19.10",
    "react-native-webview": "13.8.6"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.3.3"
  },
  "private": true
}


// app.json
{
  "expo": {
    "name": "zta",
    "slug": "zta",
    "scheme": "zta",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.idlt.zta",
      "config": {
        "usesNonExemptEncryption": false
      },
      "entitlements": {
        "aps-environment": "development"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": ""
      }
    }
  }
}
```


#### 서버 띄우기

```
$ npm run start -c --ios // Babel 구성 파일을 업데이트 한 경우, 번들 캐시 지우기

// 실행 권한이 없을 때 실행
$ sudo chown -R 501:20 "[PATH]/.expo"
```

#### 인덱스 페이지 변경
시작점
- 경로: app 디렉토리

필요한파일
- index.tsx
- _layout.tsx


### 개발하기
리엑트네이티브로 컴포넌트 만들기. 엑스포의 스택을 적극 활용한다.

참고)
- https://docs.expo.dev/router/advanced/stack/

#### 홈화면

#### 레이아웃

헤더옵션 살펴보기
```
export type NativeStackNavigationOptions = {
  /**
   * String that can be displayed in the header as a fallback for `headerTitle`.
   */
  title?: string;
  /**
   * Function that given `HeaderProps` returns a React Element to display as a header.
   */
  header?: (props: NativeStackHeaderProps) => React.ReactNode;
  /**
   * Whether the back button is visible in the header.
   * You can use it to show a back button alongside `headerLeft` if you have specified it.
   *
   * This will have no effect on the first screen in the stack.
   */
  headerBackVisible?: boolean;
  /**
   * Title string used by the back button on iOS.
   * Defaults to the previous scene's title, or "Back" if there's not enough space.
   * Use `headerBackTitleVisible: false` to hide it.
   *
   * Only supported on iOS.
   *
   * @platform ios
   */
  headerBackTitle?: string;
  /**
   * Whether the back button title should be visible or not.
   *
   * Only supported on iOS.
   *
   * @platform ios
   */
  headerBackTitleVisible?: boolean;

```
#### 로고
constants > image


#### 스크롤뷰
```
<ScrollView>
text
</ScrollView>

```


#### 웹뷰

```
$ npm install react-native-webview@13.8.6

```

- https://github.com/react-native-webview/react-native-webview

```
<ScrollView>
text
</ScrollView>

```

### 앱스토어에 올리기 준비
여러가지가 있는데 빌드와 서브밋이 오래걸리니까 우선하고 기다리는 동안 나머지 준비하기

#### 필요한 링크들(웹페이지)
필요한 사이트 만들기

- 개인정보 보호정책: https://app.privacypolicies.com/
- 헬프페이지: https://sites.google.com/


#### 스크린샷 준비
스크린샷을 준비한다. 심사에서 제일 중요!

- iPhone 6.9" Display: 1290 x 2796 pixels
- iPhone 6.5" Display: 1284 x 2778 pixels
- iPad 13" Display: 2064 x 2752 pixels

참고)
- https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/
- https://developer.apple.com/design/human-interface-guidelines/layout#Specifications

#### 빌드를 위한 설정

Expo Go를 사용하면 복잡한 빌드 과정 없이도 실제 기기에서 개발 중인 애플리케이션을 손쉽게 테스트할 수 있어, 개발과 디버깅을 효율적으로 진행할 수 있습니다.

빌드스크립트를 추가한다.
```
// package.json
{
  ...
  "scripts": {
    "build": "eas build --platform ios",
    "submit": "eas submit -p ios --latest"
  }
  ...
}
```

앱설정을 추가한다.

```
// app.json
{
  ...
  "expo": {
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.idlt.zeta"
      "buildNumber": "com.idlt.zeta"
    }
  }
  ...
}
```


참고)
- https://github.com/expo/fyi/blob/main/bumping-ios-build-number.md


#### esa 프로젝트 설정 및 빌드 실행

Account를 생성후 프로젝트를 생성한다.
slug와 동일한 프로젝트를 생성한다.

- https://expo.dev/accounts/idlt/projects

발급받은 프로젝트 id를 앱 설정에 추가한다.
```
eas init --id [프로젝트 ID]
```

```
// app.json
{
  "expo": {
    ...
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "f500d7f1-feec-48e1-a162-1d9f912a7aed"
      }
    },
    "owner": "idltapps"
    ...
  }
}
```

앱버전관리!
초기 버전을 셋팅해두면 빌드시마다 자동으로 버전이 올라가도록 구성할 수 있다.
단계가 끝나면 앱 버전이 원격으로 EAS Build에 동기화됩니다. 이제 eas.json 에서 build.production.autoIncrement를 설정할 수 있습니다 . 새 프로덕션 빌드를 만들면 및 가 자동으로 증가합니다.

초기값은 0.0.0으로

```
$ eas build:version:set
```

참고)
- https://docs.expo.dev/build-reference/app-versions/


빌드! 애플개발자에 로그인하고 인증서 적용하고 이후 빌드. 빌드 시간은 꽤 걸린다.
```
$ npm run build


✔ Do you want to log in to your Apple account? … yes

› Log in to your Apple Developer account to continue
✔ Apple ID: … idltapps@gmail.com
› Restoring session /Users/bella.v/.app-store/auth/idltapps@gmail.com/cookie
› Session expired Local session
› Using password for idltapps@gmail.com from your local Keychain
  Learn more
✔ Logged in New session
› Team JIHYE KIM (P9XJL56F8T)
› Provider JIHYE KIM (127308910)
✔ Bundle identifier registered com.idlt.zta
✔ Synced capabilities: Enabled: Push Notifications
✔ Synced capability identifiers: No updates
✔ Fetched Apple distribution certificates
✔ Reuse this distribution certificate?
✔ Generate a new Apple Provisioning Profile? … yes
✔ Created Apple provisioning profile
✔ Created provisioning profile


Project Credentials Configuration

Project                   @idltapps/zta
Bundle Identifier         com.idlt.zta
```


서브밋!
```
$ npm run submit


› Log in to your Apple Developer account to continue
✔ Apple ID: … idltapps@gmail.com
› Restoring session /Users/bella.v/.app-store/auth/idltapps@gmail.com/cookie
› Team JIHYE KIM (P9XJL56F8T)
› Provider JIHYE KIM (127308910)
✔ Logged in Local session

✔ Bundle identifier registered com.idlt.zta
✔ Prepared App Store Connect for zta com.idlt.zta
Looking up credentials configuration for com.idlt.zta...
✔ Fetched App Store Connect API Keys.
✔ Reuse this App Store Connect API Key?

```


appstoreconnect 에서 확인하기
- https://appstoreconnect.apple.com/apps


### appstoreconnect
빌드된 앱을 추가하면 아이콘이 보인다.


### 심사단계
- https://developer.apple.com/kr/help/app-store-connect/reference/app-and-submission-statuses/
- https://developer.apple.com/kr/help/app-store-connect/manage-submissions-to-app-review/remove-a-submission-from-review/



#### 푸시알림
- https://docs.expo.dev/push-notifications/push-notifications-setup/

---

- https://developer.apple.com/kr/ios/submit/