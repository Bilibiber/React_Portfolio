import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state={
            number : 0
        }
    }

    increment(){
        this.setState((preState)=>({
            number : preState.number + 1
        }))
    }

    render() {
        return (
            <div>
                <h1>Counter is {this.state.number}</h1>
                <button className="centerMe" onClick={()=>this.increment()}>Add One</button>
            </div>
        )
    }
}

export default  Counter
