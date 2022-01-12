import React from 'react';

const IterationSample2 = () => {
  // key 값을 설정할 때는 amp 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다.
  // 따라서 데이터가 가진 고윳값을 key 값으로 설정해야한다.
  // 하지만 컴포넌트에는 고유 번호가 없다 이때는 amp 함수에 전달되는 콜백 함수의 인수인 index 값을 사용하면 된다.
  const names = ['가', '나', '다', '라'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample2;
