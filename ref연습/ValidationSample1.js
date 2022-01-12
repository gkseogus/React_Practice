import React from 'react';
import { Component } from 'react';
import './ValidationSample1.css';

class ValidationSample1 extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
  };

  render() {
    return (
      // input에서 onChange 이벤트가 발생하면 handleChange를 호출 -> state의 password 값을 업뎃
      // button에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출해 clicked값을 참으로 설정, validated값을 검증 결과로 설정
      // input의 className의 값은 버튼을 누르기 전에는 비어 있는 문자열 전달
      // 버튼을 누른 후에는 검증 결과에 따라 success값 or failure 값을 설정한다. -> 이 값에 따라 초록 ro 빨강으로 색깔 변경
      <div>
        <input
          ref={(ref) => (this.input = ref)} // 콜백함수를 사용해 ref 달기
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample1;

// import React from 'react';
// import { Component } from 'react';
// import ValidationSample1 from './ValidationSample1.js'; -> validationSample1 컴포넌트를 불러와 렌더링

// class App extends Component {
//   render() {
//     return <ValidationSample1 />;
//   }
// }

// export default App;
