import React from 'react';
import { Component } from 'react';

class LifeCycleSample1 extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // props에 있는 값을 state에 넣을 때 사용하는 메소드
  // 부모에게 받은 color 값을 state에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트가 리렌더링을 해야 할지 말지 결정하는 메소드
  // 이 메소드는 true 혹은 false 값을 반환하며 라이프사이클 메소드를 계속 실행하거나 중지함
  // 즉 컴포넌트가 리렌더링 되지 않음 특정 함수에서 this.forceupdate() 함수를 호출하면 이 과정 생략
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메소드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메소드
  // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 컴포넌트의 업뎃 작업이 끝난 후 호출하는 메소드
  // 위 메소드 값을 조회
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample1;

// import React from 'react';
// import { Component } from 'react';
// import LifeCycleSample1 from './LifeCycleSample1.js';

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#00000',
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <LifeCycleSample1 color={this.state.color} />
//       </div>
//     );
//   }
// }

// export default App;
