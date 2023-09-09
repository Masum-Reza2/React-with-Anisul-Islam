import React, { Component } from 'react'

export class BindingEventHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        // binding there
        this.handleOnclick = this.handleOnclick.bind(this)
    }


    // use ES6 function to avoid this provlem
    handleOnclick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.handleOnclick.bind(this)}>Click me</button> */}
                <button onClick={this.handleOnclick}>Click me</button>
            </div>
        )
    }
}

export default BindingEventHandler