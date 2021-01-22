# HTTP란 무엇인가

**목차**

1. [웹 개발에 있어 필수적으로 알아야할 HTTP 정보](#1-웹-개발에-있어-필수적으로-알아야할-http-정보)
2. [HTTP 메서드](#2-http-메서드)
3. [HTTP 상태 코드](#3-http-상태-코드)
4. [알아둬야 할 HTTP 공통 & 요청 헤더](#4-알아둬야-할-http-공통-&-요청-헤더)
5. [HTTP 쿠키 & 캐시 헤더](#5-http-쿠키-&-캐시-헤더)
6. [HTTP X헤더](#6-http-x헤더 ) 

 HTTP(Hyper Text Transfer Protocol)은 **인터넷에서 데이터를 주고 받을 수 있는 프로토콜** 입니다.

여기서 프로토콜은 규칙이라 생각하면 되며, 이렇게 규칙을 정해 두었기 때문에 서로 정보를 교환할 수 있게 되었습니다.

```tip. HTTP만 잘 알아도 CORS, CORB 같은 에러들을 손쉽게 처리 가능!```



## 1. 웹 개발에 있어 필수적으로 알아야할 HTTP 정보

**목표: 크롬 개발자 도구 네트워크 탭의 정보를 해석할 정도의 지식을 얻기**

**배경 지식**: 서버의 역할은 요청에 대한 응답을 보내주는것.



![image](https://user-images.githubusercontent.com/68668924/105489977-72585080-5cf7-11eb-97d7-a2914685fcdc.png)



**요청**  (HTTP/1.1 기준으로 설명합니다.)

 위 사진은 네이버 서버에게 naver.com에 대한 정보를 달라고 요청했습니다. 요청을 보낼 때는 요청에 대한 정보를 담아 서버로 보냅니다.

 서버도 응답할 떄 응답에 대한 정보를 담아 클라이언트로 보냅니다. 이런 정보가 담긴 메세지를 HTTP 메세지라고 합니다. HTTP메세지는 시작줄, 헤더, 본문으로 구성됩니다. 실제 요청 HTTP 메세지를 분석 해 보겠습니다.

GET https://www.naver.com HTTP/1.1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
Upgrade-Insecure-Requests: 1

(본문 없음)

GET은 HTTP 메서드이며 이후 자세히 설명하겠습니다.

https://www.naver.com은 주소이며, HTTP/1.1은 HTTP 버전입니다. 즉 요청 메세지의 시작줄은 

[ 메서드 | 주소 | 버전] 으로 구성되어 있습니다.

두 번째 줄 부터는 헤더입니다. 요청에 대한 정보를 담고 있습니다. User-Agent, Upgrade-Insecure-Requests 등등이 헤더에 해당됩니다.

헤더에서 한 줄 띄고 본문이 시작됩니다. 본문은 요청 할 때 함꼐 보낼 데이터를 담는 부분입니다. 지금은 단순히 주소로만 요청을 보내고 있기 때문에 따로 데이터를 담아 보내지는 않았습니다.



**응답**

HTTP/1.1 200 OK
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 35653
Content-Type: text/html;

\<!DOCTYPE html><html lang="ko" data-reactroot=""><head><title...



요청과 마찬가지로 시작줄, 헤더, 본문 으로 구성되어 있습니다.

첫 줄은 버전 상태코드 상태 메세지입니다. 200은 성공적인 요청이었다는 뜻입니다.

두 번째 줄 부터 헤더입니다. 응답에 대한 정보를 담고 있습니다.

이번에는 본문이 존재하는데, 보통 데이터를 요청하고, 응답 메세지에는 요청한 데이터를 담아서 보내주기 떄문에 응답 메세지에 HTML이 담겨 있습니다. 이 HTML을 받아 브라우저가 화면에 렌더링 합니다.



## 2. HTTP 메서드

GET www.naver.com HTTP/1.1

GET은 단어 의미와 같이 실제로 인터넷 주소창에 주소를 치는 행위는 해당 주소에 대해 GET 요청을 하는 것입니다.

위와 같이 요청을 할 떄 주소와 함꼐 HTTP 메서드를 같이 보낼 수 있으며 자주 쓰는 HTTP 메서드는 GET, POST, PUT, PATCH, DELETE 정도가 있습니다.(이외에 잘안쓰는 HEAD, OPTIONS, TRACE, CONNECT)

이와 같이 주소를 자원이라 보고 메서드를 동사라고 보는 개발 방식이 바로 REST 입니다.

예를들면 GET/user라고 하면 사용자의 정보를 가져오는것이며, DELETE/ user/5라고 요청을 보내면 아이디가 5인 사용자를 제거하라는 뜻이 되는 셈입니다.



get과 delete를 제외한 post put patch는 요청을 보낼 때 본문을 같이 보낼 수 있는데 

![image](https://user-images.githubusercontent.com/68668924/105491301-6ff6f600-5cf9-11eb-9de2-4f2391176dd3.png)

위와 같이 Payload 부분이 본문 부분 입니다. 위 이미지는 크롬이 보기 좋게 표시한 것이며 실제로는 아래와 같이 요청이 전달 됩니다.



POST myfit.xyz/male/upper HTTP/1.1
Accept-encoding: gzip
Accept-language: ko-KR
...

{data:{type: "UPPER_ANALYZE_REQUEST", brand: "MYFIT" ... }



서버는 저 본문을 받아 파싱한 후 사용하게 됩니다.

GET에 데이터를 담아 보내고 싶다면, 위 이미지의 query string parameters를 사용하게 되는데, 예를들면

myfit.xyz/male/upper?test=false와 같이 주소 뒤에 ?를 붙인 후 키=값&키=값 형식으로 데이터를 보냅니다. GET 요청은 본문 대신 주소에 쿼리스트링으로 데이터를 동봉하는 것입니다.



### 자주 사용하지 않는 메서드

**HEAD**

- HEAD는 헤더만 가져올 때 사용합니다. 단 헤더가 GET요청의 헤더입니다. GET .... HTTP/1.1요청을 보내고 헤더만 가져오는 것과 동일합니다.

**OPTIONS**

- CORS 문제에서 많이 나오게 되는데, OPTIONS는 서버가 어떤 메서드를 원하는지 알아볼 떄 사용됩니다.  OPTIONS https://myfit.xyz HTTP/1.1 요청을 보내면 GET과 HEAD만 오지만, OPTIONS https://myfit.xyz/modal/order HTTP/1.1 요청을 보내면 GET, HEAD, POST가 옵니다. /modal/order는 실제로 POST 요청도 지원합니다.
- CORS상황에서는 다른 도메인 서버에 먼저 OPTIONS 요청을 날린 뒤 , 그 서버가 요청을 허용하면 실제 요청(GET, POST등)을 날립니다. OPTIONS 요청은 간단하게 서버에 실제 요청을 보내기 전에 서버를 테스트해보는 용도라고 보면 됩니다.

**TEACE & CONNECT**

- 이 둘은 진짜 쓰이는 곳에서만 쓰이면 trace는 핑퐁 테스트 connect는 양방향 통신을 할떄 쓰입니다.





## HTTP 상태 코드



### 1XX (정보)

- 100은 서버가 요청의 일부를 받았으며 나머지 요청을 더 기다리고 있다는 것을 나타냅니다. 101은 http에서 https같이 프로토콜 전환이 일어 났을 떄 전환이 승인되었음을 알려줍니다. 

### 2XXX (성공)

- 200은 성공을 의미합니다.

- 201은 새로운 컨텐츠 만들기 성공했을 떄 사용합니다. ex) 새로운 포스트, 새로운 덧글, POST 메소드에 대한 응답으로 잘 어울림
- 204는 요청이 성공 했지만 응답할 콘텐츠가 없을 경우 
- 206은 스트리밍의경우와 같이 요청에 대한 응답으로 일부만 먼저 전송한 경우 보내줍니다.



### 3XX (리다이렉션)

- 300번대는 페이지 이동 시킬 떄 사용합니다. 
- 301 페이지는 영구적으로 주소가 바뀌었을 경우, 301 코드와 함께 새로운 주소로 이동시킵니다. 새로운 주소는 캐싱되기 때문에 속도가 빨라집니다.
- 302는 임시적으로 주소가 바뀌었을 경우 사용합니다. 로그인 후 메인페이지로 이동한다던가 할때 사용하여도 좋습니다. 대부분의 리다이렉트는 302코드를 사용! 영구적으로 주소를 바꾸는 경우는 적기 때문
- 304는 이전에 방문했을 떄의 요청 결과와 다르지 않을 경우 표시! 즉 캐시된 페이지를 그대로 사용합니다.
- 307은 임시로 페이지를 리다이렉트 합니다.



### 4XX 클라이언트 오류

- 400은 서버가 요청을 이해하지 못할 경우 발생, 올바른 요청 보냈는지 검사 요망
- 401은 로그인 하지 않아 페이지 열 권한이 없는것
- 403은 금지된 페이지, (관리자 페이지)
- 404는 찾을 수 없는 페이지, 주소를 잘못 입력하거나 하는경우, 403인 경우 404를 전송하는 경우도 있음 403은 페이지가 있는것이기 때문에 해커들의 공격 위험이 있음
- 408은 요청 시간 초과
- 409는 서버가 요청을 처리하는 과정에서 충돌이 발생한 경우 ex)회원가입 했는데 이미 사용하고 있는 아이디
- 410은 영구적으로 사용할 수 없는 페이지
- 451은 warning.or.kr처럼 법적으로 막힌 페이지



### 5XX 서버 오류

- 내부 서버에러가 날 때 전송되는 오류
- 501 서버에 아직 해당 요청 처리하는 기능을 만들지 않았을 때
- 502 서버로 가는 요청이 중간에서 유실된 경우
- 서버가 터졌거나, 유지보수 중일 때 (하지만 유지보수 중일떄는 503보다는 유지보수 중이라는 페이지 주는것이 좋음)
- 504는 서버 게이트웨이에 문제가 생겨 시간 초과
- 505는 HTTP버전이 달라 요청을 처리할 수 없다는 것



## 3. 알아둬야 할 HTTP 공통 & 응답 & 요청 헤더

요청과 응답은 메세지 형식으로 오고 메시지는 시작줄, 헤더, 본문으로 구성되어 있는데 헤더와 요청의 헤더를 알아보겠습니다.



### 공통 헤더

요청과 응답에 모두 사용되는 헤더입니다. 이 중에서 Content 시리즈는 엔티티 헤더라고 불립니다.



**Date**

- HTTP 메세지가 만들어진 시각입니다. 자동으로 만들어집니다

- Date: Thu, 12 Jul 2018 03:12:27 GMT

  

**Connection**

- Connection: keep-alive
- HTTP/2를 사용하지 않는다면 보통 HTTP/1.1을 사용하게 되는데 Connection은 기본적으로 keep-alive로 되어있는데 별 의미가 없어 HTTP/2에서는 사라졌습니다.



**Cache-Control**

- 중요하여서 추 후 설명



**Content-Length**

- 요청과 응답 메세지의 본문 크기를 바이트 단위로 표시해 줍니다. 메세지 크기에 따라 자동으로 만들어 집니다.
- Content-Length: 52



**Content-Type**

- Content-Type: text/html; charset=utf-8
- 콘텐츠의 타입(MIME)과 문자열 인코딩(urf-8 등) 을 명시할 수 있음. 
- 프론트엔드에서 서버로 데이터를 보낼 때는 text/html 대신 www-url-form-encoded와 같은 content-type이 됨

**Content-Language**

- 사용자의 언어를 뜻함 

  

**Content-Encoding**

- Content-Encoding: gzip, deflate

- 컨텐츠 압축된 방식, 응답 컨텐츠를 br, gzip, deflate등의 알고리즘으로 압축해서 보내면, 브라우저가 알아서 해체해서 사용함. 컨텐츠 용량이 줄어들기 때문에 압축을 권장, 요청이나 응답 전송속도가 증가하고 데이터 소모량도 줄어듬



### 요청 헤더

**HOST**

- 서버의 DNS 나타내는 부분입니다(포트 포함)
- HOST:www.naver.com



**User-Agent**

- HOST보다 더 유명한 헤더는 이 헤더이며, 현재 사용자가 어떤 클라이언트를 이용해 요청을 보냈는지 나옴
- User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36
- 헤더는 변경할 수 있으니 믿엉서는 안되지만 보편적으로 조작을 하지 않기 때문에 통계를 낼 떄 유리 또한 지원하지 않는 브라우저로 접속 시 지원하지 않는다 표시하려 할 떄 용이



**Accept**

- Accept 헤더는 요청을 보낼 때 이런 타입의 데이터를 보내줬으면 좋겠다 명시할 떄 사용. 

  ex)Accept:text/html 을 보내면 HTML형식인 응답을 처리하겠다는 뜻

  , 를 사용하여 여러 타입을 동시에 적어줄 수 있고, *(와일드 카드)로 "텍스트이기만 하면 돼" 라고 적어줄 수 도 있음

- Accept은  Accept-Encoding, Accept-Charset, Accept-Language 등도 있으며 공통헤더의 Content 시리즈와 대응됨, Accept로 원하는 형식을 보내면 서버가 그에 맞춰 보내주면서 응답 헤더의 Content를 알맞게 설정함

**Authorization**

- 인증(JWT든 Bearer 토큰이든) 서버로 보낼 때 사용하는 헤더, APi 요청 같은 것을 할 떄 토큰이 없으면 거절 당하기 때문에 이 때 ,Authorization을 사용하면 된다. 보통 basic이나 Bearer 같은 토큰의 종류를 먼저 알리고 그 다음에 실제 토큰 문자를 적어 보냄



**Origin**

- POST 같은 요청을 보낼 때 요청이 어느 주소에서 시작되었는지 나타냄, 여기서 요청을 보낸 주소와 받는 주소가 다르면 CORS 문제가 발생하기도 함



**REFERER**

이 페이지 이전의 페이지 주소가 담겨있음. 이 헤더를 사용하면 어떤 페이지에서 지금 페이지로 들어왔는지 알 수있음 



### 응답 헤더

**Access-Control-Allow-Origin**

- 프론트엔드 개발자들에게 악명 높은 헤더이며, 요청을 보내는 프론트 주소와 받는 백엔드 주소가 다르면 CORS 에러가 발생! 이 때 서버에서 응답 메세지 Access-Control-Allow-Origin 헤더에 프론트 주소를 적어주어야 에러가 나지 않음.

  프로토콜, 서브도메인,도메인,포트 중 하나만 달라도 CORS 에러가 남.

  유사한 헤더로 Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Headers 등이 있습니다. Request랑 Allow에서 Method 단수 복수 주의하세요!

  CORS 요청 시에는 미리 OPTIONS 주소로 서버가 CORS를 허용하는지 물어보면 좋음

  Access-Control-Request-Method로 실제로 보내고자 하는 메서드를 알리고, Access-Control-Request-Headers로 실제로 보내고자 하는 헤더들을 알립니다. Allow 친구들은 Request에 대응되는 애들로, 서버가 허용하는 메서드와 헤더를 응답하는데 사용됩니다. Request랑 Allow가 일치하면 CORS 요청이 이루어지는 것이죠.

**Allow**

- Allow 헤더는 Access-Control-Allow-Methods랑 비슷하지만, CORS 요청 외에도 적용된다는 데에 차이가 있음. 즉 GET www.naver.com은 되고, POST www.naver.com은 허용하지 않는 경우, 405 Method Not Allowed 에러를 응답하면서 헤더로

  > Allow: GET

​      를 같이 보내면 됩니다. GET 요청만 받겠다는 뜻입니다.

**Content-Disposition**

- 응답 본문을 브라우저가 어떻게 표시해야 할지 알려주는 헤더입니다. inline인 경우 웹페이지 화면에 표시되고, attachment인 경우 다운로드됩니다.

> Content-Disposition: inline
> Content-Disposition: attachment; filename='filename.csv'

​	다운로드되길 원하는 파일은 attachment로 값을 설정하고, filename 옵션으로 파일명까지 지정해줄 수 있습니	다. 파일용 서버인 경우 이 태그를 자주 사용하게 될 것입니다.

**Location**

- 300번대 응답이나 201 Created 응답일 때 어느 페이지로 이동할지를 알려주는 헤더입니다.

> HTTP/1.1 302 Found
> Location: /

​	이런 응답이 왔다면 브라우저는 / 주소로 리다이렉트합니다.

**Content-Security-Policy**

다른 외부 파일들을 불러오는 경우, 차단할 소스와 불러올 소스를 여기에 명시할 수 있습니다. 하나의 웹 페이지는 다양한 외부 소스들을 불러옵니다. 이미지도 불러오고 script 태그로 자바스크립트 파일들도 불러옵니다. 폰트나 스타일, 아이프레임도 불러오고요. 하지만 해커들에 의해 원하지 않는 파일을 불러오게 될 수도 있습니다. 악성 코드가 담겨져있는 파일이라면 큰 일이 나겠죠. XSS 공격 같은 것이 하나의 예시입니다. 이럴 때 Content-Security-Policy로 허용할 외부 소스만 지정할 수 있습니다.

> Content-Security-Policy: default-src 'self'
> Content-Security-Policy: default-src https:
> Content-Security-Policy: default-src 'none'

self로 지정하면 자신의 도메인의 파일들만 가져올 수 있습니다. www.naver.com에서는 www.naver.com/logo.jpg를 가져올 수 있지만, www.daum.com/logo.jpg는 못 가져오는 것이죠. https:로 지정하면 https를 통해서만 파일을 가져올 수 있게 됩니다. 'none'으로 지정하면 가져올 수 없습니다.

default-src는 모든 외부 소스에 대해 적용되는 것이고요. 각각 따로 지정할 수도 있습니다. 두 개나 세 개 정도만 추려서 지정할 수도 있고요.

> Content-Security-Policy: font-src 'self'; script-src https://www.naver.com 'unsafe-inline'; img-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'

font-src, script-src, img-src, style-src, object-src 등이 있고, 소스 옵션으로는 도메인이나, https:, 'unsafe-inline'(인라인 태그 허용), 'unsafe-eval'(eval 함수 허용) 등이 있습니다



## 5. HTTP 쿠키 & 캐시 헤더

목표: 쿠키 & 캐시 전용 헤더를 알아보자

 웹 자원을 효율적으로 쓰기 위해서는 캐싱이 중요하며, 쿠키는 클라이언트와 서버 간에 데이터를 주고 받는 가장 간단한 방법중 하나입니다.



### 캐시

여기서 말하는 캐시는 개인 캐시 입니다. 브라우저에 응답으로 온 HTML이나 JSON 같은 데이터가 저장되어 나중에 서버에 요청을 보내지 않고도 브라우저에 저장된 응답을 사용할 수 있습니다.



보통 캐싱은 GET 요청에만 하며, 일반적으로 200(가져오기 성공), 301(다른 주소로 이동 후 가져옴), 404(가져올게 없음) 상태코드로 온 응답을 캐싱할 수 있습니다.



**Cache-Control**

Cache-Control: 변수

- no-store : 아무것도 캐시하지 않음
- no-cache : cache하지 말라는 뜻은 아님! 모든 캐시를 쓰기 전에 서버에 이 캐시 써도 되는지 물어보라는 뜻
- must-revalidate: 만료된 캐시만 서버에 확인을 받음
- public 또는 private : public이면 공유 캐시(또는중개 서버)에 저장해도 된다는것, private이면 브라우저 같은 특정 사용자 환경에만 저장하라는 뜻
- public, max-age=3600: 유효시간을 준것! 1시간이 지나면 이 응답 캐시는 만료됨
- 위 옵션들을 혼합해도 됨



**AGE**

- 캐시 응답 때 나타나는데, max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려줌 1분이 지나면 age:60



**Expires**

- 캐시컨트롤과 별개로 응답에 Expires를 줄 수 있음
- Expires: Thu, 26 Jul 2018 07:28:00 GMT
- 응답 컨텐츠가 언제 만료되는지를 나타내며 캐시 컨트롤에 max-age가 있는 경우 이 헤더는 무시됨



**Etag**

- HTTP 컨텐츠가 바뀌었는지를 검사할 수 있는 태그, 같은 주소의 자원이라도 컨텐츠가 달라졌다면 ETag가 다름
- ex) 응답 본문이 달라져서 Etag가 1234 -> 3456으로 바뀐다면 서버가 클라이언트가 응답 내용이 달라진것을 꺠닫고 캐시를 지우고 새로 컨텐츠를 내려받을 수 있게 됨



**If-None-Match**

- 서버보고 Etag가 달라졌는지 검사해서 다를 경우에만 컨텐츠를 새로 내려주라는 뜻 만약 Etag가 같다면 서버는 304 Not Modified를 응답해서 캐시를 그대로 사용함.



### 쿠키

쿠키는 브라우저에 저장되는 작은 데이터 조각으로, 임시 데이터 보관 또는 웹 페이지 개인화 등에 사용됩니다. 



**Set-Cookie**

- 서버에서 클라이언트한테 이런 쿠키를 저장하라고 명령하는 응답 헤더 입니다.

- Set-Cookie: 키=값; 옵션들
- Expires: 쿠키 만료 날짜를 알려줄 수 있습니다.
- Max-Age: 쿠키 수명을 알려줄 수 있습니다. Expires는 무시됩니다.
- Secure: https에서만 쿠키가 전송됩니다.
- HttpOnly: 자바스크립트에서 쿠키에 접근할 수 없습니다. XSS 요청을 막으려면 활성화해두는 것이 좋습니다.
- Domain: 도메인을 적어주면 도메인이 일치하는 요청에서만 쿠키가 전송됩니다. 가끔 도메인이 다른 쿠키들이 있는데, 이런 쿠키들은 써드 파티 쿠키로 여러분을 추적하고 있는 쿠키입니다. 구글이나 페이스북같은 곳이 써드 파티 쿠키를 적극적으로 사용합니다.
- Path: 패스를 적어주면 이 패스와 일치하는 요청 요청에서만 쿠키가 전송됩니다.

- Set-Cookie: zerocho=babo; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
- 쿠키는 XSS 공격과 CSRF 공격에 취약하기 떄문에 HttpOnly 옵션을 켜두고, 쿠키를 사용하는 요청은 서버 단에서 검증하는 로직을 꼭 마련해두는 것이 좋습니다.



**CooKie**

- 반대로 클라이언트가 서버한테 쿠키를 보낼줄 떄는 이 요청에 헤더를 담아 보냅니다.
- Cookie: 키=값; 키=값;
- 서버는 이 쿠키 헤더를 파싱해서 사용함. CSRF 공격 같은것을 막기 위해 서버는 쿠기가 제대로 된 상황에서 온 것인지 확인하는 로직을 갖추어야함



## 6. HTTP X헤더 

### X-Forwarded-For, X-Forwarded-Host, X-Forwarded-Proto

요청이 어디서부터 건너왔는지 알려주는 헤더입니다. 실제 세상에서는 클라이언트(요청) - 서버(응답)와 같은 2단 구조보다는 클라이언트(요청) - 중개 서버 - 중개 서버 - 중개 서버 - ... - 최종 서버(응답) 이런 다단 구조가 더 많습니다.

이 때 중개 서버를 거치면서 헤더들이 변조되고, 요청을 누가 보냈는지 애매해지기도 하는데요. X-Forwarded 헤더 시리즈는 원래 요청이 누구였는지를 밝혀줍니다(물론 이것도 조작할 수 있으니 완전히 믿어서는 안 됩니다).

> X-Forwarded-For: 1.2.3.4, 5.6.7.8, 9.10.11.12
> X-Forwarded-Host: www.zerocho.com
> X-Forwarded-Proto: https

For는 현재까지 거쳐온 서버의 IP에 대한 정보를 가지고 있습니다. 1.2.3.4가 원래 서버 아이피라면 나머지는 중개 서버 아이피가 됩니다. Host는 원래 서버의 호스트명이고요. Proto는 원래 서버의 프로토콜이 되죠.

사실 Forwarded 헤더가 표준 헤더입니다. 위 세 가지를 모두 처리할 수 있습니다.

> Forwarded: for=1.2.3.4; host=www.zerocho.com; proto=https; by=5.6.7.8, 9.10.11.12

### X-Frame-Options

frame, iframe, object 태그 안에서 페이지를 렌더링하는 것을 막을 수 있습니다. 여러분의 사이트가 frame, iframe, object를 안 쓴다면

> X-Frame-Options: DENY

로 막아두는게 보안에 좋습니다. 클릭재킹(내가 무언가를 눌렀는데, 실제로는 그게 아니라 다른 게 눌리는 해킹 방법)을 막을 수 있다고 하네요. 만약 여러분의 사이트 자체를 iframe 등으로 불러오는 경우에는

> X-Frame-Options: SAMEORIGIN

으로 자신의 페이지를 불러오는 것은 허용할 수 있습니다.

특정한 사이트 불러오는 것만 허용하고 싶다면

> X-Frame-Options: ALLOW-FROM https://www.zerocho.com

와 같이 명시해주면 됩니다.

### X-Content-Type-Options

서버에서 보내온 Content-Type 헤더가 잘못 설정되었다고 생각하는 경우, 브라우저는 자체적으로 컨텐츠 타입을 추론합니다. 예를 들어 분명히 css파일인데 Content-Type 헤더가 text/html인 경우, 브라우저가 text/css로 추론할 수도 있다는 뜻입니다. 하지만 이런 임의적 행동은 예상치 못한 행동이기 때문에 위험할 수 있습니다. 그럴 때는

> X-Content-Type-Options: nosniff

헤더를 서버에서 보내주어, 브라우저가 서버가 보낸 컨텐츠타입을 따르게 강제할 수 있습니다.







출처: https://www.zerocho.com