---
title: SSR & CSR 
link: https://velog.io/@zansol/%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81SSR-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81CSR
publishDate: 2020-09-10
tags: 
  - ssr
  - csr
---
# 🤔 렌더링은

    - View를 렌더링하는 위치가 서버인지 클라이언트인지에 따라 서버사이드렌더링 또는 클라이언트사이트렌더링이라고 한다.

    ❗주의할 점 : 전통적인 웹페이지 방식 == 서버사이드렌더링이 아니며
    SPA == 클라이언트사이드렌더링이 아니라는 것

# 🤷‍♀️ 차이점은?

1. **초기 View 로딩 속도**

   - 서버사이드의 경우 View를 서버에서 렌더링하여 가져오므로 첫 로딩 속도가 빠르다.(물론 js 파일을 모두 받기 전까지 반응하지 않지만, 사용자 입장에선 화면이 먼저 뜨기 때문에 빠르다고 생각하게 된다.)
   - 클라이언트사이드의 경우 HTML을 다운받은 후 각 리소스를 다운받고 브라우저에서 렌더링하기 때문에 로딩이 오래 걸림

     ![SSR](../../docs/img/SSR.png)
     ![CSR](../../docs/img/CSR.png)

2) SEO(검색엔진최적화)

   - 클라이언트사이드는 View 생성 시 자바스크립트를 필요로 하며 생성 전까지는 HTML 내용이 비어있어 웹 크롤러들은 내용 파악이 힘들다 -> 데이터 수집이 어렵다.
   - SEO가 잘 되지 않는다면 생기는 문제점은 웹 애플리케이션의 내용이 검색엔진에 제대로 표시되지 않고 그로 인해 사용자의 유입이 줄어든다

3) View 변경 시 서버에 계속 요청해야 하고, 클라이언트사이드는 처음 로딩 후 서버에 다시 요청할 필요 없이 클라이언트 내에서 작업이 이루어지므로 매우 빠르다.

# 🐾 요즘엔 말이야

- SEO 이슈와 처음 페이지 접근 시 로딩 속도를 줄이기 위해 개발자들이 서버사이드렌더링에 집중을 하고 있는 추세!

# 📚 Conference

- [렌더링에 대해 더 알고 싶다면?](https://asfirstalways.tistory.com/244)