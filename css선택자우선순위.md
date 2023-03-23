> 선택자 우선순위

```
// index.html
<div
id = "color_yellow
class = "color_green"
style = "color: orange;"> // 인라인 선언
Hello world!
</div>

// style.css
body           {color:darkblue;} // 상속 X
*              {color:darkblue;} // 전체 선택자
div            {color:darkblue;} // 태그 선택자
.color_green   {color:darkblue;} // Class선택자
#color_yellow  {color:darkblue;} // ID선택자
*              {color:darkblue; !important} //!important
 {color:darkblue;}
```

전체 선택자   - 0점 
태그 선택자   - 1점
Class 선택자 - 10점
ID 선택자    - 100점
인라인 선언   - 1000점
!important  - 99999999999점

점수가 같을 경우 나중에 적용된 코드가 우선순위가 높음
