import React, { useState } from 'react'

const UpdateStateBasedOnPreviousState = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        // setCount(count + 1);
        // expectation is it will increase 3 times, but never, react take snapshots and will never increase it by 3 times.
        // setCount(count + 1);
        // setCount(count + 1);

        // solution of this problem, updating state based on previous state.
        setCount(count => count + 1);
        setCount(x => x + 1);
        setCount((prevCount) => {
            return prevCount + 1
        });
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UpdateStateBasedOnPreviousState