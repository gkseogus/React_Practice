import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

/*
props로 받아 온 todos 배열을 배열 내장함수 mpa을 통해 
TodoListItem으로 이루어진 배열로 변환하여 렌더링
여기서 키는 id(고유값) 이며 todo 데이터는 통째로 props로 전달
여러 종류의 값을 전달할 경우에는 객체를 통째로 전달하는 편이 성능 최적화에 좋다
*/

const TodoList = ({ todos }) => {
    return ( 
        <div className='TodoList'>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />             ))}
            {/* 
            컴포넌트에 TodoListItem를 불러와서
            별도의 props 전달 없이 그대로 여러 번 보여준다.
            <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
        </div>
    );
};

export default TodoList;