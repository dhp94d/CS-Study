
# Ajax(asynchronous JavaScript and XML)



## 1. Ajax란?

Ajax란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다.

Ajax는 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다. XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.

Ajax등장으로 전통적인 웹페이지의 단점을 보완하여

1. 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다. 따라서 화면이 순간적으로 깜박이는 현상이 발생하지 않는다.
3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.



## 2. JSON

JSON은 클라이언트와 서버간의 HTTP 통신을 위한 데이터 포맷이다. 자바스크립트에 종속되지 않은 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다.



### 표기 방식

JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.

````
{
	"name" : "Lee",
}
````

키는 반드시 큰따옴표로 묶고, 문자열 또한 큰 따음표로 묵어야한다.



### 2.1 JSON.stringify

JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화 해야하는데 이를 **직렬화** 라고한다.

ex) string {"name":"Lee}

Json.stringify(obj, null, 2);

string {

​	"name" : "Lee",

}



두번째 인수로는 함수를 넣어서 조정가능

ex) return typeof value === 'number' ? undefined : value;

number 이면 undefined로 제한 가능



Json.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환 가능!! 



### 2.2 JSON.parse

Json 포맷의 문자열을 객체로 변환함. 

서버로부터 클라이언트에 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 문자열을 객체화 해야하는데 이를 역직렬화라 한다.



## 3.XMLHttpRequest

브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLhttpRequest 객체를 사용한다. Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.



XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다. XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 브라우저 환경에서만 정상적으로 실행된다.

const xhr = new XMLHttpRequest();



### 3.1 XMLHttpRequest객체의 프로퍼티와 메서드

XMLHttpRequest객체는 다양한 프로퍼티와 메서드를 제공한다. 대표적인 프퍼티와 메서드는 다음과 같다. 

![image](https://user-images.githubusercontent.com/68668924/107595190-4d506100-6c57-11eb-853a-97b982d4e55d.png)
![image](https://user-images.githubusercontent.com/68668924/107595199-50e3e800-6c57-11eb-98a7-8852db043a1b.png)
![image](https://user-images.githubusercontent.com/68668924/107595202-52adab80-6c57-11eb-8e7c-5cf443cf4a02.png)



### 3.3 HTTP 요청 전송

HTTP 요청을 전송하는 경우 다음 순서를 따른다.



1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화 한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP요청의 헤더 값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

```
const xhr = new XMLHttpRequest();
xhr.open('GET', '/user');
xhr.setRequestHeader('content-type', 'application/json'); // 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정:json
xhr.send()
```



**open**

open 메서드는 서버에 전송할 HTTP 요청을 초기화한다. open 메서드를 호출하는 방법은 다음과 같다.

xhr.open(method, url[, async])

1. method: HTTP 요청 메서드(GET,POST,PUT,DELETE 등)
2. url: HTTP요청을 전송할 URL
3. async 비동기 요청 여부 옵션, 기본값은 true이며 비동기 방식으로 동작한다



**send**

open 메서드로 초기화된 HTTP 요청을 서버에 전송한다. 기본적으로 서버로 전송하는 데이터는 GET, POST 요청 메서드에 따라 전송 방식에 차이가 있다.



- GET

  데이터를 URL의 일부분인 쿼리 문자열로 서버에 전송한다.

- POST

  post요청의 경우 데이터(페이로드)를 요청 몸체에 담아 전송한다. ( 페이로드가 객체인 경우 반드시 JSON.stringify 메서드를 사용하여 직렬화 한다음 전달해야함)

HTTP 요청 메서드가 GET인경우 send 메서드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다.



**setRequestHeader**

특정 HTTP 요청의 헤더 값을 설정한다. 반드시 open 메서드 호출한 이우에 호출해야함.

자주사용하는 HTTP 요청 헤더인 Content-type은 요청 몸체에 담아 전송할 데이터의 MIME타입의 정보를 표현한다. 



자주사용되는 MIME 타입

| MIME 타입   | 서브 타입                                          |
| ----------- | -------------------------------------------------- |
| text        | text/plain, text/html, text/css, text/javascript   |
| application | application/json, application/x-www-form-urlencode |
| multipart   | multipart/formed-data                              |

HTTP 클라이언트가 서버에 요청할 때 서버가 응답할 데이터를 MIME 타입을 Accept 로 지정할 수 있다.

Accep헤더를 설정하지 않으며 send 메서드가 호출될 떄 Accept 헤더가 \*/*로 전송된다.



### HTTP 응답 처리

서버가 전송할 응답을 처리하려면 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야한다.



send 메서드를 통해 HTTP 요청을 서버에 전송하면 서버는 응답을 반호나한다. 하지만 언제 응답이 클라이언트에 도달알지는 알 수 없다. 따라서 readystatechange 이벤트를 통해 HTTP 요청의 현재 상태를 확인해야한다. readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 eradyState 프로퍼티가 변경될 때마다 발생한다.

load이벤트로 캐치해도 좋음 load이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생함. 따라서 load이벤트를 캐치하는경우 xhr.readyState가 XMLHttpRequest.DONE 인지 확인할 필요가 없다.