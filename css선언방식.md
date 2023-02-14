> 내장 방식

HTML 문서 내에 <style></style> 형식으로 작성

```
<style>
  div{
    color: red;
    margin: 20px;
  }
</style>
```

> 인라인 방식

요소의 style속성에 직접 스타일을 작성하는 방식(선택자 없음)

```
<div style="color: red; margin: 20px;"></div>
```
우선화가 되기 때문에 비추

> 링크 방식(병렬)

\<link/>로 외부 CSS문서를 가져와서 연결하는 방식
```
// main.css

div{
  color: red;
  margin: 20px;
}
```

>import 방식(직렬)
CSS의 @import 규칙으로 CSS문서 안에서 또 다른 CSS문서를 가져와 연결하는 방식

```
//main.css
@import url("./box.css") //외부 CSS파일 불러오기

div{
  color: red;
  margin: 20px;
}


//box.css
div{
  background-color: red;
  padding: 20px;
}
```
연결을 지연시킬 목적으로 사용 가능  
단점 또한 연결이 지연됨