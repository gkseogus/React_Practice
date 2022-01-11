import React from 'react';

function App() {
    const name = '리액트';
    return (
    <div
         style={{ // style 객체를 미리 선언
            backgroundColor: 'black',
            color: 'aqua',
            fontSize: '48px',
            fontWeight: 'bold',
            padding: '16px'
        }}
        >
            {name}
        </div>
    );
}

export default App;