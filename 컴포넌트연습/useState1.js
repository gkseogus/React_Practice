import React from 'react';
// 함수형 컴포넌트에서  state를 사용하기 위한 useState
import { useState } from 'react';
const useState1 = () => {
  // useState 함수의 인자에 상태의 초기값을 넣어줘야 한다. 값의 형태는 자유
  // 함수를 호출하면 배열이 반환, 배열의 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어주는 함수(세터 함수)
  // 배열 비구조화 할당을 통해 이름을 자유롭게 정함 -> message,setMessage란 이름을 설정
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default useState1;
