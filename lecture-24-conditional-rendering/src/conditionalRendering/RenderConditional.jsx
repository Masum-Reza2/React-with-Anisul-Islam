import React, { Component } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'


export class RenderConditional extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        let { isLoggedIn } = this.state;

        // option 01
        // if (isLoggedIn) {
        //     return <HomePage />
        // }
        // else {
        //     return <LoginPage />
        // }

        // option 02 element variable
        // let element;
        // if (isLoggedIn) {
        //     element = <HomePage />
        // }
        // else {
        //     element = <LoginPage />
        // }
        // return element

        // option 03 ternary operator
        return (
            <>
                {/* short circuit can be use directly inside the jsx */}
            
                {/* <div>
                    {isLoggedIn ? <HomePage /> : <LoginPage />}
                </div> */}

                {/* option 04 short circuit */}
                <div>
                    {isLoggedIn && <HomePage />}
                    {isLoggedIn || <LoginPage />}
                </div>
            </>
        )

    }
}

export default RenderConditional