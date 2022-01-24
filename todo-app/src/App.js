import React from 'react';
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList';


const App = () => {


  // todos 배열 안의 객체들이 들어있다.
  // 이 배열은 TodoList에 props로 전다로딘다.
  // TodoList에서 이 값을 받아 온 후 TodoItem으로 변환하여 렌더링하도록 설정해야된다.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리스트1',
      checked: true,
    },
    {
      id: 2,
      text: '리스트2',
      checked: true,
    },
    {
      id: 3,
      text: '리스트3',
      checked: true,
    }
  ]);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  /*
  새로운 객체를 만들기 위해 id값에 1씩 더해줌
  이때 id를 useState가 아닌 useRef인 이유는 id 값은 렌더링되는 정보가 아니기 때문
  즉, id는 화면에 보이지도 않고 이 값이 바뀐다고 해서 리렌더링 할 이유가 없다.
  ㄴ 단순히 새로운 항목을 만들 때 참조되는 값일 뿐
  */

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더함
    },
    [todos],
  )

  //  id 삭제 함수
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  )

  // 수정 기능 함수
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
    },
    [todos],
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  );
};

export default App;
