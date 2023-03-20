```$ node --version```
```$ npm --version```

유의적 버전(Semantic Versioning, SemVer)  
특정 프로그램의 버전을 명시하는 것  
ex) 18.14.2
Major.Minor.Patch  
Major: 기존 버전과 호환되지 않는 새로운 버전. 18개의 호환되지 않는 버전이 존재
Minor: 기존 버전과 호환되는 새로운 기능이 추가된 버전
Patch: 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전

^Major.Minor.Patch
Major 버전 안에서 가장 최신 버전의 마이너 버전 업데이트 가능

```$ npm info lodash```
최신 버전 확인 가능

nodemodules - lodash - package.json 에서 실제 버전 확인

```$ npm install lodash@4.17.20```
해당 버전 설치

```npm update lodash```

^가 붙어있으면 최신버전의 업데이트를 허용
이후 ```$ npm update lodash```를 입력해서 작동하지 않음

