import React from 'react';
import { useState } from 'react';

// 세 가지 상태를 사용
// 1. 데이터 배열 2. 텍스트를 입력할 수 있는 input 상태 3. 고유 id를 위한 상태
const IterationSample4 = () => {
  // 객체 형태의 배열
  const [names, setNames] = useState([
    { id: 1, text: '가' },
    { id: 2, text: '나' },
    { id: 3, text: '다' },
    { id: 4, text: '라' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 ID

  const onChange = (e) => setInputText(e.target.value);

  // key 값을 index 대신 name.id 값으로 지정
  const nameList = names.map((name, index) => (
    <li key={name.id}>{name.text}</li>
  ));
  return (
    // ui 태그 상단에 input, button을 렌더링하고 input 상태를 관리
    <>
      <input value={inputText} onChange={onChange} />
      <button>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample4;
