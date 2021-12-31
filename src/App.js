/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable */
import React, { useState } from 'react';
import Detail from './Detail';
import Data from './data';
import {Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
import './App.css';
import {Link,Route,Switch} from 'react-router-dom';

function App() {

  let [shoes,shoesChange] =useState(Data);
  

  function sortPrice(){
    var newArray = [...shoes]; 
    var sortedArray = newArray.sort((a,b)=>{
    return a.price-b.price;
  });
    shoesChange(sortedArray);
  }
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              {/* <Nav.Link href="/detail">Detail</Nav.Link> */}
              <Nav.Link><Link className="linkStyle" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="linkStyle" to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
     
     <Switch>
      <Route exact path="/">
        <div className="background">
          <h1>20% Season Off</h1>
          <p>Are you looking for comfortable shoes?</p>
          <p>
          <Button variant="primary">Shopping</Button>{' '}
          </p>
        </div>
  
        <div className="container">
        <div className="row">
          {
          shoes.map((shoes,i)=>{
            return(
              <Product key={i} shoes={shoes} />
             )
             })}
        </div>
      </div>
      <Button variant="primary" onClick={sortPrice}>Sorting</Button>
      {    
        shoes.forEach((e) => {
        console.log(e.id);
      })
      }
      </Route>


      <Route path ="/detail/:id">
        <Detail shoes={shoes} />
      </Route>
      {/* <Route path="/" component={Modal}></Route> */}

      <Route path="/:id">
        <div>everything</div>
      </Route>
    </Switch>

     
   
    </div>
  );
}



function Product(props){

  return(
      <div className="col-md-4">
          <img src={`https://codingapple1.github.io/shop/shoes`+ (props.shoes.id+1) +`.jpg`} width="100%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
  )
}

export default App;
