---
title: 앱의 프론트엔드 성능을 향상시키는 방법 - 5가지 코딩 팁
link: https://junwoo45.github.io/2019-10-05-frontend-performance/
author: padosum
publishDate: 2020-09-04
---
## 📝 요약 
- Tomasz Świstak의 [How to increase your frontend app’s performance - 5 coding tips](https://www.synergycodes.com/blog/how-to-increase-your-frontend-apps-performance)를 번역한 글

1. 배열 대신 객체/맵을 사용하여 조회하기
2. 예외를 먼저 처리하는 대신, `if`문 사용하기 
3. 가능한 한 반복문을 적게 사용하기 
4. 기본 반복문 사용하기
5. 내장 DOM 메소드 사용하기
6. 다른 방법들
   1. webpack으로 진행하는 자바스크립트 번들링 최적화 방법
   2. 자료구조, 기본적인 알고리즘과 그 알고리즘의 복잡성 공부하기
   3. jsPerf에서 테스트 케이스 찾기 

## 🤔 생각하기 
- 지금까지 내가 회사에서 일한 업무 중 프론트엔드 단에서 성능을 향상 시키고 싶었던 적이 한 번 있었다. 달력을 조회하는 부분이었는데 그냥 json으로 불러오기만 하면 되는 줄 알았고 그랬더니 일정의 양이 많아지니 속도가 좀 느려진 것이 문제였다.  
  - 시간도 없고, 다른 사람은 아무말도 없길래 그냥 넘어갔는데 오늘 읽은 글 처럼 여러 가지 방법이 있다는 것을 알게되었다. 
- jquery를 많이 사용하는데, 정말 간단한 selector는 내장 dom을 사용해야 한다는 것이 훨씬 속도가 빠른 줄 몰랐다. 
- 역시나 알고리즘 공부는 중요하구나 