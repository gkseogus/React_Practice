import React from 'react';
import { useState } from 'react'; // 가장 기본적인 hook
const hook연습1 = () => {
  // 함수형 컴포넌트에서 상태를 관리하기 위한 hook
  // useState 함수의 파라미터에는 상태의 기본값을 넣어준다.
  // 이 함수가 호출되면 배열을 반환, 첫번째 원소는 상태값, 두번째 원소는 상태를 설정
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default hook연습1;
