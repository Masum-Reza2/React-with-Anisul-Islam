import React, { Component } from 'react'

export class ClassBasedUseState extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handlIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handlIncrement}>Increment</button>
            </div>
        )
    }
}

export default ClassBasedUseState
