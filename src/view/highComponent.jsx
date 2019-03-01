import React from 'react';


export default class HighComponent extends React.Component {
    render() {
        return (
            <div>
                <span onClick={() => this.props.history.push('/')}>回到home</span>
            </div>
        )
    }
}