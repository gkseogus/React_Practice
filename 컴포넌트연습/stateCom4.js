import React from 'react';
import { Component } from 'react';

// state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
class stateCom4 extends Component {
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
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            //위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default stateCom4;
