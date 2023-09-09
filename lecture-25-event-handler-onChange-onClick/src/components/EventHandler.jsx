import React, { Component } from 'react'

export class EventHandler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }


    handleOnChange = (e) => {
        this.setState({
            changedValue: e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
        // console.log(this.state.changedValue)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleOnChange} type="text" name="" id="" />
                <h3>Your text preview</h3>
                <h4>{this.state.changedValue}</h4>
            </div>
        )
    }
}

export default EventHandler
