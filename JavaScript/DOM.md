# DOM

브라우저의 렌더링 엔진은 HTML 문서를 파싱하여 브라우저가 이해할 수 있는 구조인 DOM을 생성한다. DOM은 HTML 문서의 계층적 구조와 정보를 표현하여 이를 제어할 수 있는 API 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다.



## 1. 노드

### 1.1 HTML 요소와 노드 객체

HTML 요소는 HTML 문서를 구성하는 개별적인 요소를 의미한다.

\<div class="greeting">Hello\</div>

- div: 시작태그
- class: 어트리뷰트 이름
- greeting: 어트리뷰트 값
- hello : 콘텐츠
- /div 종료태그

HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.

=> HTML요소의 어트리뷰트는 어트리뷰트 노드로, HTMl요소의 텍스트 콘텐츠는 텍스트 노드로



### 1.2 트리자료구조

트리 자료구조는 부모노드와 자식노드로 구성되어 노드 간의 계층적 구조를 표현하는 비선형 자료구조를 말한다. 노드 객체들로 구성된 트리 자료구조를 DOM이라 한다. 노드 객체의 트리로 구조화되어 있기 때문에 DOM을 DOM트리라고 부르기도 한다.



문서노드


요소노드  -> 어트리뷰트 노드


텍스트 노트



DOM은 위와 같은 객체의 계층구조로 구성되며, 노드 객체는 종류가 있고 상속 구조를 갖는다. 노드 객체는 총 12개의 종류가 있으며, 중료한 노드 타입은 위와같이 4가지이다.

```
위 네가지에 공백 텍스트 노드가 생략되어있음. HTML요소 사이의 개행이나 공백은 텍스트 노드가 됨.
```



1. 문서노드

   DOM 트리의 최상위에 존재하는 루트 노드로서 document객체를 가리킴

   document객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로서 전역 객체 window의 document프로퍼티에 바인딩 되어 있다. 따라서 문서 노드는 window.document 또는 document로 참조할 수 있다.

   문서 노드 즉 document 객체는 DOM 트리의 루트 노드이므로 DOM트리의 노드들에 접근하기 위한 진입점 역할을 담당한다. 요쇼, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.

2. 요소노드

   요소 노드는 HTML 요소를 가리키는 객체다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가지며, 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 표현한다 할 수 있다

3. 어트리뷰트 노드

   어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다. 어트리뷰트 노드는 어트리뷰트가 지정된 HTML요소의 요소 노드와 연결되어 있따.

   tip. 요소노드는 부모 노드와 연결되어 있지만, 어트리뷰트 노드는 부모 노드와 연결되어 있지 않기 때문에 어트리뷰트 노드에 접글해서 참조하거나 변경하려면 먼저 요소노드에 접근해야 한다.

4. 텍스트 노드

   HTML요소의 텍스트를 가리키는 객체 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할  수 있다.

   자식 노드를 가질 수 없는 리프노드이다 즉 텍스트 노드는 DOM 트리의 최종단계



### 1.3 노드 객체의 상속 구조

DOM은 HTML문서의 계층적 구조와 정보를 표현하며, 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조

DOM API를 통해 제어 가능

DOM을 구성하는 **노드 객체**는 ECMAScript 사양에 정의도니 표준 빌트인 객체가 아니라 브라우저 환경에서 추가으로 제공하는 호스트 객체이다.

노드객체도 프로토타입에 의한 상속 구조를 갖는다.

![노드 객체의 상속 구조](https://user-images.githubusercontent.com/68668924/107157729-27ae2800-69c9-11eb-9f9c-2e64377c5a1e.png) 

위 그림과 같이 모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다. 추가적으로 문서 노드는 Document, HTMLDocumnent 인터페이스를 상속 받고 어트리뷰트 노드는 attr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속받는다. 요소노드는 Element 인터페이스를 상속 받는다.





## 2. 요소 노드 취득

HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 하낟. 텍스트 노드는 요소 노드의 자식 노드이고 어트리뷰트 노드는 요소 노드와 연결되어 있기 떄문에 텍스트 노드나 어트리뷰트 노드를 조작하고자 할 때도 마찬가지다.

ex) h1요소의 텍스트 변경하고 싶은 경우.

=> DOM트리 내에 존재하는 h1요소 노드를 취득 해야한다.



### 2.1 id를 이용한 요소 노드 취득

Document.prototype.getElementById 메서드는 인수로 전달한 id어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환한다.

getElementById 메서드는 Document.prototype의 프로퍼티다. 따라서 반드시 문서 노드인 document를 토해 호출하여야 한다

```
const $elem = document.getElementById('banana');
$elem.style.color = 'red'
```

- id 값은 HTML 문서 내에서 유일한 값이어야 한다.

- class 어트리뷰트와 달리 공백 문자로 구분하여 여러개의 값을 가질 수 없다.

- 유일하지 않더라도 에러가 발생하지는 않는다. 이러한 경우 getElementById메서드는 인수로 전달도니 id값을 갖는 첫 번째 요소 노드만 반환한다. id가 존재하지 않을때는 null 반환
- HTML요소에 id 어트리뷰트를 부여하면 ```ex) \<div id = "foo">``` id값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 부수효과가 있다.

### 2.2 태그 이름을 이용한 요소 노드 획득

Document.prototype/Element.prototype.getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.

여러개 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환함.

