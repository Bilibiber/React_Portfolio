import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2 key={name}>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
