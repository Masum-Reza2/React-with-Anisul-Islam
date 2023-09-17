import { useState } from 'react'

const AdvanceForm = () => {
    // we can store the onChange input values into state
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    let { name, email, password } = user;//destructured from user

    // perInputField/function 
    // const handleNameChange = (e) => {
    //     setUser({ name: e.target.value, email, password })
    // }
    // const handleEmailChange = (e) => {
    //     setUser({ name, email: e.target.value, password })
    // }
    // const handlePasswordChange = (e) => {
    //     setUser({ name, email, password: e.target.value })
    // }

    // one function handle all field
    // const handleOnchange = (e) => {
    //     let fieldName = e.target.name;
    //     if (fieldName === 'name') {
    //         setUser({ name: e.target.value, email, password })
    //     } else if (fieldName === 'email') {
    //         setUser({ name, email: e.target.value, password })
    //     }
    //     else if (fieldName === 'password') {
    //         setUser({ name, email, password: e.target.value })
    //     }
    // }

    // more short
    const handleOnchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    // form onSubmit automatically reload the page to prevent this problem the following function is called.
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" value={name} required onChange={handleOnchange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail : </label>
                    <input type="email" name="email" id="email" value={email} required onChange={handleOnchange} />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" value={password} required onChange={handleOnchange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AdvanceForm