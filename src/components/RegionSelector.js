import React from 'react'

const RegionSelect = (props) => {

const options = props.regions.map((region, index) => {
    return (
        <option key={index} value = {region}>{region}</option>
    )
})
    return (
        <div>
            <label>Region</label>
            <select
            disabled={props.locked}
            onChange={props.handleRegionSelected}
            value={props.seletedRegion}
            >
            {option}
            </select>   
        </div>
    );
}

export default RegionSelect;