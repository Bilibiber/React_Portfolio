import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
    }
    userNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    formSubmit = (event)=>
    {
        alert(`Hello ${this.state.userName}`)
        event.preventDefault()
    }
    render() {
        const { userName, password } = this.state
        return (
            <form onSubmit={this.formSubmit}>
                <div>
                    <label>UserName</label>
                    <input type="text" value={userName} onChange={this.userNameChange}></input>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form

