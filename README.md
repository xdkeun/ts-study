# TypeScript로 블록체인 만들기
-
## Why TypeScript?
안정성 때문이라고 함.
JavaScript는 개발자가 잘못된 코드를 작성해도 실행해줌.
에러 메시지도 표시해주지 않음.
하지만 TypeScript는 잘못된 코드를 작성하면 실행하기도 전에 에러 메시지를 표시해줌.
#### example
function divide(a,b) {
    return a / b
}
divide("abcd");
이런 식으로 엉뚱한 값을, 엉뚱한 개수를 매개변수에 넣어도 JavaScript는 에러 메시지없이 실행해줌.
타입스크립트는 개발자가 엉뚱한 실수를 하는 것을 미리 방지해줌.
