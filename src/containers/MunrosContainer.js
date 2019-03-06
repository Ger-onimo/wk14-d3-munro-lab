import React from 'react'

class MunrosContainer extends React.Component { 

    constructor(props){
        super(props)
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
                Munrocontainer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </div>
        )
    }

}

export default MunrosContainer;