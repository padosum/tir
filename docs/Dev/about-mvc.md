---
title:  💡 Today I Read  https//velog.io/@denmark-choco/MVC-design-pattern
publishDate: 2020-09-08
tags: 
  - MVC
---

# MVC가 뭐냐면
1. Model
- db에 데이터를 요청해서 받는 역할
2. View
- controller에서 데이터를 전달 받아 html, css, javascript를 이용해 화면에 표현
3. Controller
- 사용자가 접근한 url에 따라 요청사항 파악 후 그에 맞는 model에 데이터를 의뢰하고
전달받은 데이터를 view에 반영되도록 전달하는 역할

# 사용하는 이유는
- 각자의 역할에만 집중하여 개발이 가능하다. -> 유지보수성, 확장성, 중복코딩 발생 방지

# 한계
- 초반 설계가 오래 걸려 숙련된 개발자가 필요
- model과 view의 의존성이 완벽히 분리될 수 없기 때문에 패턴이 모호해질 수 있다.

# 한계에 대한 해결방안
- MVVM패턴(model + view + view model)
    - view model : view를 표현하기 위해 만든 view를 위한 model
    - 장점 : view와 model 사이의 의존성이 없으며 view와 view model 사이의 의존성 또한 없앤 패턴 -> 독립적, 모듈화 가능
    - [mvc와mvvm패턴](https://beomy.tistory.com/43) 참고하기

# 👩‍⚖️ 결론
jsp 프로젝트를 진행하며 MVC 개념에 대해 계속 부딪히게 되었다. 그놈의 모델, 뷰, 컨트롤러!!!🤦‍♀️
이제는 mvc에 대해 이해를 했지만 angular를 배우며 MVW, MVVM라는 것도 알게 되었다...🤯

프로젝트 크기와 상황에 맞게 장,단점을 고려하여 사용할 것!