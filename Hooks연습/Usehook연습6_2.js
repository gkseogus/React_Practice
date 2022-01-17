import React from 'react';
import { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Usehook연습6_2 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  /* useMemo hook은 인풋 내용이 바뀔 때는 평균값이 다시 계산할 필요가 없는데
   이렇게 렌더링할 때 마다 계산하는 것은 낭비다 이러한 낭비를 막아준다.
   렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 
   원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식*/
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};
export default Usehook연습6_2;
