
// 当前组件为UI组件
import 'whatwg-fetch';
import React, { Component } from 'react';
class Home extends Component {
  constructor(props){
  	super(props)
    this.state = {
      user:[]
    }
    console.log(props)
  }
  componentDidMount(){
    fetch('http://localhost:3000/hot')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      this.setState({
        user:data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  addOneClick = () =>{
    //增加一方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.addNum(nums) 
  }
  addFiveClick = () =>{
    //增加五方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.addNum(nums)
  }
  reduceOneClick = () =>{
    //减少1方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.reduceNum(nums)
  }
  //异步减少5
  reducerNumAsync = () =>{
    //减少5方法
    const nums = parseInt(this.refs.numValue.value);
    this.props.reducerNumAsync(nums);
  } 
  render() {
    const {num} = this.props;
    return (
      <div>
        home组件:
        <select ref="numValue">
           <option value="1">1</option>
           <option value="5">5</option>
        </select>
        <br/>
        <div>{num}</div>
        <button onClick={this.reduceOneClick}>减少1</button>
        <button onClick={this.reducerNumAsync}>减少5</button>
        <button onClick={this.addOneClick}>增加1</button>     
        <button onClick={this.addFiveClick}>增加5</button>
        <div>
          {
            this.state.user.map((item,index)=>{
              return (
                <p key={index}>{item.userName}-{item.age}-{item.id}</p>
              )
            })
          }
        </div>
      </div>
    );

  }
}

export default Home;
