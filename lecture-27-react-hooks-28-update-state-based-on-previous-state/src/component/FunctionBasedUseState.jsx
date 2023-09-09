import React, { useState } from 'react'

const FunctionBasedUseState = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default FunctionBasedUseState
