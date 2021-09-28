---
title: 아무도 가르쳐 주지 않는 것
link: https://velog.io/@mowinckel/%EC%95%84%EB%AC%B4%EB%8F%84-%EA%B0%80%EB%A5%B4%EC%B3%90-%EC%A3%BC%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B2%83
publishDate: 2020-07-27
tags:
  - tip
  - developer
---
### #알았다면 좋았을 것들 #지금이라도 알아두자

# 📊 Log
- Exception이 발생하면 **error log**를 남기는 것은 매우 중요하다. 프로그램이 정상적으로 작동하지 않는데 로그마저 남아 있지 않는다면 막막하다.
(Java에서 try catch 구문을 쓸 때 catch 구문엔 e.printstackTrace(); 라고만 작성하는 경우가 많은데 로그라도 남기도록 하자.)

    ```java
    try{
        doSomething();
    }
    catch(IOException e){
        e.printStackTrace(); //defalut
        log.error(e);        //log 기록이라도 남기기
        goto RETRY;          // Exception을 처리 할 수 있으면 더욱 좋다.
    }
    ```
- 로그도 파일이기 때문에 쌓이면 용량을 많이 차지하게 된다. -> Log Rotation이란 로그가 꽉 차지 않도록 지워주는 것을 말한다.(sentry 툴 추천!)

# 🔧 config
 - 로컬에서 실행될 때와 배포 서버에서 실행될 때의 설정값들이 달라지기 때문에 config의 관리가 중요

 # 🧪 Test
- 각 언어별로 테스트 과정을 도와주는 테스트 도구가 존재한다.
- 테스트 코드를 잘 작성해야 하며, 최소한의 테스트 코드라도 작성해두면 부담이 돌 하다.

# 🏗 git
- git을 알아두면 어떤 곳에서 누구와 일하던간에 편해진다. 모른다면 지금부터라도 배우고 익혀두는게 좋다.

# 🐞 Debugging / Profiling
- 프로파일링은 함수의 실행 시간이나 이벤트가 발생한 빈도 등을 측정해 내 프로그램의 성능을 높이고자 하는 것
