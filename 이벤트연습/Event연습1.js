import React from 'react';
import { Component } from 'react';

// 클래스형 컴포넌트로 기능을 구현
class EventPractice extends Component {
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          // 콘솔에 기록되는 e 객체는 SyntheticEvent
          // 웹 브라우저의 네이티브 이벤트를 감싸는 객체
          // 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화
          // 예를 들어 0.5초 뒤 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 된다.
          onChange={(e) => {
            // 값이 바뀔 때 마다 바뀌는 값을 콘솔에 기록
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;

// app.js
// import React from 'react';
// import EventPractice from './Event연습1.js'; -> 렌더링

// const App = () => {
//   return <EventPractice />;
// };

// export default App;
