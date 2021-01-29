# this

동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 하는데 이 때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 **자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 합니다**

```
function Circle(radius){
	????.radius = radius;
}
생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다
```

생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후 new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요한데 즉 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수가 존재해야 합니다. 

 생성자 함수를 정의하는 시점에는 아직 인스턴스를 생성하기 이전이므로 생성자 함수가 생성할 인스턴스를 가리키는 식별자를 알 수 업습니다. 따라서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 특수한 식별자가 필요한데 이를 위해 자바스크립트는 this라는 특수한 식별자를 제공합니다

 **this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이며 this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서들르 참조할 수 있습니다**

 this는 자바스크립트 엔진에 의해 암묵적으로 생성되며 함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달됩니다. 함수 내부에서 argument 객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수있습니다. 단 **this 가 가리키는 값 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정됩니다**

```this 바인딩
바인딩이란 식별자와 값을 연결하는 과정을 의미하며 예를들면 변수 선언은 변수 이름과 확보된 메모리 공간의 주소를 바인딩 하는 것입니다. tihs 바인딩은 tihs와 this가 가리킬 객체를 바인딩 하는 것입니다.
```

 자바나 C++같은 클래스 기반 언어에서 this는 언제나 클래스가 생성하는 인스턴스를 가리키지만 자바스크립트으이 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값 즉 this 바인딩이 동적으로 결정 됩니다.

- 일반 함수 내부에서 this는 전역 객체 window를 가리킵니다
- 메서드 내부에서 this는 메서드를 호출한 객체를 가리킵니다
- 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킵니다.





### 함수 호출 방식과 this 바인딩

this 바인딩은 함수 호출방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정됩니다

```
렉시컬 스코프와 this 바인딩은 결정 시기가 다릅니다
함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정합니다 하지만 this바인딩은 함수 호출 시점에 결정됩니다.
```



- 일반함수 호출
  - 기본적으로 this에는 전역 객체가 바인딩

- 메서드 호출
  - 메서드 내부의 this에는 메서드를 호출한 객체 즉 메서드를 호출할 때 이름 앞의 마침표 연산자 앞에 기술한 객체가 바인딩됨 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩됨
- 생성자 함수 호출
  - 생성자 함수 내부의 this에는 생성자 함수가 생성할 인스턴스가 바인딩 됩니다.



### function.prototype.apply/call/bind 메서드에 의한 간접 호출

apply, call, bind메서드는 function.prototype의 메서드입ㅂ니다. 이들 메서드는 모든 함수가 상속받아 사용할 수 있습니다.

```
function a(){
	return this
}
const b = {a : 1}
console.log(getThisBinding()) //window
console.log(getThisBinding.apply(thisArg)) // {a : 1}
console.log(getThisBinding.call(thisArg)) // {a : 1}
```

apply 와 call 메서드의 본질적인 기능은 함수를 호출하는 것

apply는 apply(xxxx,[1,2,3]) 과 같이 함수의 인수를 배열로 묶어 전달함

call은 call(xxx,1,2,3)과 같이 쉼표로 구분한 리스트 형식으로 전달함



apply와 call메서드의 대표적 용도는 arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하는 경우입니다. arguments 객체는 배열이 아니기 때문에 Array.prototpye.slice 같은 배열 메서드를 사용할 수 없으나 apply와 call 메서드를 이용하면 가능합니다

![image](https://user-images.githubusercontent.com/68668924/106246646-c6ac8480-6251-11eb-8bb7-96bc250d2e3b.png) 

```
function a(){
	return arr = Array.prototype.slice.call(arguments);
}
a(1,2,3); // [1,2,3]
```



Function.prototype.bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달합니다

```
const person = {
	name: 'Lee',
	foo(callback) {
	1번
	setTimeout(callback, 100);
	}
}
person.foo(function(){
	console.log(`saf ${this.name}.`) //2번 saf.
})
```

이 경우 person.foo의 콜백 함수가 호출되기 이전인 1번 의 시점에서 this는 foo메서드를 호출한 객체, 즉 person객체를 가리킵니다. 그러나 person.foo의 콜백함수가 일반 함수로서 호출된 2번의 시점에서는 this는 전역객체 window를 가리킵니다 따라서 person.foo의 콜백 함수 내부에서 this.name은 window.name과 같습니다

이때 위 예제에서 person.foo의 콜백 함수는 외부함수 person.foo를 돕는 헬퍼 함수 역할을 하기 때문에 외부함수 person.foo 내부의 this와 콜백 함수 내부의 this가 상이하면서 문맥상 문제가 발생합니다 따라서 콜백 함수 내부의 this를 외부함수 내부의 this와 일치 시켜야 하는데 이때 bind 메서드를 사용해 this를 일치시킬 수 있습니다.

```
const person = {
	name: 'Lee',
	foo(callback) {
	1번
	setTimeout(callback.bind(this), 100);
	}
}
person.foo(function(){
	console.log(`saf ${this.name}.`) //2번 saf.
})
```

