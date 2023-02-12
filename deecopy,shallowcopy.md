```
let num1 = 1;
let num2 = num1; 

num2 = 2;

console.log(num1, num2);
//
```

위와 같은 코드가 있다고 가정했을 때 기본적인 자바스크립트의 구조 방식을 생각해보면
결과값은 1, 2가 나올 것이다.

이것이 우리가 이해하고 사용하는 기본적인 구조 deep copy(깊은 복사)이다.
```
let num2 = num1 // num2에 1이라는 값이 들어간다.

```

반면 shallow copy(얕은 복사)의
결과값은 2, 2가 출력된다.
```
let num2 = num1 //num2에 num1 자체를 넣는다.
```


메모링 ㅓ쩌구 때문

원시값은 deep copy,
객체를 대입할 때는  shallow copy

```
const HoonWi = {
  firstName: "위"
  age: 23,
};

let newYear = HoonWi;
newAge.age = 24;

console.log(HoonWi, newAge);
//깊은 복사라면 이전값
//얕은 복사라면 동일값 출력
```


deep copy로 구현하면 비효율적

ex) 컴퓨터가 deepcopy