import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={()=>props.greetParent('Mason')}>Greek Parent</button>
        </div>
    )
}

export default Child
