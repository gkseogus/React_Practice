import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

function App() {
  let [shoes] = useState(Data);

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
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} />;
              })}
            </div>
          </div>
        </Route>

        <Route path="/Detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
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
        alt="img"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}
export default App;
