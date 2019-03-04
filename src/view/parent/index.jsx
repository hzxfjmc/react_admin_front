import React from 'react';
import Child from "../../componets/chilrenComponent";

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         txt0:"默认值0",
         txt1:"默认值1"
        }
       }
       componentDidMount(){
      
       }
       parToson(){
        this.setState({
         txt0:"哈哈哈哈"
        })
       }
       sonToPar(e){
        this.setState({
         txt1:e
        })
       }
       render(){
        const style={
         paddingLeft:"150px"
        }
        return(
         <div style={style}>
          <button onClick={this.parToson.bind(this)}>传值给子组件</button>
          <div>接受子组件的传值为：{this.state.txt1}</div>
          <br/>
          <Child message={this.state.txt0} getsonToPar={this.sonToPar.bind(this)}/>
         </div>
        )
       }
}