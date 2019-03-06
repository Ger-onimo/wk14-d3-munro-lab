import React from "react";

const MunroList = (props) => {
  <div>
    {props.munros.map((munro, index) => {
        return(
            <Munro
            key={index}
            name={munro.name}
            height={munro.height}
            meaning={munro.meaning}
            />
        )

    })}
  </div>

}

export default MunroList;