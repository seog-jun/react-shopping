/* eslint-disable */
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding :20px;
`;

let Title = styled.h4`
  font-size:25px;
  color:${props=>props.color}
`;


function Detail(props){

    useEffect(()=>{
    //  let timer = setTimeout(()=>{
    //   var element = document.getElementById("alertDiv");
    //   element.classList.toggle("disappear");
    //  },2000)

    return function a(){};
    });  



  
  
  let {id} = useParams();
    
    

    // // I used for loop to find matched product
    // function matchPrdocut(){
    //     for (let i = 0; i < props.shoes.length; i++) {
    //         if (id == props.shoes[i].id) {
    //             return props.shoes[i];
    //         }
    //     }
    // }
    // var product = matchPrdocut();


    // using find function 
    var product = props.shoes.find((val)=>{
            return id == val.id;
    })

    let history =useHistory();
    
    return (
      <div className="container">
        
        <Box>
          {/* <Title color={'red'}>Detail</Title> */}
          <Title className ="red">Detail</Title>
        </Box>

        <div id="alertDiv" className="my-alert2" >
          <p>It's almost sold out!</p>
        </div>
        
        <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(product.id+1)+'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">Buy Now</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.push('/');
          }}>Back</button> 
            {    
      
      }
        </div>
       </div>
      </div> 
    )
  }

  export default Detail;










  // class Detail2 extends React.Component{

  //   componentDidMount(){

  //   }
  //   componentWillUnmount(){
      
  //   }
  // }