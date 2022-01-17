import React from 'react';
import { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Usehook연습6_3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  /* 주로 렌더링 성능을 최적화 해야하는 상황에서 사용한다.
  이 훅을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.
  useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고 두 번째 파라미터에는 배열을 넣는다.
  이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 된다.
  onChange처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 단 한번만 함수가 생성된다.
  onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될때 마다 함수가 생성된다.*/
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //  컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
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
export default Usehook연습6_3;
