#  🖨️ 깊은 복사와 얕은 복사에 대한 심도있는 이야기

- 링크: [https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a](https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a)

## 📝 요약 

- Javascript에서 복사에 대하여 어디까지 알고있는가? 
  
### ✅ 미리 알아야 할 것 
- Spread Operator 
- Object.assign
- JSON.stringify
- [Iterable](https://ko.javascript.info/iterable)
  - `for..of`를 사용할 수 있는 객체
    - 배열, 문자열... 

### 중첩구조 복사가 불가한 것 
- `Array.prototype.slice` 
- `Spread Operator`
> 자바스크립트에서 "복사"라고 알려져있는 거의 모든 기능은 이터러블 순회를 수행하도록 설계되어 있다.   

### Object.assign 
> “For deep cloning, we need to use alternatives because Object.assign() copies property values. If the source value is a reference to an object, it only copies that reference value.”  

### JSON.parse & JSON.stringify 
- 문자열로 바꾸기 때문에 이터러블 순회를 하지 않고 복사를 한다! 
  - JSON 값으로 표현될 수 있는 종류
    - object
    - array
    - number
    - string
    - true
    - false
    - null
  - 그외에는 예외처리 or 에러를 뱉는다. 
    - ex. 함수 

### Lodash, Ramda  
- 완전한 깊은 복사를 구현해 놓은 라이브러리  
- lodash는 발생가능한 모든 경우를 저장해두고 처리한다.  
- randa는 추상화가 잘되어있다. 


## 🤔 생각하기 
- 업무중에 object를 복사해야할 일이 있었는데 그냥 그냥 할당만해서 안되었다.  
  - 검색을하니 아티클에 나온 것처럼 `JSON.parse`와 `JSON.stringify`를 이용하는 방법이 나왔고 그냥 복붙해서 해결했다.  
    - 나중에 찾아봐야지 하고 며칠이 지난뒤 이렇게 잘 정리된 글을 발견해서 기쁘다. 지금까지 챌린지를 하면서 읽은 글중에 최고다!   
- 매번 이런식으로 복붙만하고 넘어가는 경우가 많았는데 이번에 이렇게 알아보니 완벽한 방법이 아니었다는 엄청난 사실을 알게되었다! object여서 다행이었다.. 
- 아티클에 결론에 나온 것처럼 완벽한 깊은 복사를 하지 않는 경우에는 라이브러리를 쓰기 보다는 과연 완전 깊은 복사를 해야하는 경우인가? 라고 다시 생각해보는 것이 좋다는 생각이 들었다. 나의 경우처럼...

