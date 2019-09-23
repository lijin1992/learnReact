import React, { Component } from 'react'
import {connect} from 'react-redux'

@connect(
    state=>({num:state}),
    {
        add:()=>({type:'add'}),
        minus:()=>({type:'minus'}),
    }
)
 class UserStore extends Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
               <button onClick={()=>this.props.add()}>+</button>
               <button onClick={()=>this.props.minus()}>-</button>
            </div>
        )
    }
}
export default UserStore;
