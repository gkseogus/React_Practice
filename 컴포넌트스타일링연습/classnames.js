import classNames from 'classnames';

// 여러 가지 종류의 파라미터를 조합해 css 클래스를 설정 가능
classNames('one', 'two');
classNames('one', { two: true });
classNames('one', { two: false });
classNames('one', ['two', 'three']);
