# CORS

참조

- https://developer.mozilla.org/ko/docs/Web/HTTP/CORS

이 글의 대상

- 웹 관리자, 서버 개발자, 프론트엔드 개발자. 
  - 최신 브라우저는 헤더와 정책 집행을 포함한 클라이언트 측 교차 출처 공유를 처리합니다. 그러나 CORS 표준에 맞춘다는 것은 서버에서도 새로운 요청과 응답 헤더를 처리해야 한다는 것입니다. 

배경지식

- 출처

  웹 콘텐츠의 출처는 접근할 때 사용하는 URL의 스킴(프로토콜, 호스트(도메인)), 포트로 정의됩니다. 두 객체의 스킴, 호스트, 포트가 모두 일치하는 경우 같은 출처를 가졌다고 말합니다. 일부 작업은 동일 출처 콘텐츠로 제한되나, CORS를 통해 제한을 해제할 수 있습니다.

  ![image](https://user-images.githubusercontent.com/68668924/107903198-ecdd5e80-6f8b-11eb-8449-2519e4553e46.png) 

  

### CORS

교차 출처 리소스 공유(Cross)는 추가 HTTP 헤더를 사용하여, 한 출처에서 실행중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다. 웹 애플리케이션은 리소스가 자신의 출처(도메인, 프로토콜, 포트)와 다들 때 교차 출처 HTTP 요청을 실행합니다.



CORS 요청의 예시

```
https://domain-a.com의 프론트엔드 JavaScript 코드가 XMLHttpRequest를 사용하여 https://domain-b.com/data.json을 요청하는 경우
```



보안 상의 이유로, 브라우저는 스크립트에서 시작한 교차 출처 HTTP 요청을 제한합니다. 예를들어, XMLHttpRequest와 Fetch API는 동일 출처 정책을 따릅니다. 즉, 이 API를사용하는 웹 애플리케이션은 자신의 출처와 동일한 리소스만 불러올 수 있으며, 다른 출처의 리소스를 불러오려면 그 출처에서 올바른 CORS 헤더를 포함한 응답을 반환해야 합니다.

![image](https://user-images.githubusercontent.com/68668924/107903372-6bd29700-6f8c-11eb-9954-8e0e3db1237a.png) 

CORS 체제는 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원합니다. 최신 브라우저는 `XMLHttpRequest` 또는 [Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)와 같은 API에서 CORS를 사용하여 교차 출처 HTTP 요청의 위험을 완화합니다.



### 어떤 요청이 CORS를 사용하나요

- XMLHttpRequest와 Fetch API 호출
- 웹 폰트(CSS 내 @font-face에서 교차 도메인 폰트 사용 시)
- WebGL 텍스처
- drawImage()를 사용해 캔버스에 그린 이미지/비디오 프레임
- 이미지로부터 추출하는 CSS Shapes