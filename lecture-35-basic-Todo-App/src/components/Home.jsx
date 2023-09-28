import { useState } from "react"
import NewTodos from "./NewTodos"

const dummyTodos = ['complete jhankars web dev course', 'complete anisuls react course']

const Home = () => {
    const [displayTodo, setDisplayTodo] = useState(dummyTodos)

    const handleShowNewTodo = (data) => {
        setDisplayTodo([...displayTodo, data])
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center space-y-10">
            <div className="p-5 rounded-lg shadow-md shadow-gray-500 min-w-[30vw]">
                <h1 className="underline font-semibold">Your todos...</h1>
                {
                    displayTodo.map((todo, index) => <div key={index}>
                        <p>{`${index + 1}.${todo}`}</p>
                    </div>)
                }
            </div>
            <NewTodos handleShowNewTodo={handleShowNewTodo} />
        </div>
    )
}

export default Home