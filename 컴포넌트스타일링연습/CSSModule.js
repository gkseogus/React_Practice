import React from 'react';
import styles from './CSSModule.module.css';
import classNames from 'classnames/bind';

// 미리 스타일에서 클래스를 받아 오도록 설정
// 사전에 미리 styles에서 받아 온 후 사용하게끔 설정하고 cs(클래스이름, 클래스이름2) 형태로 사용 가능
const cx = classNames.bind(styles);

// CSSModule이 적용된 스타일파일을 불러오면 객체를 하나 전달받는다
// CSSModule에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 있음
const CSSModule = () => {
  return (
    // 두개의 클래스를 하나로 합쳐줌
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
