/*
Uncontrolled
    -Traditional forms ,the DOM itself handle's the form
*/

//js bind() method : with the bind() method an object can borrow a method from an other class making a copy of it

import React from "react";
import { Component } from "react";

export class NameForm extends Component{
    constructor(props){
        super(props);

        this.state =  {uname : '', pwd : '', email : '' }

        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUnameChange(event){
        this.setState({uname : event.target.value});
    }
    handlePwdChange(event){
        this.setState({pwd : event.target.value});
    }

    handleEmailChange(event){
        this.setState({email : event.target.value});
    }

    handleSubmit(event){
        alert('Username :' + this.state.uname + " Email : " + this.state.email);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name : &nbsp; &nbsp;</label>
                    <input type="text" value={this.state.uname} onChange={this.handleUnameChange}/>

                    <label>Password : &nbsp; &nbsp;</label>
                    <input type="password" value={this.state.pwd} onChange={this.handlePwdChange}/>

                    <label>Email : &nbsp; &nbsp;</label>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>

                    <button value="submit">Submit</button>
                    
                </form>
                <br/>
            </div>
        )
    }
    

}