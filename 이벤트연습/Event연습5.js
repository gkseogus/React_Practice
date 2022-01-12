import React from 'react';
import { Component } from 'react';

// 클래스형 컴포넌트로 기능을 구현
class EventPractice extends Component {
  // state에 input 값을 넣기
  state = {
    message: '',
  };

  // handleChange 임의 메서드 만듬
  // transform-class-properties 문법을 사용 (화살표 함수 형태로 메서드 정의)
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  // handleClick 임의 메서드 만듬
  // transform-class-properties 문법을 사용 (화살표 함수 형태로 메서드 정의)
  handleClick = (e) => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
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
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
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
