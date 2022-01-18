import classNames from 'classnames';

// 여러 가지 종류의 파라미터를 조합해 css 클래스를 설정 가능

const MyComponent = ({ highlighted, theme }) => (
  <div className={`MyComponent ${theme} ${highlighted ? 'highlighted' : ''}`}>
    hello
  </div>
);
