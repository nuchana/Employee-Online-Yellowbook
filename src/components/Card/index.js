import React from "react";
import "./style.css";

function Card(props) {
    // a function to create an employee card that is passed on in class components
    return (

        <div className="card2">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
            <div>{props.gender}</div>
            <div>{props.age}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default Card;

