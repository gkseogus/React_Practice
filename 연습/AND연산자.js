import React from 'react';

function App() {
    const name = "리액트"; 
    return <div>{name === '리액트' ? <h1>리액트입니다.</h1>: null}</div>; // 리액트가 아니면 null
    // 옵셔널체이닝(?) 대신 && 넣어도 됨 -> {name === '리액트' && <h1>리액트입니다.</h1>}
    // 하지만 falsy한 값인 0은 예외적으로 화면에 나온다.
}

export default App;