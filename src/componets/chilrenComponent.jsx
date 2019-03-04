import React, { Component } from 'react';



export default class Child extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg:'hello world'
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="container">
                <div>接受父组件传的值为{this.props.message}</div>
               <button onClick={()=>{this.props.getsonToPar(this.state.msg)}}>传值给父组件</button>
            </div>
        )
    }
}