// lodash 사용
import _ from 'lodash';

```
console.log("hello world!");
console.log(_.camelCase("hello world!")); //문자는 안나타남
```

const str = 'Hello world!';

// String.prototype.indexOf();
```
const result = 'Hello world'.indexOf('world');
console.log(result); //6
```

// .length 문자 길이 확인
```console.log(str.length);//12```

// .indexOf를 통한 Boolean데이터 확인
```
console.log(str.indexOf('w') !== 1); //true
```

// .slice
```
console.log(str.slice(0,5)); // Hello
console.log(str.slice(6,12)); // world!
```

// .replace
```
console.log(str.replace('world','HoonWi')); // Hello HoonWi!
console.log(str.replace(' world!','')); // Hello
```

// .match 정규표현식
```
const email = 'wee0702@gmail.com';
console.log(email.match(/.+(?=@)/)[0]); // wee0702
```
// .trim 공백 제거
```
const space = '     hello world     ';
console.log(space.trim()); // hello world
```