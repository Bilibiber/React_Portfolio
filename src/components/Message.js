import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to My site"
        }
    }

   changeState(){
        this.setState({

            message: 'Thanks for click'
        })
    }
    render() { 
        return ( 
            <div>
                <h1 onClick={()=>this.changeState()}>{this.state.message}</h1>
            </div>
          );
    }
}
 
export default Message;