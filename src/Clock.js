import React from 'react';
import ReactDOM from 'react-dom/client';

export class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date(), name: 'Zion Sun'};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        let currentName = this.state.name;
        if(this.state.name == 'Zion Sun'){
            currentName = 'Brandon Sun'
        }
        else{
            currentName = 'Zion Sun'
        }
        this.setState({
            date: new Date(),
            name: currentName
        });
    }
    render(){
        return(
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
                <h2>My name is {this.state.name}</h2>
            </div>
        )
    };
}
