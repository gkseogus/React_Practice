import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';

// 같은 값을 공유하는 범위를 생성한다.
export let itemContext = React.createContext();

function App() {
  let [shoes,shoesChange] = useState(Data);
  let [item, itemChange] = useState([10,11,12]);


  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link}to="/">Home
              </Nav.Link>
              <Nav.Link as={Link}to="/detail">Detail
              </Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <Switch>
        {/* 라우팅 */}
        <Route exact path="/">
          {/* 점보 */}
          <div class="container-fluid bg-dark text-light p-5">
            <div class="container bg-dark p-5">
              <h1 class="display-4">최상의품질</h1>
              <p>Buy it right away</p>
            </div>
          </div>

          <div className="container">
             {/* 공유하려는 데이터 = item */}
            <itemContext.Provider value={item}>
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
            </itemContext.Provider>
            <button className='btn btn-primary' onClick={()=>{
              
              // get 요청, axios는 알아서 JSON을 Object로 바꿔준다.
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                // ajax로 가져온 자료 출력
                console.log(result.data);
                shoesChange([...shoes, ...result.data]);
              })
              .catch(()=>{
                console.log('err');
              })
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/Detail/:id">
          <itemContext value={item}>
            <Detail shoes={shoes} item = {item} itemChange={itemChange} />
          </itemContext> 
        </Route>

        <Route path="/:id">
          <div> 로딩중 </div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {

  // 값 공유 (useContext(범위이름))
  let item = useContext(itemContext);

  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width="100%"
        alt="img"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test>
      </Test>
    </div>
  );
}

// props선언 없이 공유된 값을 가짐
function Test() {
  let item = useContext(itemContext);
  return <p>{item[0]}</p>
}
export default App;
