import { Component } from "react";

// for functional component we use hook
// for class component we use state

export class State extends Component {
    constructor() {
        super();
        this.state = {
        count : 0
        };
    }
    
    render() {
        return (
        <>

            <h1>State component</h1>
            <h1>Count : {this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment
            </button>

            
        </>
        );
    }
}