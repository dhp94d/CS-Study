# CSS

### 목표

- 현업에서 시니어에게 요구하는 공부 방향
- DOM을 같이 다루지는 않고, CSS랜더링만
- 그래픽 시스템 전반, nomal flow
  - 그래픽스 시스템
    - 점을 찍는 방법,방식
    - 어떤 방식으로 점을 찍는가?
  - 랜더링 시스템
    - 내가 원하는 모습으로 다시 그려내는것!, 보다 구체적이고 시각적인 형태로 바꾸어줌! (그림을 그리기 위한 데이터를 그림으로 바꾸어 내는 것)
    - 어떠한 체계를 통해서 그림이 표현되는가, 그림을 표현하기 위한 정보는 무엇인가
  - nomal Flow
    - CSS의 고유 명사

## 1. CSS란?

5세대 언어로써 표현형 언어! 코드 짜지않고 선언만 하면 작동, 자동화! (ex 백그라운드 칠해줘!)

- 모든 그래픽 시스템 구현하는것에는 방법론이 있다!

### 1.1 그래픽 시스템?

- 가장 단순한 그래픽 시스템, 메모리상 점이 있다 생각!

- 비트맵의 기원! 점을 껐다 켰다 하는 비트로 되어진 맵!

- 시간이 흘러 비트가아닌 색도 바꿀 수 있게 되었는데 이것을 픽셀 맵이라함! 비트맵은 흑백만 표현!

- 그림은 X,Y, width, hight 등을 fixed number 체계라고 함

  - fixed number 문제점은 화면 크기가 다른데 확정된 픽셀로 코드를 짜면 문제가 야기, 숫자를 확정 하였기때문!

  - 확정하지 않기 위해 $, left, block , inline, float등 추상화 시킨 단어들을 사용

    -> 상대적인 단어 쓰는 이유 : 변화에 대비하기 위해서 abstract calculator (추상한 계산법! 계산식에 적응하자 ex) 절반)

- components : 추상적 계산체계를 합병해서 원하는 형태를 쉽게 쓸 수 있는 형태!

- 다양한 컴포넌트를 이용해 화면을 구성함! 컴포넌트로 일관성있고 분류되어있는것을 framework 이라 부름!

위와 같은 내용을 알고 쓰자! 개발자들은 컴포넌트부터 사용하려함! fixed number와 abstarct caculator을 이해하자

### 1.2 RENDERIN SYSTEM

**랜더링이란?**

- 그림과 상관 없는데 그림으로 표현하는것
- 그림을 위한 재료를 가지고 그림을 만들어 내는것!



![img](https://blog.kakaocdn.net/dn/nlXgv/btqJMw2VGud/MljjJ01BIyXLhLi9917TB0/img.png)



- 어느 영역까지 나눌까? 이것을 지형 구조물이라 볼 수 있는데 영어로 지오메트리(geometry)라 부름
- 커뮤니티, 검색창 등 영역을 나누고 칠하면됨 색칠 단위라 픽셀과는 맞지 않음
- 지오메트리에 포함된 모든 픽셀을 가리켜서 fragment(프레그먼트) 라고 하는데
- 랜더링 시스템은 어디다 색칠할지 땅따먹기 한 후 색칠 하는것이 랜더링 기본 원칙!
- 지오메트리 계산 -> 프레그먼트 함
- 지오메트리 계산하는 과정을 **리플로우** 라고 함!
- 계산된 지오메트리 색칠은 **리페인트** 라고 함
- 지오메트리를 변경하면 굉장히 비싼작업! 리페인트 시 전부 다시 색칠해야 하기 때문!
- 리플로우를 최대한! 최소화하자

## 2. CSS의 본질?

css 본질은 약속!

### 2.1. CSS level 1

- A4 한장 분량!

### 2.2. CSS level 2

- level1, level2는 통합! 사용서가 하나 있음
- css level2 + module
  - css2.1 합쳐져서 모듈별 사용서가 있음, 모듈별로 발전!

### 2.3. MODULE level

- css 2.1 이후 css 레벨은 사라지고 모듈 레벨이 생김! 모듈별로 발전하기 때문
- css 모듈별로 레벨을 불러주는게 올바른 지칭

## 3. NORMAL FLOW

- css 1.0/2.0 의 핵심적인 알고리즘!
- Normal flow를 이해해야 그래픽 원리를 이해할 수 있다

### Position

------

**Static | Relative | absolute | fixed | inherit**

- Normal FLow는 static과 relative에만 영향을 끼침!
- Normal Flow의 3가지 그래픽 랜더링 원리!
  - block Formatting contexts [BFC] 줄단위 그려짐?
  - inline formatting contexts [IFC] 옆으로 그려짐?
  - relative positioning [RP] 어떻게 끼어들지?

### IFC

- div 안에 아무것도 안건드리면

- overflow 속성이 auto, -> 브라우저 기본값에 맡김

- auto => overflow visible 이라 생각, 자기크기 생각없이 늘림

  ex)aaaaaaaaaaaaaaaaaaaaa와

  ex)aaaaaaaa
  aaaaaaaaaa

  가 같은 오버플로우지만 다르게 나오는 이유?

  텍스트 노드에 대한 별도의 규정 때문!

- 텍스트 노드를 만나면 텍스트 노드에 포함되어있는 공백문자를 다 모아서 거기에 걸리면 인라인 영역에 암묵적인 영역에 나누어줌! IFC입장에서는 span태그 3개처럼 보임!

- 경계면에 가면 아래쪽으로 감

### RP

부모중 블럭의 크기부터 움직임

## 4. FLOAT

left | right | none | inherit

- NEW BFC -> FLOAT OVER NORMAL FLOW -> TEXT, INLINE QUARD -> Line box(float끼리 그림)
- float로 ifc 요소들의 가이드를함 ifc요소는 float요소가 있는곳에는 못들어옴
- float 설정 지점부터 새로운 BFC가 만들어짐!
- 둥둥 떠있음! bfc ifc에는 영향 안끼침 ifc요소에는 가이드!
- line box로 float끼리 그려진당
- float는 그려질 때 nomal flow(ifc,bfc) 로 그려지지않음 linebox로 그려짐!
- nomal flow에서 벗어나 line box로 그려지는게 float의 역할

### 4.1 LINE BOX

계속해서 들어갈 수 있나 확인하고? 들어갈 수 있는곳을 찾아야행

기존있떤 라인 탑라인 공간 탐색 후 들어갈 수 없으면 탑라인 낮춰서 그다음 라인박스에서 찾아서 들어감

탑라인의 기준점이 어딘가가 아주 중요 !

탑라인은 한번 그리면 끝! 빈공간 있어도 한번 내려오면 끝! 마지막 그려진 것이 탑라인

### 4.2 LINE BOX + INLINE QUADE

ifc는 가드에 걸렸을때 바로 한칸 밑으로 가려고 함

레프트보단 왼쪽 라이트보단 오른쪽?

레프트에 레프트 인라인 박스가 있어서 밑으로 내려감!

## 5.1 OVERFLOW

### OVERFLOW

visible | hidden| scroll | inherit | auto

- nomal flow에 영향 끼침

### OVERFLOW -X, -Y

visible | hidden | scroll | clip | auto

- x,y 판단 기준이 다른 css모듈에 의존하기 때문에 규정이 되고있지 않음
- nomal flow에 영향 끼침

### TEXT-OverFLOW

clip | Ellipsis(... 으로 표현?)

- 그림 그릴때 속성일 뿐
- nomal flow 에는 visible이 아닐 때 영향을 끼침!
- visible이 아니라 다른것을 주면 바로 즉시 float처럼 새로운 BFC를 만듬!
- 고정사이즈에 overFlow hidden 만들 시 굉장히 느려짐 계속 만들어내서!
- BFC의 영역 계산할 때 영향을 끼침
- float bfc안에 또 bfc를 선언함 그러면
- overflow hidden은 float의 요소에 공간을 찾아서 들어갈 수 있으면 그려지고 못들어가면 안그려짐!



#  CSS 2일차

## 1. BOX MODEL

css layout 박스 규격, MS에서 만듬



![img](https://blog.kakaocdn.net/dn/ck2ZxP/btqJKvRaIy7/bIONqjTsGRWH6brxqjunc1/img.png)



- padding은 내부 margin으로 보면 됨

- boxsizing은 witdh와 hight 계산할 때 적용!

- MS는 borderbox 기준으로 boxsizing을 만듬 -> css 2.1에서 표준으로 content을 기준으로 함

  -> 표준 사용하다 보니 불편해서 box-sizing을 선택할 수 있도록 선택을 확장함!

  - 기본값, contentx box 바꿀 수 있음!

- box-shadow를 그림자를 주려고 만듬! 레이아웃 상자에는 영향을 안줌!

- box-shadow는 border안에도 외곽선을 줄 수 있음

- css는 박스 쉐도우 위에 그릴 수 있는게 있음 outline임 boxshadow 위에 나타남!

- content박스가 기준인 이유는 자식이 쓸 수 있는 공간을 정의하기 위해 ( 크기 퍼센트, 안에 픽셀)

- 차지할 전체 공간을 알고있고 몇이 들어가야하는지 알고 있을 때 %로 줘도 됨 (자기 크기 픽셀, 안에 퍼센트)

- 퍼센트는 부모 크기에서 퍼센트!, box-sizing은 어느쪽에 퍼센트를 줄까에 대한 선택!

- 인라인 공백 안주려면 < /div> 뒤에 < div>를 바로써야함 띄우고 쓰면 text 요소가 들어감! 띄어짐!

- background 그리는 로직은 색칠하는 과정! 박스사이징 같은게 안중요해! 백그라운드는 보더박스 전체를 색칠함!(마진은 투명해서 색칠 안함)

  - solid색을 설정해주면 백그라운드가 블랜딩됨! 랜더링 부하없이 이펙트 보여줄 수 있는것들 중 하나!
  - 보더박스 잘 이용하면 패딩 안쓰고 패딩과 같은 효과 가능!

- 엘리먼트 순서 상 뒤에나온게 위로 덮음 ,RP를 먹이면 앞에꺼가 이길 수 있옹

### 1.2 CSS 애니메이션 장점

- 자바스크립트를 모르더라도 애니매이션을 만들 수 있음
- 자바스크립트 애니매이션보다 성능이 좋은경우가 많음,
- CSS애니매이션은 frame-skipping 같은 여러 기술 이용하여 최대한 부드럽게 랜더링됨
- 브라우저는 애니메이션의 성능을 효율적으로 최적화 가능! 현재 안보이는 엘리먼트에 대한 애니메이션을 업데이트 주기를 줄여 부하를 최소화 가능!

### 1.3 @keyframes와 animaion 속기형

애니메이션을 재생할 각 프레임의 스타일을 정의하는것! from속성이나 0% 속성에 설정한 스타일에서 출발해 to 속성이나 100% 속성에 설정한 스타일로 점차 바뀌면서 애니메이션이 재생!

![image-20200929114943124](C:\Users\dw115\AppData\Roaming\Typora\typora-user-images\image-20200929114943124.png)

![image-20200929115005699](C:\Users\dw115\AppData\Roaming\Typora\typora-user-images\image-20200929115005699.png)

사진 출처: [[링크](https://webclub.tistory.com/621)](https://webclub.tistory.com/621)

### 1.4 style

- 프로그래밍 구조상 css에 들어가있는 css 구문은 프로그래밍 구조상 시트라는 구조 가짐!

- 엘리먼트상 스타일 하나에는 시트라는 객체가 들어가있음!

- 시트라는 객체에는 기본 룰이 들어가있는데 룰들이 포함되어있는것이 룰셋!

- 시트는 룰셋을 소유하고있고 룰들이 들어있음

- 일반적인 셀렉터 룰은 div{width:100px} 등등

- gcse엘리먼트라고 미디어쿼리, 임포트, 임폴턴트 등

- gcse 중 하나가 키프레임스,

- 디렉티브 이름 지정해서 애니매이션 시작과 끝 변화를 키프레임마다 잡아줘서 키프레임스로 잡음

- @keyframes anibs(디렉티브 이름) {

  from[asdfas] -> 키프레임

  }

- anmiation:anibs(디렉토리 이름) 0.4s linear alternate 등으로 애니매이션 만들 수 있음

- css 표준은 0 할때 단위를 적으면 안됨! w3c validator 습관적으로 돌려보자!

- border radius의 텍스트는 원래 그 위치에 있기에 심하면 원래 텍스트가 튀어나올수도 있따

****모던 CSS 원리와 어떻게 응용? 조합이 올드한 css와 어케 조합되는지? 알아보자****

# 2. 모던 박스모델과 포지션 모델

- 박스 쉐도우로 그린것이 빠른 이유?

  => 랜더링 시스템 작동 시 지오메트리 작동 후 프레임웤이 칠하는데 박스쉐도우는 지오메트리에 관여를 안함! 프레그먼트 에만 관여! 그래서 박스쉐도우 왔다갔다는 돔구조나 지오메트리에 관여안함

  현대 브라우저는 프레그먼트 점 찍느것을 cpu가 안하고 gpu에 미뤄서 순식간에 됨!

  박스쉐도우 쓰면 부하를 주지않음!!!!

  최근 그림칠하는 css 모듈들은 지오메트리 안건드리고 gpu로 처리하려함! 그 특성을 이해해야 좋아용!

## 3. POSITION의 absolute

position의 fixed는 브라우저에서는 잘 안쓰고 모바일에서 큰 역할 함

스크롤이 컸는데 점점 작아지는것? div에 스크롤 y를 거는것은 초보! 엄청 느려! ->오버플로우 y 스크롤로 해결안됨

=> 이때 픽시드로 해결! 현재 보고있는 돔이 얼만큼 스트롤 되는지? 윈도우 스크롤탭으로 얻고 그걸 캐시잡고 지금 보고있는것을 fixed로 얼려버리고 스크롤 탑만큼 주고 밀어내서 얼리면 그다음번 div가 와서 그다음 div의 크기가 body의 스크롤 크기를 먹고 복원 시fixed에서 다시 스크롤로 만들어주고 스크롤 탑을 아까 기억했던것 까지 유지! 메인 스크롤바 유지하면서 여러 탭을 쓰는 스킬!! 허나 여기에도 문제가 있옹

### CARET POSITION & OFFSET

caretpsotion? 삽입된? 때려넣는것? 눈에 안보이지만 캐러포지션 기반으로 오프셋 계산한다는것

### 3.1 OFFSET 이란?

- 어떤 기준이 있는데 그 기준으로부터 얼만큼 차이 나는가 ? , 기준으로 부터 얼만큼 차이나는가!!!!

- 그림그리는데 오프셋 쓰는 이유는? 분할정복, 사용자가 부분적 이해하기 편하게 하기 위해서

- 오프셋 또한 돔 구조는 따라가지 않고 오프셋 parent를 얻는 방법에 달려있음!

- offset parent가 누군지 알아야 offset을 사용 가능!

- offset의 parent 검사!

  - 1. NULL

       1. root,html,body
       2. position:fixed
       3. out of dom tree

       offset null 이면 전멸! 아무것도없어! 기준이 없기 때문!

    2. RECURSIVE SEARCH

       1. offset이 있으니 돔트리 위로 올라가며 찾음
       2. parent.postion:fixed =NULL => fixed에 거리면 null이야
       3. parent.position:istatic = ok
       4. body = ok
       5. TD, TH, TABLE = ok 반드시 태그여야함 디스플레이 속성으론 안됨!
       6. PARENT.PARENT CONTINUE 부모위에 부모있으면 계속 찾음

   

- 위의 8가지로 찾음

- offset 값은 읽기 전용 => css랜더링의 결과!

- offset값 변경 불가



![img](https://blog.kakaocdn.net/dn/ecidHx/btqJQIBHVkz/6sRo2IxXKsopRJ4gzMy681/img.png)



 

offset 값 알아야 하는이유?

이때까지 명령 추상적으로 내림! 고로 우리가 명령을 내린 다양한 추상적인 내용의 결과를 알고싶을 때 offset 값을 뜯어보는것!

- offset 값 알려 할 때마다 reflow를 하기 떄문에 offset값은 최대한 보지 말자! 부를꺼면 한번에 몰아서 봐라!

- 앱솔루트에서 기본값은 오프셋 탑이아니고 그냥 자기를 포함한 경계면이 경계선이됨!

  이 때 기본값이 아닌 숫자를 주면 오프셋을 기준으로 이동함!!

- 앱솔루트 탑을줄때는 숫자를 표시! 기본값 줄꺼면 그냥 nomal flow가 나음

 



# OBJECT MODEL

****CSSOM(CSS 오브젝트 모델), absolute position****

- 룰은 셀렉터와 내용으로 돼어있음 ex) .test{background:#ff0}

- const el = document.getElementById("s"); :DOM element

  const sheet = el.sheet; 시트 불러오면 style 시트를 대체하는 객체가됨 더이상 엘리멘트가 아니고 객체가됨

  const rules = sheet.cssRules; 로 룰 얻을 수 있음

  cosnt rule = rules[0]; 룰 얻을 수 있음

  console.log(rule.selectorText); => .test

  console.log(rule.style.background) => rgb();

  자바스크립트에서 sheet.deleteRule , sheet.insertRule 등 css를 만들었다 지울 수 있따

- CSS쓰면 생기는 3가지 문제!

  CSS free compiler로 해결하지만 이것들로 해결하면 용량이 너무 커짐! 교집합이나 합리적인게 아니고 합집합을 만들어 내기 때문!!

  객체모델 이해 있으면 룰 줄이거나 최적화 가능! 도구 도움 안받아도! 프리컴파일 해서 출력한거 받아서 넣으면 줄여줌! 자기만의 컴파일 만들기도 가능

### 문제 1. VENDER PREFIX

브라우저가 업데이트 되면서 vender prefix 붙여야되는데 업데이트되면서 vender prefix가 사라지는경우도, 붙이면 안되는경우도 생김

1. 밴더 프리픽스는 컴파일 타임에 브라우저 알아낼 수 없고 런타임에만 알 수 있어서 런타임에서 조사해서 붙여넣어야함

2. 지원하지 않는 기능 어떻게 처리?

   우아한 실패이며 그것만 안되게 처리!

3. hierachy optimaze

   sheet.disabled =true 하면 끌 수 있음

   css 전부 .class 이름으로 적용하면 되게 빨라짐 => hierachy가 없어지기 떄문 그러나 관리적으로 좀 힘듬

   dom 구조와 밀접한 셀렉터 > > 여러개쓰면 추가,수정 시 힘들기 때문에 돔 구조와 독립적으로 짜는게 유리!

   위 세개 해결하기 위한 호환성 라이브러리 만들것임!!

   # CLASSES

   STYLE(cssstyleDeclare) <- RULE(css rule) <- CSS(stylesheet) 화살표는 알고 있따는 의미

   # tip.es6

   화살표함수! 인자를 하나 받는 경우 인자자리 괄호 생략가능 _ 는 정당한 변수 이름

   끝에 const a = (_ => {})(); 하면 익명함수 호출과 같은 효과!

   some은 true까지 돌아감

   Proxy : 생성자 외 아무 속성도 없지만 return new proxy(this. trap) 하면

   함정에 빠져서 먼저 걸림

   weakMap => map과의 차이점은 위크맵은 키로 객체를 넣을 수 있음! ( 그냥 map은 문자열)

# css랜더링 4

# TransForm3D & scss & compass

## 1. post process

그래픽 파이프라인 지오메트리(리플로우), 프레그먼트(리페인트)를 배움

tip. 리플로우 시 전부 리페인트 해야해서 비용이 쌤

위의 두가지 과정 말고 post process 라는 그래픽 파이프라인이 있다.

- 리플로우,리페인트 후 바로 칠하지 않고 한번 더 칠할 수 있는 기회를 주는 고정

- geometry -> fragment -> postprocess

- post process는 geometry와 fragment에 영향을 끼치지 않음.

- post process는 버퍼라는 개념이 필요! i5.5 이후 버퍼개념을 만들어 모든 브라우저는 버퍼를 이용해서 그림! (2차원 배열)

- gpu는 cpu가 만들어낸 이미지를 gpu에 올려줘야 그림을 그릴 수 있음! 둘 사이에 강이 흐르는 느낌

- 모던 브라우저는 cpu이용 geometry, fragment 만들어 가공한 버퍼를 gpu에 넘겨줘서 gpu에서 post process를 처리! -> 현재의 브라우저

  -> 우리가 사용하는 css일부는 cpu사용하거나 gpu사용함! cpu gpu 프로파일링 보면서 조율하는것이 좋아

- css에서 3d관련은 전부 gpu 즉 post process에서 처리함 3d주기전과 3d 준 후 화면은 상관x

### 1-1. perspective

- 원근법, 크게주면 작게보임, 어디를 보고있어?

### 1-2 transform-style

- 변형 시킬때 무슨 축을 기준으로 변형 시킬껀데?

tip. 일부러 3d속성 주는경우도 있따 rotation : 0 으로 이그림을 gpu가 그리게 함으로써 많이 사용되는 기법이다! (gpu로 분산!)

 이미지 잘라서 쓰면 여러개 안넣고 하나만 넣어도 돼서 좋다

- 3d에서 면은 face라함 surface가 아니더라
- 이미지 소스를 텍스쳐라함!
- 3d에서는 아틀라스라함( 하나 텍스처가 여러개 텍스처라 하는것) css에서는 스프라이트
- 면부터보면 페이스(드럼통이 될 것들의 면들)있고 페이스모아 매쉬(드럼통)가됨
- 아틀라스 한장을 모든 페이스가 공유 그래서 .drum{background:url('http://keithclark.co.uk/labs/css-fps/drum2.png')} 이런식으로 공유

## 2. SASS

function이 아니고mixin이라고 부름 mixin은 css stylㅁe set 전체가 return됨

return은 css 전부를 리턴해줘서 csstext처럼 리턴해줌!





#  semantic web & css query

1. 검색엔진을 위해 html은 의미론적으로! 머신에 최적화하게! 기계에 친하게!
2. 시멘틱 웹 제작 후 css는 어떻게 만들어야할까? 에 대한 강의!

### DOM

의미를 갖도록 태깅

장식용 태그x

화면에 어떻게 보이는지 확인X

시간을 표현? -> time 태그

제목 표현? ->title태그

- 더 이상화면의 구성요소로 돔을 알 수 없음

### CSS selector

DOM의 구조에 밀접하게 선택

어떻게 작성하냐에 따라 DOM과 CSS 연결이 달라짐!

### CSS

의미와 무관한 스타일

# 1. CSS selector

1. DOM을 스타일에 맞춰 제작하는것이 문제

2. 1번의 문제로 인하여 태그의 변화가 스타일을 깨먹음, 추가 시 태그가 깨짐

   -> 유지보수 불가능한 html과 css가 만들어짐 css때문에 html을 고칠 수 없는 경우가 생겨!

   해결방법 -> selector도 semantic으로 가자! selector도 오직 class만 쓰면 사이트 개편이 쉬워짐!

### Css attribute selector

해당 엘리먼트의 속성을 기반으로 엘리먼트를 선택할 수 있게 해주는 스펙

![CSS Attribute Selector — TutorialBrain](https://i0.wp.com/www.tutorialbrain.com/wp-content/uploads/2019/03/Attribute-Selectors.png?fit=1920%2C1080&ssl=1)



![img](https://blog.kakaocdn.net/dn/eidlfE/btqKOCs0PBS/wFt06V6PTEXUPpIf1A9l30/img.png)



 

1. 속성이 존재함
2. 값과 일치
3. 일치하거나 뒤에 -가 붙을때
4. 공백으로 구분된 단어로 포함되면 일치
5. 값으로 끝날 때
6. 값이 포함될 때
7. 값으로 시작할 때
8. [(ex) i ] 대소문 구분 안함

### 1.2 query style selector

sql처럼 쿼리문처럼

base selector[field conditions] [..] [..] 라고생각

## 2. html5 microdata

html5에 마이크로데이터라고 가장 간단한 포멧들을 배포함

itemscope 적용 범위 설정

itemtype 스키마 설정

itemid 특정 id부여

itemprop 속성명

content 비가시적일 때 값을 설정

value 가시적인 값이 원하는 값이 아닐때

itemref scope계층구조 안에 없을 때

http://schema.org/WebPage



![img](https://blog.kakaocdn.net/dn/y73b6/btqKykgMtN4/I7FtrvwXbqL3uP2ljUMmN1/img.png)

![img](https://blog.kakaocdn.net/dn/IxxLY/btqKOAIJSuY/SZNuTBONWVJgTrwDgCeH71/img.png)



w3c벨리데이터 통과를위해

html5 dataset 사용

http://www.w3.org/TR/html5/dom.html#dom-dataset

ex) <div data-id="hika"> </div> 이런식으로 -로 정의하면 된다.

ex) console.log(div.dataset.id);

ex)div data-member-id='asf'

ex)console.log(div.dataset.memberId); -가 camelCase로 바뀜

id나 class는 디자인을 위해 비어두자! 우리는 의미론적인 코딩



![img](https://blog.kakaocdn.net/dn/d2mpiA/btqKGkObJTw/KsJNExGJcnq9crobxQOePk/img.png)



#  Display model

https://drafts.csswg.org/css-display

## 1. display group

outside | inside | listiten | internal | box | legacy

디스플레이 모든 속성은 지오메트리 계산하는 알고리즘과 같다!

### 1.1 outside

normal flow

[ block | inline | run-in ]

### 1.2 Listitem

List-item

tip. tr td는 태그자체에 표처럼 그려지는 로직 내장되어있음!

### 1.3 BOX

contents | none

br,wbr,meter ,pprogress,canvas,embed,object,audio,iframe,img,video,frame,frameset,input,textarea,slelct,legend,button,details,fieldse

원래 html은 box로 그리는데 box를 버리고 native로 그리자?

contents라는 디스플레이 기본값 가지고있고, 자기 박스 무시하고 이 위의 일부인것 처럼 다시그리는것

한꺼풀 까지는느낌? 부모하나 깔때 contents를 씀

태그적인 독립적인 요소 시맨틱이지만 레이아웃 상 승격시키고 싶을떄 컨탠츠 요소를 씀!

### 1.4 INSIDE

contens layout

FLOW | FLOW-ROOT | TABLE | FLEX | GRID | SUBGRID | RUBY

-> 사실 앞에 블럭이 전부 생략된것

### 1.4.1 legacy

inline contents layout

2개의 속성 디스플레이 작성 못하기때문에 생김

인라인과 조합하고 싶으면

inline-block | inline-table | inline-flex | inline-grid

 

### 1.5 internal

table & ruby

inside, outside는 전부 자기사정, 자기태그 기준! 하지만 그리드 영역 만들고 나서 안에 자식들은 그리드 아이템 아이템들 입장에서 지정해야하는 속성이 잇는데 이것들이 바로 인터널! 특정 레이아웃 시스템에 들어 왔을때 걔가 사용해야 하는 속성들이 인터널!

table-row-group | table-cell | ruby-base 등등

## 2. FLEXBOX

css felexible box layout module

https://drafts.csswg.org/css-flexbox-1/

flex-line 기본축이 x축으로 그려짐 main-axis라고 함

y 축으로 그려진것은 cross-axis

- flex-line은 플렉스 아이템들이 배치되는 가상의 선 플렉스 박스는 기본적으로 한 선만 커버하려 하는데 기본적으로 배치되려는 선의 방향이 메인축, 직교하는것이 크로스 축

****flex-direction****

- default , row-reverse, column(위에서 아래로, 메인축과 크로스축이 바뀜) collumn-reverse

****justify-content****

- 메인축에서 씀!
- flex-start | flex-end | center | space-between | space-around



![img](https://blog.kakaocdn.net/dn/vdcUG/btqKPT9e18B/znG6rXtKVWYqjbWnuWYTP1/img.png)



****align-items****

- flex-start | flex-end | center | baseline | stretch
- 크로스축으로 어떻게 정렬을 할까요? 묻느것



![img](https://blog.kakaocdn.net/dn/cmqMdO/btqKIoQtUpi/nyD0L6kx38YofVOricJQ70/img.png)



https://drafts.csswg.org/

## 3. FLEX-ITEM

- order이 있음

  < div display:flex>

  < div order:2> a</ div> 를 통해서 순서를 마음대로 바꿀 수 있음

- align-self 로 flex위치 바꿀 수 있따

- flex-grow
- flex-shrink
- flex-basis