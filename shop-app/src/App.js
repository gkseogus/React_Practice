import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import shoesData from './data.js';

function App() {
  const [shoes, shoesChange] = useState([shoesData]);

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

      <div class="container-fluid bg-dark text-light p-5">
        <div class="container bg-dark p-5">
          <h1 class="display-4">최상의품질</h1>
          <p>Buy it right away</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {shoes.Map((i) => {
            return <Card shoes={shoes[i]} />;
          })}
        </div>
      </div>
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
