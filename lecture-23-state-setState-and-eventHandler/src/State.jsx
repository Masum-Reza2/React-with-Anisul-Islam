import React, { Component } from 'react'

export class State extends Component {

    // basic structure for state
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        let { count } = this.state;
        return (
            <div style={{textAlign:'center'}}>
                <h1>{count}</h1>
                <button onClick={this.handleIncrement}disabled={count===10?true:false}>+</button>
                <button style={{marginLeft:'10px'}} onClick={this.handleDecrement}disabled={count===0?true:false}>-</button>
            </div>
        )
    }
}

export default State