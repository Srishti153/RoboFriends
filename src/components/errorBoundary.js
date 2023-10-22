import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error,info) {
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError === true){
            return <h1>An error occured while loading the page.</h1>
        }
        return (
            <div>
            {this.props.children}
            </div>
        );
    } 
}

export default ErrorBoundary;