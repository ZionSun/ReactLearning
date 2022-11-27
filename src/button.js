import React from 'react';
import ReactDOM from 'react-dom/client';

export class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {toggleStatus: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(
            function (prevState){
                return {toggleStatus: !prevState.toggleStatus}
            }
        )
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.toggleStatus ? 'ON' : 'OFF'}
            </button>
        );
    }
}