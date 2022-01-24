import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


// 컴포넌트에 TodoListItem를 불러와서
//별도의 props 전달 없이 그대로 여러 번 보여준다.
const TodoList = () => {
    return ( 
        <div className='TodoList'>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;