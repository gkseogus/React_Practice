import React from 'react';
import { Component } from 'react';

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
class stateCom3 extends Component {
  //constructor 메서드를 선언하지 않고도 state 초깃값을 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };
  remder() {
    // state를 조회할 때는 this.state로 조회
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여  state에 새로운 값을 할당할 수 있다. -> 값을 업뎃
            this.setState({ number: number + 1 });
            // this.setState를 사용한다고 해서 state 값이 바로 바뀌지 않음
            // 객체 대신에 함수를 인자로 넣어주면 아래 this.setState 도 사용 가능
            // prevState는 기존 상태, props는 현재 지니고 있는 props를 가리킴 -> 업뎃 과정에서 props가 필요하지 않다면 생략 가능
            this.setState((PrevState, props) => {
              return { number: this.state.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default stateCom3;
