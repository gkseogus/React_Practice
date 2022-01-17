import React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Usehook연습6_4 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // useRef Hoo,은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
  // useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.
  // ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다. -> 아래 예제의 값은 null
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //  컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    () => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focust();
    },
    [number, list] // number or list가 바뀌었을 때만 함수생성
  );

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
export default Usehook연습6_4;
