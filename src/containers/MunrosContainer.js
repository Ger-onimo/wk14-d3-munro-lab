import React from 'react';
import MunroList from "../components/MunroList";
import MunroDetail from "../components/MunroDetail"

class MunrosContainer extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            munros: [],
            currentMunro: null
        }
    }

    componentDidMount(){
       const url="https://munroapi.herokuapp.com/munros";
       fetch(url)
       .then(res=> res.json())
       .then(data => this.setState({munros: data}))
    }

   
    render(){
        return (
            <div>
                <MunroList
                    munros={this.state.munros}
                />
                <MunroDetail/>
            </div>
        )
    }

}

export default MunrosContainer;