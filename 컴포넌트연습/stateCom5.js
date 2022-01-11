import React from 'react';
import { Component } from 'react';

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
class stateCom5 extends Component {
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
            this.setState(
              {
                number: number + 1,
              },
              // setState를 사용하여 업뎃하고 난 다음에 특정 작업을 하고 싶을 때는 콜백 함수를 등록
              () => {
                console.log('방금 setState가 호출되었습니다');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default stateCom5;
