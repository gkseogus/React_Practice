import React from "react";
import PropTypes from "prop-types";
const isRequired = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다. <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

isRequired.defaultProps = {
  name: "기본 이름",
};

isRequired.propTypes = {
  name: PropTypes.string,
  // 숫자열은 넘버 타입으로
  favoriteNumber: PropTypes.number.isRequired,
};
export default isRequired;
