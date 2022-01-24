import React from 'react';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox, // 나중에 할 일이 완료될때 체크된 상태를 보여주기 위함
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일 ui를 보여줌
const TodoListItem = () => {
    return (
        <div className='TodoListItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>할 일</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;