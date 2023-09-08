import React, { Component } from 'react'


export class State2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDeCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        let { count } = this.state

        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Count : {count}</h1>
                <button onClick={this.handleCount} disabled={count===5? true: false}>increase</button>
                <button onClick={this.handleDeCount}disabled={count===0? true: false}>decrease</button>
            </div>
        )
    }
}

export default State2