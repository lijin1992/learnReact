import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,minus,asyncAdd} from './store/count.redux'
@connect(
    state=>({num:state.count}),
    {
        add,
        minus,
        asyncAdd
    }
)
 class UserStore extends Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
               <button onClick={()=>this.props.add()}>+</button>
               <button onClick={()=>this.props.minus()}>-</button>
               <button onClick={()=>this.props.asyncAdd()}>async</button>
            </div>
        )
    }
}
export default UserStore;
