import React from 'react';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <span onClick={()=>this.props.history.push('about')}>去detail</span>    
            </div>
        )
    }
}