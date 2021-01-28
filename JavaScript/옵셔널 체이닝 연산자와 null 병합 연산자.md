# ES11(ECMAScript2020)



## 옵셔널 체이닝 연산자(?.)

 ?.는 좌항의 피연산자가 null또는 undefined인 경우 undefined를 반환하고 그렇지 않으면 우항으 ㅣ프로퍼티 참조를 이어갑니다.

**옵셔널 체이닝이 나오기 전**

도입되기 전에는 논리연산자 &&를 사용한 단축 평가를 통해 변수가 null또는 undefined인지 확인했습니다.

```
let elem =null;

// elem이 falsy 값이면 elem으로 평가되고, elem이 truthy값이면 elem.value로 평가된다.
let value = elem && elem.value;
console.log(value) //null
```

 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 Falsy값(false, undefined, null, 0, -0, NaN, '')이면 좌항 피연산자를 그대로 반환하는데, 좌항 피연산자가 Falsy값이나 ''인 경우도 마찬가지 입니다. 하지만 0이나 ''은 객체로 평가될 떄도 있습니다.(원시 값과 래퍼 객체).



```
let str = '';
let length = str && strr.length;
문자열의 길이를 참조하지 못합니다.
console.log(length) //''
```



이 문제를 해결하기위해 옵셔널 체이닝 연산자 ?.가 생겨났다.



```
let str = '';

문자열 길이를 참조합니다. null또는 undefined가 아니면 우항의 프로퍼티를 참조합니다.
let length = str?.length;
console.log(length); //0
```





## null 병합 연산자(??)

병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환합니다. null병합 연산자 ??는 변수에 기본값을 설정할 때 유용합니다.



```
let foo = null ?? 'abc';
console.log(foo) // 'abc'
```



**null 병합 연산자가 나오기 전**

도입되기 이전에는 논리연산자 ||를 사용한 단축 평가를 통해 변수에 기본값을 설정했습니다. 하지만 좌항 피연산자가 false로 평가되는 Falsy값(false, undefined, null, 0, -0, NaN, '')이면 우항의 피연산자를 반환하는데, 만약 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있습니다. 

```
let foo = '' || 'abc' => 'abc'
let foo = '' ?? 'abc' => '';
```

