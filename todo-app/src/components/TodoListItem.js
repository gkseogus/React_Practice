import React from 'react';
import cn from 'classnames';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox, // 나중에 할 일이 완료될때 체크된 상태를 보여주기 위함
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일 ui를 보여줌
const TodoListItem = ( { todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    return (
        // virtulaized 클래스로 감싼 이유는 컴포넌트 사이사이에 테두리 쳐주고
        // 홀수, 짝수 번째 항목에 다른 배경 색상을 설정하기 위해서다
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox />: <MdCheckBoxOutlineBlank />}
                    <div className='text'>{text}</div>
                </div>

                {/*  버튼을 누르면 id 삭제 함수 호출 (id 값 넣음) */}
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(
    TodoListItem,
    (prevProps, nextProps) => prevProps.todo === nextProps.todo,);