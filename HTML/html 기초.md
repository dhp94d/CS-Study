# html

hypertext Markup Language 하이퍼 텍스트는 사용자의 선택에 따라 특정한 정보와 관련된 부분으로 이동할 수 있게 조직화된 문서를 의미

1. 의미론적 html 작성방법과 기초 배우기
2. 페이지를 섹션으로 나누는것과 dom 을 올바르게 구조화 하는방법
3. 최소 5개의 html 페이지 만들기 - 구조화에 집중하기

- ------

- h
- 제목 입력할때 사용하는 제목 글자 태그..!

- h는 header 의미하며 크기 및 우선순위를 나타냅니다.

-  

- p
- paragraph 태그의 줄임말.

- p 태그를 사용 시 하나의 단락이 만들어짐.

- ------

- h
- 제목 입력할때 사용하는 제목 글자 태그..!

- h는 header 의미하며 크기 및 우선순위를 나타냅니다.

- ------

- br,hr
- br 개행, hr 수평 줄

- ------

- a
- 앵커태그,(html이 조직화된 문서 형태를 가질 수 있는 이유!

- 서로 다른 웹 페이지 사이를 이동하거나 웹 페이지 내부에서 특정한 위치로 이동할 때 사용하는 태그 (a태그의 href 속성>

- a 태그는 본래 가지고 있는 하이퍼링크 기능을 제거하고 사용하는 경우도 있는데 웹 표준에 따르려면 a 태그에 href 속성이
  반드시 입력 되어야 하기 때문에 웹표준을 지키면서 이동하지 않는 a 태그를 만들 때는 href 속성에 #을 입력한다! 이를 빈링
  크라고 한다 href="#"

- 페이지 내부 이동, 원하는 태그에 id 부여 후 a 태그의 href속성에 #아이디 형태의 문자열 입력 이때 아이디 속성 중복 시
  먼저 나오는 태그로 이동 하지만 웹 표준에 어긋나!

- ------

- 목록태그 ul, ol, li
- ul -순서 x , ol- 순서 o, li- 목록의 요소!

- ------

- 정의요소 dl, dt, dd
- dl- 정의 목록 태그, dt 정의 용어 태그, dd 정의 설명 태그

- ------

- 테이블 태그 tr, th ,td
- tr- 표 내부 행 th 표 내부의 제목 셀 ,td- 행 내부의 일반 셀

- border 표의 두께 지정 ex) table border = "1"

- rowspan, colspan 셀의 너비, 높이 지정 td,th와 묶어 씀

- ------

- 이미지 태그
- img / src(이미지 경로),alt(이미지 x시 글자 지정), witdh, height

- placehold.it에서 원하느 크기 이미지 제공해주는 사이트가 있다. 아직 이미지 미정 시 사용

- ------

- 입력 양식 태그
- form 태그 이용해 입력 양식 생성

- 입력 양식 안에는 input 태그 입력 타입등 설정(input 에 다양한 태그 속성이 있으니 검색해서 공부) label 태그는 input 태그를 설명하는데 사용

- action 입력 데이터 전달 위치 설정, method 입력 데이터 전달 방식 설정
  form 태그에 지정된 action 속성의 장소로 method속성에 적힌 방식으로 전달

- form.method 의 get은 주소에 데이터 입력해서 보내는 방식, post는 주소가 변경x 택배를 붙여 전송하는 방식

- 

- fieldset, legend 태그 legend 태그는 fieldeset 태그 안에만 사용가능! legend 사용해 입력 양식을 설명

- ------

- 공간 분할 태그
- div, block 형식으로 공간 분할, span inline 형식으로 공간 분할

- ------

## html 시멘틱 구조 태그

html5의 가장 큰 변화를 시맨틱 태크라고말한다. html5를 시맨틱 웹 페이자라 말하곤 한다
검색 엔진은 어떠한 태그가 어떠한 기능을 하는지 분별 불가, 웹 페이지에서 데이터 효율적으로 파싱 불가 이를 해결하고자
특정한 태그에 의미를 ㅜ여해서 웹 페이지를 만드는 시도가 시작 이를 시맨틱 웹 페이지





- main
- 해당 페이지의 main 콘텐츠를 나타냄
  main 요소는 한 페이지에서 한번만 사용 가능

- hgroup
- 제목과 부제목을 묶는 요소, html5 표준에서는 최종 제외
  \- 사이트의 로고나 제목, 메뉴, 소개 정보 등과 같이 머리말에 놓이는 내용을 담는다. (네이버나 다음같이 상단에 로고 제목 등등)

- headr
- 헤더를 의미 , 머리말을 나타내는 요소

- nav
- 내비게이션을 의미 ,메뉴 부분을 나타내는 요소
  \- 일반적으로 웹 페이지의 상단에 적용된다. (쉽게 말해 메뉴바들을 보통 nav태그를 사용합니다.)

- aside
- 사이드에 위치하는 공간을 의미 ,좌우측의 사이드바를 나타내는 요소
  \- 주요 콘텐츠 이외에 남아 있는 콘텐츠 등을 나타낸다.
  \- 웹 페이지의 사이드 바 영역 등을 지정하는데 사용될 수 있다.
  양옆을 지정해줄때 사용합니다. 홈페이지에서는 사이드바에 사용

- section
- 여러 중심 내용을 감싸는 공간을 의미 ,제목별로 나눌 수 있는 요소

- article
- 글자가 많이 들어가는 부분을 의미 ,개별 콘텐츠를 나타내는 요소

- footer
- 푸터를 의미 ,제작자의 정보나 저작권의 정보를 나타내는 요소
  \- 제작자의 정보나 저작권 정보 등과 같이 꼬리말에 놓이는 내용을 담는다.(홈페이지 하단에 나오는 정보들...)