import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

let baseState = [
  {id:0, name: '신발', quan: 2}, // quan : 수량
  {id:1, name: '신발2', quan: 2}
];

//redux에서 데이터 수정 방법을 미리 정의한다.
function reducer(state = baseState, action){
  if (action.type === '수량증가') {

    let copy = [...state];
    copy[0].quan++;
    return copy
  } else if (action.type === '수량감소'){
    let copy = [...state];
    if ( copy[0]>=0 ) {
    copy[0].quan--;
    return copy
    }
  }
  else {
    return state;
  }
}

// state 초기값
let store = createStore(reducer)

// provider 로 감싼 모든 컴포넌트들은 같은 state를 공유한다.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
