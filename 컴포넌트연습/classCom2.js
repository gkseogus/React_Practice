import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import PropType from 'prop-types';

class classCom extends Component {
  // 클래스형 컴포넌트에서 defaultProps, propTypes를 설정할때
  // class 내부에서 지정할 수도 있다.
  static defaultProps = {
    name: 'defaultName',
  };
  static PropType = {
    name: PropType.string,
    favoriteNumber: PropType.number.isRequired,
  };
  // 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props 를 조회하면 된다.
  remder() {
    const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children}
        입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default classCom;
