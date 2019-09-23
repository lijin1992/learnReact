import React, { Component } from 'react'
import { Input, Button,Table, Divider, Tag,List, Typography} from 'antd';
function Cart(props) {
    return (
        <div>
          <Table columns={props.columns} dataSource={props.goods} bordered/>
        </div>
    )
}

export default class CarComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            carList:[
                {key:1,title:'生命在于运动',price:66,count:1},
                {key:2,title:'啊，我的祖国',price:66,count:1},
            ],
            text:'',
            cat:[],
            columns:[
                {
                    title: '索引',
                    dataIndex: 'key',
                    key: 'key',
                    align:'center',
                },
                {
                    title: '商品名称',
                    dataIndex: 'title',
                    key: 'title',
                    align:'center',
                },
                {
                    title: '价格',
                    dataIndex: 'price',
                    key: 'price',
                    align:'center',
                },
                {
                    title: '数量',
                    dataIndex: 'count',
                    key: 'count',
                    align:'center',
                },
                {
                    title: '总价',
                    dataIndex: 'all',
                    align:'center',
                    render: (text, good, index) => (
                        <span>
                          {good.count*good.price}
                        </span>
                      ),
                },
                {
                    title: '操作',
                    align:'center',
                    dataIndex: 'tags',
                    render: (index,good) => (
                      <span>
                        <Button type="primary" size="small" onClick={()=>this.addCount(good)} style={{marginRight:'10px'}}>增加</Button>
                        <Button type="primary" size="small" onClick={()=>this.minusCount(good)}>减少</Button>
                      </span>
                    ),
                  },
            ],
        }
    }
    addGood = (value)=>{
        this.setState((prevState)=>({
            carList:[...prevState.carList,{title:value,key:prevState.carList.length+1,price:66}],
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
        let index = newCat.findIndex((carGood)=> carGood.key === good.key);
        newCat.splice(index,1,{...good,count:newCat[index].count+=1});
        this.setState({
            cat:newCat,
        })
    };
    minusCount = (good)=>{
        let newCat = [...this.state.cat];
        let index = newCat.findIndex((carGood)=> carGood.key === good.key);
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
        const { Search } = Input;
        let li = this.state.carList.map(good => <li key={good.key}>{good.title}
            <Button type="primary" size="small" onClick={()=>this.addToCat(good)}>加入购物车</Button>
            </li>)
        return (
            <div>
                <Search
                    placeholder="input search text"
                    enterButton="添加商品"
                    size="large"
                    style={{ width: 500,height:50 }}
                    onSearch={this.addGood}
                />
                <List
                    size="small"
                    bordered
                    dataSource={this.state.carList}
                    renderItem={item => 
                    <List.Item>
                        <span style={{marginRight:'10px'}}>{item.title}</span>
                        <Button type="primary" size="small" onClick={()=>this.addToCat(item)}>加入购物车</Button>
                    </List.Item>
                }
                />
                <Cart goods={this.state.cat} addCount={this.addCount} minusCount={this.minusCount} columns={this.state.columns}></Cart>
            </div>
        )
    }
}
