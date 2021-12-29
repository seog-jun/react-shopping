/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable */
import React, { useState } from 'react';
import Data from './data';
import {Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
import './App.css';

function App() {

  let [shoes,shoesChange] =useState(Data);
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
             })
          }
          
        </div>
      </div>



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
