import React from 'react';


export default class About extends React.Component {
    //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
    state = {
        msg:'hello world',
        phoneNo:'31232'
    }
    componentWillMount(){
        console.log(`--------------componentWillMount------------------`)
    }

    // 组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。
    componentDidMount(){
       
        console.log(`---------------componentDidMount-------------------`)
    }

    //绑定事件
    test(){
        this.setState({
            msg:'fhjskdjhfkjsdhf'
        })
    }

    //提交
    handleInput(key,e){
        console.log(key);
        console.log(e.target.value)
    }
   
    render() {
        return (
            <div>
                {/* <span onClick={() => this.props.history.push('/')}>{this.state.msg}</span> */}
                <span onClick={this.test.bind(this)}>{this.state.msg}</span>
                {/* <input type="text" placeholder="请输入客户电话" value={this.props.phoneNo} onChange={this.handleInput.bind(this,"phone")}/> */}
            </div>
        )
    }
}