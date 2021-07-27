---
title: 💡 Today I Read  https//ui.toast.com/weekly-pick/ko_20191002/

---
## 💡 Today I Read : https://ui.toast.com/weekly-pick/ko_20191002/

### #프론트엔드 #Svelte

# 🤔 Svelte가 뭐야?

1. React, Vue.js, Angular와 같은 프론트엔드 프레임워크
2. { Svelte : 날씬한 호리호리한} 라는 이름답게 **적은 코드, 적은 용량**이 장점

# 🤷‍♀️ Svelte를 쓰는 이유는?

1. **간결한 코드**(높은 가독성, 개발 속도 향상🔥)

   - React도 간단하지만 그보다 더 간단히 작성이 가능하다. 👇👇👇아래코드 참고👇👇👇

   ```HTML
   <!--App.svelte (.svelte라는 별도의 파일 확장자를 가진다.)-->
   <script>
       let name = "World";
   </script>

   <h1>Hello {name}!</h1>
   ```

   ```javascript
   //App.js
   import React from "react";

   const Hello = () => {
     let name = "World";
     return <h1>Hello {name}!</h1>;
   };

   export default Hello;
   ```

2. ‘프레임워크가 없는 프레임워크’ 혹은 ‘컴파일러’

   - 가상 DOM이 없고, 런타임에 로드할 프레임워크가 없다는 뜻!
   - 자체적으로 컴포넌트 컴파일이 가능 → 기본적으로 빌드 단계에서 구성 요소를 컴파일하는 도구(즉, 빌드 시 앱에서 변경 사항이 어떻게 발생하는지 알고 있는 컴파일러)

3. **No virtual DOM!** 진정한 Reactive Framework 🌟
   - 3대 프론트엔드 프레임워크는 변경사항을 가상 DOM에 반영하고 그 이후에 실제 DOM에 반영(이 과정을 실제 DOM에 바로 반영한다고 볼 수가 없는 것...!)
   - svelte는 컴파일러의 기능을 수행하며 코드 작성 시 컴파일타임에 바닐라스크립트로 변경되며 이 때 어떤 부분이 reactive하게 바뀌어야 하는지 미리 정의

# 📚 Conference

- [공식문서 및 Tutorial](https://svelte.dev/tutorial/basics)
- [기본 문법을 알고 싶다면?](https://velog.io/@ashnamuh/hello-svelte)
- [자세한 문법과 설치 방법은?](https://heropy.blog/2019/09/29/svelte/)
