import React from 'react';

// props를 렌더링
// 화살표 함수는 가장 가까운 외부 this 를 참조한다.
const MyComponent = (props) => {
  return (
    <div>
      안녕하세요 제 이름은 {props.name} <br />
      children 값은 {props.children}
      {/* props.children -> 컴포넌트 태그 사이의 내용을 보여준다. */}
      입니다.
    </div>
  );
};

// 기본값을 설정해주기 위해 defaultProps
MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;
