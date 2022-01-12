import React from 'react';
import { Component } from 'react';

class ScrollBox2 extends Component {
  // 스크롤바를 맨 아래쪽으로 내리려는 알고리즘
  // scrollTop : 세로 스크롤바 위치(0~350)
  // scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
  // clientHeight : 스크롤이 있는 박스의 높이 (300)
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)',
    };
    return (
      <div>
        style={style}
        ref=
        {(ref) => {
          this.box = ref;
        }}
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox2;

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox2 ref={(ref) => (this.ScrollBox2 = ref)} />
//         <button onClick={() => this.ScrollBox2.scrollToBottom()}>
//           맨밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
