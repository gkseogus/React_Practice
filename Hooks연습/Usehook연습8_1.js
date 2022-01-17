import React from 'react';
import { useReducer } from 'react';
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// 여러 컴포넌트에서 비슷한 기능을 공유할 경우
// 커스텀hook을 작성해 로직을 재사용 가능
// 기존에 컴포넌트에서 여러 개의 인풋을ㄹ 관리하기 위해 useReducer로 작성했던 로직을
// Usehook연습8_1 라는 hook으로 따로 분리
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
