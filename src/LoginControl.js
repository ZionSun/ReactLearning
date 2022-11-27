import React from 'react';
import ReactDOM from 'react-dom/client';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Sign up here.</h1>;
  }

function LoginButton(props){
    return(
        <button onClick = {props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick = {props.onClick}>
            Logout
        </button>
    );
}

function Greeting(props){
    const logStatus = props.logStatus; 
    if(logStatus){
        return <UserGreeting />
    }
    else{
        return <GuestGreeting />
    };
}

export class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {LogStatus: false};
    }

    handleLoginClick(){
        this.setState({logStatus: true});
    }

    handleLogoutClick(){
        this.setState({logStatus: false});
    }

    render(){
        let currentLogStatus = this.state.logStatus;
        let button;
        let greeting;
        if(currentLogStatus){
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
            greeting = <Greeting logStatus = {currentLogStatus} />;
        }
        else{
            button = <LoginButton onClick = {this.handleLoginClick} />
            greeting = <Greeting logStatus = {currentLogStatus} />;
        }

        return (
            <div>
                {greeting}
                {button}
            </div>
        );
    };
}