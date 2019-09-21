import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date().toLocaleTimeString(),
            name:'李靳'
        }
    }
    componentDidMount(){
        this.setState((prevState,prevProps)=>
          
            ({date:'123'})
            
        )
    }
    render() {
        return (
            <div>
            {this.state.date}
            </div>
        )
    }
}
