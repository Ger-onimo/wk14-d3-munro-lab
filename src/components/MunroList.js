import React from "react";
import MunroDetail from "../components/MunroDetail";

const MunroList = (props) => {
    if(props.munros ==null || props.munros.length ===0){
        return <p>Finding Munros...</p>;
    }

    const munros = props.munros.map((munro, index) => {
        return (
        <MunroDetail 
        key={index}
        name={munro.name}
        height={munro.height}
        meaning={munro.meaning}
         />
        )
    })
    console.log(munros)
    return (
     <div>
         {munros}
     </div>
    )
}

export default MunroList;