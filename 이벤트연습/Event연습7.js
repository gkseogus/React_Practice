import React from 'react';
import { Component } from 'react';

// 클래스형 컴포넌트로 기능을 구현
class EventPractice extends Component {
  // state에 input 값을 넣기
  state = {
    username: '',
    message: '',
  };

  // handleChange 임의 메서드 만듬
  // transform-class-properties 문법을 사용 (화살표 함수 형태로 메서드 정의)
  handleChange = (e) => {
    this.setState({
      // input 여러개 다루기 위한 e.target.name
      // e.target.name은 해당 인풋의 name을 가리킨다.
      // username, message를 가리킴
      [e.target.name]: e.target.value,
    });
  };

  // handleClick 임의 메서드 만듬
  // transform-class-properties 문법을 사용 (화살표 함수 형태로 메서드 정의)
  handleClick = (e) => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  // 키를 눌렀을 때 발생하는 keyPress 이벤트
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="아무거나 입력"
          value={this.state.username} // 사용자명
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} // 키 프레스 이벤트
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
