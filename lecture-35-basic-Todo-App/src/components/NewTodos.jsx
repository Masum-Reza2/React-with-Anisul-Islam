import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTodos = ({ handleShowNewTodo }) => {
    const [newTodo, setNewTodo] = useState('')

    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo) {
            return toast.warn('Write something first!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            handleShowNewTodo(newTodo)
            setNewTodo('')
            toast.success('🦄 Todo added!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="p-5 rounded-lg shadow-md shadow-gray-500 min-w-[30vw]">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="newTodo">New Todo : </label>
                    <input value={newTodo} onChange={handleInputChange} className="border shadow-md shadow-gray-500 focus:outline-none text-center" type="text" id="newTodo" name="newTodo" />
                    <div className="text-center mt-3">
                        <button type="submit" className="px-3 py-1 shadow-md shadow-gray-400 hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]">Add Todo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTodos