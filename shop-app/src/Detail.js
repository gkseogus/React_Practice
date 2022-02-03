import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { itemContext } from './App';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

let box = styled.div`
  paading: 20px;
`;

function Detail(props) {
  let [alert, alertChange] = useState(true);
  let [inputData, inputDataChange] = useState('');
  let item = useContext(itemContext);
  let [clickTab, clickTabChange] = useState(0);
  let [anyswitch, anyswitchChange] = useState(false);

  // 컴포넌트가 mount, update 될때 특정 코드 실행
  // 라이프사이클
  useEffect(()=>{
    let Timmer = setTimeout(()=>{
      alertChange(false)
    }, 3000)
    // alert 없어지면 타이머도 사라짐
    return ()=>{
      clearTimeout(Timmer);
    }
    // [] = 조건문, alert라는 state가 변경 될 때만 useEffect 실행
  },[alert]);
  
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find((x) => x.id === id);

  return (
    <div className="container">
      <box>
        <title className="red">Detail</title>
      </box>
      
      {/* input데이터를 inputData객체에 저장 */}
      <input onChange={(e)=>{
        inputDataChange(e.target.value)
      }}/>

      {/* UI */}
      {
        alert === true?
              <div className="my-alert">
                  <p>재고없음</p>
              </div> 
        : null
      }

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
          <Info InfoItem={props.item}>

          </Info>
          <button className="btn btn-danger" onClick={()=>{
            props.itemChange(9)
          }}>주문하기</button>
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
      <Nav className='mt-5' fill variant="tabs" defaultActiveKey="/link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{anyswitchChange(false); clickTabChange(0)}}>Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{anyswitchChange(false); clickTabChange(1)}}>Link</Nav.Link>
        </Nav.Item>
      </Nav>

       {/* in = 스위치, true일때만 애니메이션 동작 */}
      <CSSTransition in={anyswitch} classNames="animation" timeout={500}>
        <TabContent clickTab={clickTab} anyswitchChange={anyswitchChange}/>
      </CSSTransition>
    
    

    </div>
  );
}

function TabContent(props){

  useEffect(()=>{
    props.anyswitchChange(true);
  });

  if (props.clickTab === 0) {
  return <div>0번째 내용입니다.</div>
  } else if(props.clickTab === 1) {
  return <div>1번째 내용입니다.</div>
  } else if (props.clickTab === 2) {
  return <div>2번째 내용입니다.</div>
  } 
}

function Info(props) {
  return (
    <p>재고 : {props.item[0]}</p>
  )
}
export default Detail;
