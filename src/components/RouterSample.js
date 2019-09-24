import React, { Component } from 'react'
import {BrowserRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
import {connect,Provider} from 'react-redux'
import {login} from '../store/user.redux'
import store from '../store'
function App(){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/foo'>foo</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <PrivateRoute path='/about' component={About}></PrivateRoute>
                <Route path='/detail/:cource' component={detail}></Route>
                <Route path='/login' component={Login}></Route>
                <Route  component={NoMatch}></Route>
            </Switch>
        </div>
    )
}
function Home(){
    return(
        <div>
            <ul>
                <li><Link to='/detail/vue'>vue</Link></li>
                <li><Link to='/detail/react'>react</Link></li>
                <li><Link to='/detail/python?'>python</Link></li>
            </ul>
        </div>
    )
}
function About(){
    return(
        <div>
            <h1>用户中心</h1>
            <div>
                <Link to='/about/me'>个人信息</Link> <br/>
                <Link to='/about/order'>用户订单</Link>
            </div>
            <Switch>
                <Route path='/about/me' component={()=>(<h2>我的信息</h2>)}></Route>
                <Route path='/about/order' component={()=>(<h2>用户订单</h2>)}></Route>
                <Redirect to='/about/me'></Redirect>
            </Switch>
        </div>
    )
}
function NoMatch(){
    return(
        <h1>404</h1>
    )
}
function detail({match,history,location}){
    console.log(match,history,location);
        
    return(
        <div>
            <div>{match.params.cource}</div>
            <button onClick={history.goBack}>后退</button>
            <button onClick={()=>history.push({pathname:'/'})}>回首页</button>
        </div>
    )
}
//路由守卫
@connect(
    state =>({isLogin:state.user.isLogin}),
)
class PrivateRoute extends Component{
    //({component:Component,...rest}){}
    render(){
        const Component = this.props.component
        debugger
        //redner和Component二选一
        return <Route {...this.props} render={
            (props)=>{
                return this.props.isLogin?(<Component {...props}></Component>) : 
                <Redirect to={{pathname:'/login',state:{from:props.location.pathname}}}></Redirect>
            }
        }></Route> 
    }
};
@connect(
    state =>({isLogin:state.user.isLogin}),
    {login}
)
class Login extends Component{
    render(){
        debugger
        const from = this.props.location.state?this.props.location.state.from:'/'
        if(this.props.isLogin){
            return <Redirect to={from}></Redirect>
        }else{
            return (
                <div>
                    <h2>请先登录</h2>
                    <button onClick={this.props.login}>登录</button>
                </div>
            )
        }
    }
};
export default class RouterSample extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <App></App>
                </Provider>
            </BrowserRouter>
        )
    }
}
