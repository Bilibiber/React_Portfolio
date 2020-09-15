import React, { Component } from 'react'
import Child from './Child';

class parentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"parent"
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(received){
        alert(`Hello ${this.state.message} from ${received}`)
    }
    
    render() {
        return (
            <div>
              <Child greetParent={this.greetParent}></Child>
            </div>
        )
    }
}

export default parentComponent
