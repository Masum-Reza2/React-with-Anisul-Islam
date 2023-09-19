import React, { useState } from 'react'

const Form = () => {
    // we can store the onChange input values into state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // we can store the states of user in a object
    let userInfo = {
        name,
        email,
        password,
        // when the keyName and valueName is same we can write in short like this
    }

    // form onSubmit automatically reload the page to prevent this problem the following function is called.
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userInfo)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" required onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail : </label>
                    <input type="email" name="email" id="email" required onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" required onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form