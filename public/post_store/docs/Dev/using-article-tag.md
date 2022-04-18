---
title: <section>을 버리고 HTML5 <article> 써야 하는 이유
link: https://webactually.com/2020/03/03/%3Csection%3E%EC%9D%84-%EB%B2%84%EB%A6%AC%EA%B3%A0-HTML5-%3Carticle%3E%EC%9D%84-%EC%8D%A8%EC%95%BC-%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0/
publishDate: 2022-04-18
tags:
  - accessibility
  - browser
---

## 📝 요약

- `<article>`, `<section>` 의미와 쓰임에 대한 이야기
- 대부분의 스크린리더는 따로 '접근 가능 이름'이 부여되지 않는 이상 `<section>` 요소를 언급하지 않는다.

## 🤔 생각하기

- 예전부터 `<section>`에 뭘 담아야 하는지 몰라 궁금했는데 막상 알아보지는 않았다. 그냥 어떤 부분을 묶기 위해 사용해왔는데 글을 읽고 굳이 `<section>`을 사용할 필요가 없다는 것을 알게되었다.
  - 아니나 다를까 지금 TIR 웹 페이지에서는 `<section>`을 무분별하게 사용하고 있음에 얼굴이 화끈 달아올랐다. (과장 좀 보태서...)
  - safari에서 읽기도구도 작동하지 않는 모습을 확인할 수 있었는데 `<article>`이 아닌 `<section>`을 사용해서인지 확인이 필요하다. **확인해서 모든 태그를 수정해야겠다.**
