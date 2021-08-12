---
title: 알고리즘 학습에 대한 조언 
link: https://edykim.com/ko/post/advice-on-learning-algorithms/
author: padosum
publishDate: 2020-08-07
---
## 📝 요약 

- Buck Shlegeris의 [My advice on studying algorithms](http://shlegeris.com/2016/08/14/algorithms) 번역글
### 회사는 왜 알고리즘 문제를 내는가? 
  - 프로그래밍 일을 위해 면접시 어렵고 복잡한 문제를 잘 풀어낼 수 있는지 알아내려고 한다.
    - 하지만 면접 시간은 깊은 프로그래밍 문제를 다룰 만큼 시간이 넉넉하지 않음.
    - 그래서 복잡하지만 쉽게 설명할 수 있는 짧은 코딩 문제 = 알고리즘이 적합 
  - 회사에서 난제를 내는 것이 위대한 지원자를 찾아 내는 비밀 병기라고 착각해버린다. -> 전통적이고 어려운 알고리즘은 면접에서 없어져야 한다.  

### 알고리즘 공부방법 
  - [Haseeb Qureshi의 블로그 포스트](https://haseebq.com/how-to-break-into-tech-job-hunting-and-interviews/#general-study)의 "일반 학습 전략", "프로그래밍 면접 공부 가이드" 참고하기  
  - 알고리즘 문제에 답하기 위한 기술
    - 모든 대표적 알고리즘과 자료 구조 문제를 알기
    - 부담되는 상황에서 알고리즘 논리를 화이트보드에 빠르게 풀어나가는 것 

####  표준 알고리즘 

##### 자료 
- 알아야할 자료구조 
  - list 구조: 배열, 동적 배열, 링크드 리스트(linked list)
  - set과 map 구조: 해시맵, 이진 검색 트리, 힙 
- 필수 메소드가 어떻게 구현되어 있는지, 런타임은 어떻게 동작하는지
  - ex, list의 필수 메소드 `set`, `get`, `pushAtEnd`, `popAtEnd`, `insertByIndex`, `removeByIndex`, set의 필수 메소드 `insert`, `remove`, `contains`
- 자료구조 구현을 어떻게 사용하는지?   
- **큐는 스택 두 개로 구현할 수 있다.**
- 다음 알고리즘은 어떻게 구현하는지 알아야 한다.
  - 그래프 알고리즘: 너비 우선 탐색(breadth first search), 깊이 우선 탐색(depth first search), 다익스트라 알고리즘(dikstra's algorithm) 
  - 빠른 정렬 알고리즘 하나. 병합 정렬(mergesort) 또는 퀵 정렬(quicksort)  
  - 배열에서 수행하는 이진 검색
  - Big O 표기법을 편하게 사용할 수 있어야 한다.  

##### 기술  
- Cracking the Coding Interview 책이 가장 유용  
- 답안을 "훔쳐보는" 일은 그래도 괜찮다. 문제 푸는 일을 내던지고 아예 포기하는 것보다 차라리 나은 접근  
- 비기술적 측면 [https://triplebyte.com/blog/how-to-pass-a-programming-interview](https://triplebyte.com/blog/how-to-pass-a-programming-interview)에서 2,3,7번 읽기  

### 더 배우기  
- 취업 목적을 넘어서 본인을 위해 즐겁게 알고리즘과 자료구조를 배우고 싶다면?  
  - 위의 필수 자료구조를 제외한 상대적으로 간단한 자료구조를 학습하는 방법
    - 트립, 스킵 리스트, 증강이진검색트리, 서로소 집합 자료구조  
    - 이진트리, 2-3-4 트리 

### 자료  
- [https://triplebyte.com/blog/how-to-pass-a-programming-interview](https://triplebyte.com/blog/how-to-pass-a-programming-interview)  
- [https://www.interviewcake.com/](https://www.interviewcake.com/)  


## 🤔 생각하기 
- 기업이 왜 알고리즘 면접을 채용하게 되었는지 이유를 알게 되었다.  
  - 하지만 어디서나 마찬가지로 고인물은 자신을 자각해야 한다는 사실을 느꼈다. 
  - 그리고 한번 정해진 체계는 뒤바꾸기 정말 어렵다는 것... 
- 알고리즘 공부는 무엇을 해야 하는지 막막했는데 꼭 공부했으면 하는 부분의 요점을 잡아 놓은 글이었다.  
  - 우리나라 기업도 손코딩을 하고 안하는 기업이 있다고 하던데..일단 손코딩을 해보는 것으로 준비하자  
- 참고할만한 유용한 사이트들은 영어기 때문에 영어 공부도 병행해야겠다.