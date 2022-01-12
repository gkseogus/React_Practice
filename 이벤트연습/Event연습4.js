import React from 'react';
import { Component } from 'react';

// 클래스형 컴포넌트로 기능을 구현
class EventPractice extends Component {
  // state에 input 값을 넣기
  state = {
    message: '',
  };

  // 이벤트에 실행할 JS 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
  // onChange, onClick에 전달할 함수를 따로 빼내서 컴포넌트 임의 메서드 만듬
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // handleChange 임의 메서드 만듬
  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  // handleClick 임의 메서드 만듬
  handleClick(e) {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

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
