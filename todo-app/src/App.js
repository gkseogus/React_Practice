import React, { useReducer } from 'react';
import { useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList';
import { typeParameterDeclaration } from '../../../../AppData/Local/Microsoft/TypeScript/4.5/node_modules/@babel/types/lib/index.js';


function createBulkTodos() {
  const array = [];
  for (let i =1; i<=2500; i++){
    array.push({
      id:1,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}

/*
reducer 사용 하려면 원래 두 번째 파라미터에 초기 상태를 넣어야 한다.
그 대신 두 번째 파라미터에 undefined를 넣고 
세 번째 파라미터에 초기 상태를 만들어주는 함수는 createBulkTodos를 넣어준다.
그럼 컴포넌트가 맨 처음 렌더링될 때만 createBultTodos 함수가 호출된다.
*/

function todoReducer(todos, action) {
  switch (action.type){
    case 'INSERT': // 새로추가
    // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false }}
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
    // { type: 'REMOVE', id: 1}
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
    // { type: 'REMOVE', id: 1 }}
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !typeParameterDeclaration.checked } : todo,
        );
        default:
          return todos;
  }
}
const App = () => {


  // todos 배열 안의 객체들이 들어있다.
  // 이 배열은 TodoList에 props로 전다로딘다.
  // TodoList에서 이 값을 받아 온 후 TodoItem으로 변환하여 렌더링하도록 설정해야된다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

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
      dispatch({ type: 'INSERT', todo }); // todos =>를 통해 코드를 어떻게 업뎃할지 정의해주는 업뎃 함수로 된다.
      nextId.current += 1; // nextId 1씩 더함
    },
    []
  );

  //  id 삭제 함수
  const onRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id }); 
    },
    []
  )

  // 수정 기능 함수
  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id});
    },
    []
  );

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
  );
};

export default App;
