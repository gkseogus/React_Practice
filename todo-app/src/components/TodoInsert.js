import React from 'react';
import { useState, useCallback } from 'react';
import { MdAndroid } from 'react-icons/md';
import './TodoInsert.scss';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 인풋의 상태를 관리한다.

// 리렌더링될 때마다 함수를 새로 만드는 것이 아닌
// useCallback Hook을 통해 함수를 재사용하는...
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    
    // submit 이벤트는 브라우저에서 새로고침을 발생시킴
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // Value 값 초기화

        // 새로고침을 방지하기 위해 아래 함수를 호출
        e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className='ToInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력.'

            /*
            value, onChange 값을 설정하지 않더라도 입력 가능
            리액트 컴포넌트쪽에서 해당 인풋에 무엇이 입력되었는지 추적하지 않기 때문
            이럴경우 state가 잘 업데이트 되는지 확인하려면 onChange 함수 안에 콘솔을 찍어보자
            아니면 크롬의 리액트 개발도구를 사용
            */

            value={value}
            onChange={onChange}
            />
            <button type='submit'>
                <MdAndroid/>
            </button>
        </form>
    )
}
export default TodoInsert;