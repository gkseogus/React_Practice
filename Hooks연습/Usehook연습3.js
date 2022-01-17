import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Usehook연습3 = () => {
  // 상태가 여러개 인 경우 useState를 여러개 사용하면 됨
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // useEffect는 리액트의 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 설정하는 hook
  // 컴포넌트가 나타날 때 콘솔에 effec가 나타나고 사라질 때 cleanup 이 나타남
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b> 이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Usehook연습3;
