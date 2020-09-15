import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            message: "Conditional_ Rendering"
        }
    }

    render() {
        return this.state.isLoggedIn ? (<div>Welcome Mason</div>) : (<div>Welcome Fan</div>)
        {/* if-else rendering */ }
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Mason
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Fan
                </div>
            )
        }
        return (
            <div>

                <p></p>
                <p></p>
            </div>
        )
    }
}

export default UserGreet
