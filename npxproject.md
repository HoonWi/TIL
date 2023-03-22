[프로젝트 세팅]

> .gitignore
node_modules
.env

> client 폴더
$ npx create-react-app {프로젝트명}

$ npm install

> client - src 폴더
- index.css 삭제 (import삭제)
- App.css 삭제 (import삭제)
- App.test 삭제

App.tsc
- import 삭제
- <header></header> 삭제

> server 폴더
- $ npm init //package.json 생성

- $ npm install -g typescript //typescript 컴파일러 설치. 타입스크립트로 작성된 코드를 js로 트랜스파일해야 실행 가능

- tsc --int //tsconfig.json파일 생성

- tsconfig.json - moduleResolution 주석 해제하여 활성화

> server - app.ts

- 구글검색 npm - express 코드 복사하여
server - app.ts파일 생성하여 붙여넣기
```
const express = require('express')
=> import express from 'express' //변경
```

- express 모듈 설치 $ npm install express

- express 모듈은 자바스크립트로 작성되었기 때문에
해당하는 @types 설치를 해줘야 함.  
$ npm i --save-dev @types/express

- app.listen(3000) 실행을 하는데 서버 동작여부 확인을 위해
콜백함수 삽입

```
app.listen(3000, () =>{
  console.log('server is running!');
});
```

타입스크립트 컴파일러를 통해 자바스크립트로 변환
$ tsc // app.js가 생성됨

서버 실행
$ node app.js
(localhost:3000)

$ npm install -g ts-node
$ ts-node app.js //실행 시 트랜스파일링 및 실행을 자동으로 해줌


#배포

서버 루트경로에 접속했을 때 프론트엔드 앱을 보여줘야 함

> client - package.json
$ npm run build

client에 build 폴더 내에 html, css, js가 생성됨.

서버에서는 루트경로로 들어왔을 때 build에 있는 index.html을 보여주면 됨.

client에 있는 build 폴더를 server로 옮기기.

> server - app.ts

res.send('hello world') 를
res.sendFile('/build/index.html') 로 변경

서버 재실행
$ ts-node app.ts

오류가 발생함
절대경로로 실행해야 한다고 함.

경로 앞에 절대경로를 의미하는 __dirname을 붙이고 경로 앞 .을 삭제
```
res.sendFile(__dirname + '/build/index.html')
```

개발자 도구 Network를 열어보면 외부 파일들을 제대로 못 읽어오고 스크립트 에러가 남. 현재 서버가 허용하지 않은 폴더를 사용하여 이슈가 된 것. 서버에서 static 폴더에 있는 파일을 꺼내갈 수 있도록 허용해줘야 함.

app.ts 파일에 아래 내용 추가
```
app.use (express.static('build'))
```

app.ts
```
import express from 'express';

const app = express()

app.use (express.static('build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(3000, () => {
  console.log('server is running!');
});

```

다시 서버 재실행
$ ts-node app.ts

다시 Network탭을 보면 404에러가 전부 사라진 걸 볼 수 있음.


# build 폴더를 옮기지 않도록 자동화

1) clien 폴더로 이동
2) npm ci를 통해 node_modules 폴더를 만들 수 있도록 한다
3) $ npm run build
4) client/build -> server/build 폴더로 이동
5) npm ci
6) tsc //타입스크립트 변환 app.js파일 생성
7) node app.js

heroku에서는 npm run start를 해주는 역할을 한다.

실행을 위해 루트파일에서 package.json 파일을 만들어준다.
$ npm init

> scripts에 내용 추가
- start를 하고 60초 이내에 배포해야 하기 때문에
heroku-prebuild에 스타트를 하기 전 해야 할 내용을 미리 작성한다.
```
// client 폴더로 이동
// npm ci를 통해 node_modules 폴더를 만들 수 있도록 한다
// $ npm run build
// client/build -> server/build 폴더로 이동
// npm ci
// tsc //타입스크립트 변환 app.js파일 생성
// node app.js

"heroku-prebuild": "cd client && npm ci && npm run build && mv build ../server"
```
