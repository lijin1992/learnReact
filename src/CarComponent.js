import React, { Component } from 'react'

function Cart(props) {
    let goodCat = props.goods.map((good)=> <div key={good.id}>
        <span>商品：{good.title}</span> 
        <span>价格：{good.price}</span> 
        <span>数量：{good.count}</span>
        <span>总价：{good.count*good.price}</span>
        <button onClick={()=>props.addCount(good)}>+</button>
        <button onClick={()=>props.minusCount(good)}>-</button>
    </div>)
    return (
        <div>
           {goodCat} 
        </div>
    )
}

export default class CarComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            carList:[
                {id:1,title:'生命在于运动',price:66},
                {id:2,title:'啊，我的祖国',price:66},
            ],
            text:'',
            cat:[],
        }
    }
    addGood = ()=>{
        this.setState((prevState)=>({
            carList:[...prevState.carList,{title:prevState.text,id:prevState.carList.length+1,price:66}],
        }),()=>{
            console.log(this.state.carList);
            
        })
    };
    changeText = (e)=>{
        this.setState({
            text:e.target.value
        })
    };
    addToCat(good){
        let newCat = [...this.state.cat];
        let index = newCat.findIndex((carGood)=> carGood.id === good.id);
        if(index>-1){
            newCat.splice(index,1,{...good,count:newCat[index].count+=1})
        }else{
            newCat.push({...good,count:1})
        }
        this.setState({
            cat:newCat,
        })
    };
    addCount = (good)=>{
        let newCat = [...this.state.cat];
        let index = newCat.findIndex((carGood)=> carGood.id === good.id);
        newCat.splice(index,1,{...good,count:newCat[index].count+=1});
        this.setState({
            cat:newCat,
        })
    };
    minusCount = (good)=>{
        let newCat = [...this.state.cat];
        let index = newCat.findIndex((carGood)=> carGood.id === good.id);
        if(newCat[index].count>1){
            newCat.splice(index,1,{...good,count:newCat[index].count-=1});
        }else{
            newCat.splice(index,1);
        }
        this.setState({
            cat:newCat,
        })
    }
    render() {
        let li = this.state.carList.map(good => <li key={good.id}>{good.title}
            <button onClick={()=>this.addToCat(good)}>加入购物车</button>
            </li>)
        return (
            <div>
                <input onChange={(e)=>this.changeText(e)} value={this.state.text}></input>
                <button onClick={this.addGood}>添加商品</button>
                <ul>
                    {li}
                </ul>
                <Cart goods={this.state.cat} addCount={this.addCount} minusCount={this.minusCount}></Cart>
            </div>
        )
    }
}
