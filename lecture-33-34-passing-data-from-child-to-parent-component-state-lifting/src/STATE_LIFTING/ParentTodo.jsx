

const ParentTodo = ({ isLoading, setIsLoading }) => {
    // the state lifted from here to their common parent

    return (
        <div>
            <h1>This is parent. {isLoading? 'state available':'state unavailable'}</h1>
            <button onClick={() => setIsLoading(!isLoading)}>toggle State</button>
        </div>
    )
}

export default ParentTodo