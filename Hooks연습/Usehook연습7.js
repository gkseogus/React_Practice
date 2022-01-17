import React from 'react';
import { useRef } from 'react';

// 아래 코드를 위처럼 변경 가능
const Usehook연습7 = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refsample</div>;
};

// class Usehook연습7 extends Component {
//   id = 1;
//   setId = (n) => {
//     this.id = n;
//   };
//   printId = () => {
//     console.log(this.id);
//   };
//   render() {
//     return <div>MyComponet</div>;
//   }
// }

export default Usehook연습7;
