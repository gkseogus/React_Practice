import React from 'react';
import Usehook연습8_1 from './Usehook연습8_1.js';

const Usehook연습8_2 = () => {
  const [state, onChange] = Usehook연습8_1({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Usehook연습8_2;
