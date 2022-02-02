import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box = styled.div`
  paading: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find((x) => x.id === id);

  return (
    <div className="container">
      <box>
        <title className="red">Detail</title>
      </box>
      <div className="my-alert">
        <p>재고없음</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="img"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push('/');
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
