import React from 'react';
import { Component } from 'react';

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
class stateCom1 extends Component {
  // 컴포넌트에 state를 설정할 때는 constructor 메서드를 작성하여 설정
  constructor(props) {
    // constructor를 작성할 때는 super(props)를 호출해야 한다.
    super(props);
    //state의 초기값 설정하기 -> 컴포넌트의 state는 객체 형식이어야 한다.
    this.state = {
      number: 0,
    };
  }
  remder() {
    // state를 조회할 때는 this.state로 조회
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여  state에 새로운 값을 할당할 수 있다. -> 값을 업뎃
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default stateCom1;
