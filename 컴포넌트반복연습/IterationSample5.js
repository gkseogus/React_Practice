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

  // onClick 함수에서는 배열의 내장 함수 concat을 사용한다.
  // ㄴ 새로운 항목을 추가한 배열을 만들고 setNames를 통해 상태를 업뎃한다.
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    // id 값은 nextId를 사용하도록 하고 클릭할때 마다 값이 1씩 올라가도록 구현
    setNextId(nextId + 1); // nextId 값에 1을 더해준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(''); // inputText를 비운다. -> 버튼이 클릭되면 input내용을 비워준다.
  };
  // key 값을 index 대신 name.id 값으로 지정
  const nameList = names.map((name, index) => (
    <li key={name.id}>{name.text}</li>
  ));
  return (
    // ui 태그 상단에 input, button을 렌더링하고 input 상태를 관리
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample4;
