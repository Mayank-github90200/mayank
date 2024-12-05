import React from 'react'
import pic from "../images/th.jpeg"
import "../CRA/card.css";
const Card = (props) => {
  return (
    <div className='card'>     
      <h1>{props.name}</h1>
     <img src={props.pic} alt= "my image" height="500px" width="250px"/> 
    <h2>{props.roll}</h2>
    <h2>{JSON.stringify(props.date)}</h2>
        <h2 style={{marginBottom: "10px"}}>
          {props.date.toLocaleString()}
        </h2>
        <p style={{color: "red", fontSize: "30px"}}>
          {props.year.join(" ")}
        </p>
    </div>
  );
};

export default Card;