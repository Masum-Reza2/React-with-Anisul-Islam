import { useState } from "react"

const RecapFormMgt = () => {

    // holding input fields in state
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    let { name, email, password } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

        // let fieldName = e.target.name;
        // if (fieldName === 'name') {
        //     setUser({ name: e.target.value, email, password })
        // } else if (fieldName === 'email') {
        //     setUser({ name, email: e.target.value, password })
        // } else if (fieldName === 'password') {
        //     setUser({ name, email, password: e.target.value })
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Registration Form.</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default RecapFormMgt