import React from 'react';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // 에러가 발생하면 메소드 호출
  // 이 메소드는 this.state.error 값을 true로 업뎃
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  // render 함수는 this.state.error 값이 true라면 에러가 발생
  render() {
    if (this.state.error) <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}
export default ErrorBoundary;

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
//         <ErrorBoundary>
//           <LifeCycleSample1 color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;
