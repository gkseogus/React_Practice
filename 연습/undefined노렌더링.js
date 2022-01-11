import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    return name || 'is undefined'; // 어떤 값이 undefined일 수도 있다면 or 연산자를 사용하자
}                                  // 해당 값이 undefined일 때 사용할 값을 지정할 수 있어 오류 방지
 
export default App;