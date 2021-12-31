/* eslint-disable */
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){

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
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(product.id+1)+'.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">Buy Now</button> 
          <button className="btn btn-danger" onClick={()=>{
              history.push('/');
          }}>Back</button> 
            {    
        props.shoes.forEach((e) => {
        console.log(e.id);
      })
      }
        </div>
       </div>
      </div> 
    )
  }

  export default Detail;