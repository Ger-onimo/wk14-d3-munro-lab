import React from 'react';
import MunroList from "../components/MunroList";
import MunroDetail from "../components/MunroDetail"
import RegionSelect from "../components/RegionSelector"

class MunrosContainer extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            munros: [],
            currentMunro: null
        }
        this.handleRegionSelected = this.handleRegionSelected.bind(this);
    }

    componentDidMount(){
       const url="https://munroapi.herokuapp.com/munros";
       fetch(url)
       .then(res=> res.json())
       .then(data => this.setState({munros: data}))
    }

   handleRegionSelected(event){
    this.setState({regionSelectLocked: true});
    const region=parseInt(event.target.value, 10);
    this.updateRegion(region);
   }

   updateRegion(region){
    this.setState({region: region});
    this.fetchRegionDetail()
   }

    render(){
        return (
            <div>
                <RegionSelect
                selectedRegion={this.state.region} 
                handleRegionSelected= {this.handleRegionSelected}
                locked={this.state.regionSelectLocked}
                />
                <MunroList
                    munros={this.state.munros}
                />
                <MunroDetail/>
            </div>
        )
    }

}

export default MunrosContainer;