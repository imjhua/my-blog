---
date: 2024-09-05
title: 왕초보 모바일앱 개발(Web만 있다면 누구나 할 수 있다!)2
slug: /tech/start-developing-mobile-apps-ios-backup
tags: [tech]
---

## 프로젝트 개요
크로스플랫폼인 React Native를 사용하여 모바일 앱을 개발해 봅니다. 
Android와 iOS를 동시에 개발할 수 있으며, 이 프로젝트의 목표는 iOS 앱을 App Store에 출시하는 것입니다.

### 학습 목표

1. 모바일 앱 개발: React Native / Expo
2. 앱스토어 출시: Apple Developer / App Screen Shot / App Icon / Privacy Policies

참고)
- 키워드: React Native / Expo / NativeWind / Tailwind CSS / Cross-Platform / Utility-first / App Store / Apple Developer

### 목차
- 프로젝트 개요 및 학습목표
- 모바일 앱 개발
  - React Native Componets
  - Expo 빌드
  - Expo 빌드
  - Expo 서브밋
- 앱스토어 출시
  - Apple Developer
  - App Screen Shot
  - App Icon
  - Privacy Policies

## 모바일 앱 개발

### 기술스택
- React Native: React로 개발할 때의 장점을 네이티브 개발에 가져옵니다. 이는 사용자 인터페이스를 구축하기 위한 최고의 JavaScript 라이브러리
- Expo: Expo는 JavaScript와 React를 사용하여 Android, iOS, 그리고 웹용으로 보편적인 네이티브 앱을 만드는 오픈 소스 플랫폼
- NativeWind: Tailwind CSS의 유틸리티-퍼스트 접근 방식을 React Native 애플리케이션에 적용할 수 있도록 하는 라이브러리
- Tailwind CSS: HTML을 벗어나지 않고도 모던 웹사이트를 빠르게 구축할 수 있는 유틸리티-퍼스트 CSS 프레임워크

#### React Native
React Native는 페이스북(Facebook)이 개발한 오픈 소스 프레임워크로, 자바스크립트와 React를 사용하여 네이티브 모바일 애플리케이션을 개발할 수 있게 해줍니다. 
주요 특징은 다음과 같습니다.

- 크로스플랫폼 개발: React Native를 사용하면 동일한 코드베이스로 iOS와 Android 플랫폼용 앱을 개발할 수 있습니다. 코드의 대부분을 공유할 수 있어 개발 효율성을 높입니다.
- 네이티브 컴포넌트: React Native는 네이티브 컴포넌트를 사용하여 실제 모바일 앱처럼 원활한 사용자 경험을 제공합니다. 즉, HTML이 아닌 네이티브 UI 컴포넌트를 사용합니다.
- Hot Reloading: 코드 변경 시 앱이 자동으로 업데이트되기 때문에 개발 과정에서 빠르게 결과를 확인할 수 있습니다.
- React의 장점: React Native는 React의 선언적 UI와 컴포넌트 기반 개발 방식을 채택하고 있어서, 개발자들이 이미 익숙한 React의 패턴과 생태계를 활용할 수 있습니다.
- 커뮤니티와 라이브러리: 활발한 오픈 소스 커뮤니티가 지원하고 있으며, 다양한 라이브러리와 플러그인을 통해 기능을 확장할 수 있습니다.

이러한 특징들 덕분에 React Native는 빠른 개발과 유지보수가 가능한 모바일 앱 개발에 널리 사용됩니다.

#### Expo
Expo는 React Native 기반의 오픈 소스 플랫폼으로, 모바일 애플리케이션을 개발하는 데 도움을 주는 도구와 서비스의 집합입니다. Expo는 React Native의 복잡성을 줄이고, 빠르고 쉽게 모바일 앱을 개발할 수 있게 해줍니다. 주요 특징은 다음과 같습니다.

- 단순화된 개발 환경: Expo는 복잡한 네이티브 코드나 설정 없이 React Native 애플리케이션을 쉽게 개발할 수 있도록 도와줍니다. 개발자는 Expo SDK와 도구를 사용하여 다양한 네이티브 기능을 구현할 수 있습니다.
- Expo Go 앱: Expo Go는 iOS와 Android에서 Expo 앱을 직접 테스트하고 미리 볼 수 있는 모바일 앱입니다. 개발 중에 실제 기기에서 앱을 실시간으로 테스트할 수 있어 편리합니다.
- 모듈화된 API: Expo는 카메라, 위치 정보, 알림 등 다양한 네이티브 기능을 제공하는 API를 내장하고 있어, 네이티브 모듈을 직접 작성할 필요 없이 기능을 쉽게 구현할 수 있습니다.
- 빌드 서비스: Expo의 빌드 서비스인 Expo Application Services(EAS)를 사용하면, 애플리케이션을 클라우드에서 빌드하고 배포할 수 있습니다. 이 서비스는 앱스토어에 제출할 수 있는 최적화된 빌드를 생성합니다.
- 크로스플랫폼 지원: Expo를 사용하면 iOS와 Android 플랫폼을 동시에 지원하는 크로스플랫폼 애플리케이션을 개발할 수 있으며, 웹용 애플리케이션도 지원합니다.
- 커뮤니티와 문서: Expo는 활성화된 커뮤니티와 잘 정리된 문서 덕분에 개발자들이 문제를 해결하고 기능을 학습하는 데 많은 도움을 줍니다.

Expo는 특히 개발 초기 단계에서 React Native의 복잡성을 피하고, 빠르게 프로토타입을 만들거나 소규모 프로젝트를 진행하는 데 유용합니다.


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

### 

---

- 카카오모빌리티에 4년정도 근무하고 있습니다. 애플리케이션에 웹뷰를 통해 보여지는 웹 개발을 담당하고 있어요. 모바일앱에서 웹뷰와 통신하는 웹을 주로 고민하고 있습니다. 앱과 웹뷰간 통신에 필요한 인터페이스(예를들면 토큰정보, 다크모드, 테마색상 등)를 검토하거나 앱푸시메시지를 통한 웹뷰랜딩을 위해 스킴을 논의하는 등의 역할을 합니다. 주로 앱과 웹간의 통신이 원활할 수 있도록 앱개발자들과 소통을 많이 하고 있고요. 웹개발에 있어서는 디자이너와 협업을 많이 하고 있어요. 같은 웹이라 할지라도 모바일앱환경에서 보여지는 웹뷰는 일반 브라우저의 웹과는 다른 부분이 많이 있습니다. 입력창에 포커싱될때 키패드가 노출되어 화면을 가리게 되는데, 이에 대한 화면 구성도 다르게 접근해야하고 모바일 뿐만이 아닌 패드의 해상도도 함께 고려되어야 하는 부분들이 있습니다.



사용자에게 보여지는 화면에 큰 관심을 가지고 있습니다. 컴퓨터 시스템을 전공하며 지난 12년간 프론트엔드 개발에 전념해왔습니다. 모바일 앱의 웹뷰를 다룬 지 약 5년이 되었고, PC 시대에 웹이 보편화된 것처럼 모바일 시대에는 앱이 중요한 역할을 하고 있음을 느꼈습니다. 웹과 앱을 통합하는 웹뷰 개념에 대해 알게 되었고, 앱 개발을 통해 웹뷰에 대한 이해도를 높일 수 있을 것 같아 최근에 앱 개발을 새로 시작했습니다.

오랫동안 앱 개발자들과 협업해왔지만 개발 지식이 부족했던 저는 대학 시절의 컴퓨터 전공을 다시 공부하는 마음으로 앱 개발을 처음부터 시작했습니다. 웹에 대한 기본 지식이 있어서 웹을 활용한 앱 개발 방법을 찾아보았고, 이제는 웹만으로도 쉽게 앱을 개발할 수 있게 되었습니다. 이러한 경험이 다른 이들에게도 도움이 되기를 바라는 마음으로 강사 지원합니다.

-----
- .