> main.js  

```
import * from 'package이름'; //패키지 호출
```
ex) import _ from 'lodash';

```
console.log(_.camelCase("hello world"));
//lodash 패키지에 있는 camelCase를 호출하여 사용
```

> package.json

script 추가
```
"build": "parcel build index.html" //```

$ npm run build