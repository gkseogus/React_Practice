import React from 'react';

// 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용
import PropTypes from 'prop-types';

const Mycomponent4 = ({ name, children }) => {
  return (
    <div>
      안녕하세요 제 이름은 {name} <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

Mycomponent4.defaultProps = {
  name: '기본 이름',
};

Mycomponent4.propTypes = {
  // name 은 무조건 문자열 형태로 전달해야 된다는 것을 의미
  name: PropTypes.string,
};

export default Mycomponent4;
