import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Mason'
        }
        console.log('Constructor called')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('get method called')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        console.log('render method called')
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default LifeCycle
