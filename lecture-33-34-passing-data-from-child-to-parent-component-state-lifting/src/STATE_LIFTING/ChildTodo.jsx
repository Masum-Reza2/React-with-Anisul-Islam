import React from 'react'

const ChildTodo = ({ isLoading }) => {
    return (
        <div>
            <h1>This is children {isLoading? 'state available': 'state unavilable'}</h1>
        </div>
    )
}

export default ChildTodo
