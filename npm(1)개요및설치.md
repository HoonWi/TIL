> Node.js  

Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임(프로그래밍 언어가 동작하는 환경)  
컴퓨터에서 동작

> nvm = node version manager   

### 맥OS  
[nvm 깃허브](https://github.com/nvm-sh/nvm)  
[installing and updating ](https://github.com/nvm-sh/nvm#installing-and-updating)  
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

### 윈도우  
[nvm 깃허브](https://github.com/coreybutler/nvm-windows)  
[Download Now!](https://github.com/coreybutler/nvm-windows/releases)  
nvm-setup.zip  


```$ nvm --version```


```$ nvm init -y```  
-y 옵션은 yes의 의미로 기본 설정을 물어보지않고 default 값으로 동의한다는 말이다.


> 웹 패키지 설치  

-D(--save-dev) 개발용 의존성 패키지  
-D 옵션을 붙이면 devDependencies 에 설치  
설치한 패키지를 개발용으로만 사용하겠다는 의미  
웹 브라우저에서는 동작하지 않음
```
$ npm install parcel-bundler -D
```  

-D 옵션 없이 설치 일반 의존성 설치
```
$ npm install lodash
```
  
```
$ npm install // npm i
```
package.json에 명시된 모든 패키지를 설치

> package-lock.json

설치된 모듈을 내부적으로 관리
parcel-bundler와 lodash 외 내부에서 사용하는 패키지의 정보가 들어가 있음. 자동으로 관리되는 파일이라는 뜻(lock).

따라서 아래 두 파일은 지우면 안됨  
```package.json```  
```package-lock.json```