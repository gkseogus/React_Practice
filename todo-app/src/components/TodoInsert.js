import React from 'react';
import { MdAndroid } from 'react-icons/md';
import './TodoInsert.scss';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 인풋의 상태를 관리한다.
const TodoInsert = () => {
    return(
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력'/>
            <button type='submit'>
                <MdAndroid/>
            </button>
        </form>
    )
}

export default TodoInsert;