import React from 'react'


const MunroDetail = (props) => {
    if(!props) return null;
    return (
        <ul>
            {/* <h3>Name</h3> */}
            <h4>{props.name}</h4>
            {/* <h3>Height</h3>
            <h4>{props.height}</h4>
            <h3>Meaning</h3>
            <h4>{props.meaning}</h4> */}
        </ul>
        )
    }

export default MunroDetail;