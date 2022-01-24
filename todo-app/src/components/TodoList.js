import React from 'react';
import { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

/*
props로 받아 온 todos 배열을 배열 내장함수 mpa을 통해 
TodoListItem으로 이루어진 배열로 변환하여 렌더링
여기서 키는 id(고유값) 이며 todo 데이터는 통째로 props로 전달
여러 종류의 값을 전달할 경우에는 객체를 통째로 전달하는 편이 성능 최적화에 좋다
*/

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return(
                <TodoListItem
                todo = {todo}
                key = {key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    )
    return ( 
       <List
           className="TodoList"
           width={512} // 전체 크기
           height={512} // 전체 높이
           rowCount={todos.length} // 항목 갯수
           rowHeight={57} // 항목 높이
           rowRenderer={rowRenderer} // 항목을 렌더링할때 쓰는 함수
           list={todos} // 배열
           style={{outline: 'none'}} // list에 기본 적용되는 outline 스타일 제거
       />
    );
};

export default React.memo(TodoList);