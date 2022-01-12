import React from 'react';
import { Component } from 'react';

class ValidationSample2 extends Component {
  // creatRef를 사용해 ref를 만듬
  // 먼저 컴포넌트 내부에서 멤버 변수로  React.createRef()를 담아줘야 한다.
  // 해당 멤버 변수를 ref 를 달고자 하는 요소에 ref props로 넣어주면 ref 설정 완료
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default ValidationSample2;
