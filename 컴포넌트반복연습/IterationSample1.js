import React from 'react';

const IterationSample1 = () => {
  // 문자열로 구성된 배열을 선언
  // 배열 값을 사용해 <li> jsx 코드로 된 배열을 새로 생성한 후 nameList에 담는다
  const names = ['가', '나', '다', '라'];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample1;
