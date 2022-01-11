import React from 'react';

// props를 렌더링
// 화살표 함수는 가장 가까운 외부 this 를 참조한다.
const MyComponent = (props) => {
  // 객체에서 값을 추출하는 문법을 비구조화 할당이라 한다. -> 구조 분해 문법이라고도 불림
  const { name, children } = props;
  return (
    <div>
      안녕하세요 제 이름은 {name} <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

// 기본값을 설정해주기 위해 defaultProps
MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;
