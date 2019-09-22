import React, { Component } from 'react'
const withName = Comp =>{
    return props => <Comp {...props} name="娃哈哈-高级组件赋予" />
}
@withName
class Hoc extends Component {
    render() {
        return (
            <div>
              <p>{this.props.title}-{this.props.name}</p>  
            </div>
        )
    }
}
 export default Hoc
