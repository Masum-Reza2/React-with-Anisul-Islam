import ChildTodo from "./ChildTodo"
import ParentTodo from "./ParentTodo"
import React, { useState } from 'react'

const Grandpa = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div>
            <ParentTodo isLoading={isLoading} setIsLoading={setIsLoading}/>
            <ChildTodo isLoading={isLoading}/>
        </div>
    )
}

export default Grandpa
