import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      //아무 것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Usehook연습4 = () => {
  /* useRecucer의 첫 번째 파라미터에는 리듀서 함수를 넣고 두 번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.
  이 hook을 사용하면 state 값과 dispatch 함수를 받아온다.
  state = 현재 상태, dispatch = 액션을 발생시킴
  가장 큰 장점은 컴포넌트 업뎃 로직을 컴포넌트 바깥으로 빼낼 수 있다.*/
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}></button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}></button>
    </div>
  );
};

export default Usehook연습4;
