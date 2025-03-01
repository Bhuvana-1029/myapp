import React from "react"
import "./FoodCard.css";

const FoodCard=()=>{
    return(
        <div>
            <img src={props.img}alt=""/>
            <h1>{props.productName}</h1>
        </div>
    )
}
export default FoodCard