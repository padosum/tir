---
title: https//nomadcoders.co/typescript-for-beginners (~ 0.5)
publishDate: 2020-09-08
tags: 
  - typescript
  - javascript
---

# typescript란
- 자바스크립트는 타입이 없는 언어로 한 변수에 문자, 숫자, boolean 등 여러 타입의 값을 넣을 수 있다. 따라서 비교적 유연하게 개발할 수 있는 환경이지만
런타임 환경에선 에러 날 확률이 높다. 이런 자바스크립트에 **강한 타입 시스템을 적용**한 것이 타입스크립트다.

# 사용 방법
- `.ts` 파일 생성 후 컴파일을 하면 `.js`로 변환된다.

# 기본 타입 지정
```typescript
const sayHi = (name: string, age: number, gender?: string):string => { //parameter에 type 지정, return type 지정, '?' 키워드로 선택적 파라미터 지정
    return `Hello ${name}, you are ${age}, you are ${gender}`;
}

sayHi('yeeun', 27, 'female');  // success!
sayHi('yeeun', "27", 'female'); // age는 number type으로 지정되었기 때문에 string type을 넘겨주면 error 발생!

sayHi('yeeun', 27); // success! (gender는 optional parameter이므로 넘기지 않아도 error 발생하지 않음!)
                    // optional parameter를 넘기지 않는 경우엔 undefined로 출력된다.
```
# 👩‍⚖️ 결론
리액트와 앵귤러를 배우면서 타입스크립트를 함께 사용하는 경우가 많길래 찾아보게 되었다. (역시 개발은 하나를 알면 열을 공부해야 하는 것...😹)

말 그대로 자바스크립트를 사용하면서 타입 지정에 제한을 주어야 할 때 유용한 언어이다.
타입 지정에 대한 나의 멍청한 코드로부터 코드를 보호해준다.🏹

2019년 스택오버플로우 프로그래밍, 스크립트 사용 조사에서 10위를 차지하고, 선호도는 3위를 차지한만큼 사용자들이 많고 선호하는 언어이다.
물론 [단점](https://tech.madup.com/typescript/)도 있다는 것을 참고하여 상황에 맞게 사용하면 될 거 같다.


# 📚 Conference

- [자세한 문법](https://heropy.blog/2020/01/27/typescript/)


