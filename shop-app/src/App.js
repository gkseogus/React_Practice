import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoesChange] = useState([Data]);

  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

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
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes[i]} />;
            })}
          </div>
        </div>
      </Route>

      <Route exact path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width="100%"
        alt="shoes"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}
export default App;
