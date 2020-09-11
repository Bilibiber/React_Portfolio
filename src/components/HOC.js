import React,{Component} from 'react';
import './HOC.css';
class HOC extends Component {
constructor(prop){
    super(prop)
    this.state = {
        count:0
    }
}

AddList=()=>{
    this.setState(prevState =>{
        return {count: prevState.count + 1}
    })
}
    render() { 
        const {count} = this.state
        return ( 
            <div className="Container">
                <button onClick={this.AddList}>Clicked {count} time</button>
            </div>
         );
    }
}
 
export default HOC;