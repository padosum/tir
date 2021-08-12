---
title: 자바스크립트, 세미콜론을 써야 하나 말아야 하나
link: https://bakyeono.net/post/2018-01-19-javascript-use-semicolon-or-not.html
author: the1020
publishDate: 2020-08-30
tags: 
  - javascript
  - semicolon
  - asi
---
# 🤔 세미콜론을 써야 하나 말아야 하나
결론부터 말하자면 쓰지 않아도 된다. 자바스크립트에선 ASI라는 기능을 통해 세미콜론을 자동으로 붙여주고 있다.
이 ASI는 대개는 적절한 위치를 추론하기 때문에 문제를 자주 일으키지는 않는다.

# 👩‍⚖️ 결론
처음엔 ASI에 대해 찾아보게 되다가 여러 블로그를 보다보니 자바스크립트에서 세미콜론을 써야 하는지 쓰지 않아도 되는지 아니면 쓰면 안되는지에 대한 의견이 엇갈렸었다.

이 때까지 세미콜론을 쓰지 않아도 프로그램이 잘 동작하여 브라우저에서 자동으로 넣어주나보다 라고만 생각했었다. 
세미콜론을 쓰지 말라고 하는 주장에는 세미콜론을 붙이기로 한다면 쓰면 안되는 곳에 붙일 가능성을 없애기 위해서라는 이유가 있는데 정말 맞는 말이다. 애초에 아예 넣지 않기로 정한다면 넣어야 하는 곳인지 고민하지 않아도 될 부분인 것이다.

회사 프로젝트를 진행할 때는 모든 코드에 세미콜론이 붙어있기 때문에 나 역시 넣어서 작성하는 편이다.

세미콜론을 사용한다면 모든 코드에 세미콜론을 사용하고, 그렇지 않다면 모두 빼는 것과 같이 일관성있는 코드가 중요하다고 생각한다.

# 📚 Conference
- [자바스크립트 세미콜론 사용](https://min9nim.github.io/2020/05/javascript-semicolon/)
- [자바스크립트 세미콜론 자동삽입(ASI)](https://velog.io/@exploit017/JS-%EC%84%B8%EB%AF%B8%EC%BD%9C%EB%A1%A0-%EC%9E%90%EB%8F%99-%EC%82%BD%EC%9E%85ASI)
- [ASI의 Rule](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)