import React, { Component } from 'react'
import {Button} from 'antd'
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
            <Button type='primary'>button</Button>
            </div>
        )
    }
}
