import React from 'react';
import { Component } from 'react';

// 클래스형 컴포넌트로 기능을 구현
class EventPractice extends Component {
  // state에 input 값을 넣기
  state = {
    message: '',
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          // input의 value 값을 state에 있는 값으로 설정
          value={this.state.message}
          // 콘솔에 기록되는 e 객체는 SyntheticEvent
          // 웹 브라우저의 네이티브 이벤트를 감싸는 객체
          // 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화
          // 예를 들어 0.5초 뒤 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 된다.
          onChange={(e) => {
            // 이벤트 핸들러 함수 내부에서 this.setState 메서드를 호출해 state 업뎃
            this.setState({
              message: e.target.value,
            });
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
