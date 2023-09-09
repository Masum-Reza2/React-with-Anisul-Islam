import React, { Component } from 'react'

export class ClassBasedONChange extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }


    handleOnChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        }, () => {
            console.log(this.state.value)
        })

        // console.log(this.state.value)
    }


    render() {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <input onChange={this.handleOnChange} type="text" name="" id="" />
                    </div>
                    <div>
                        <h2>preview</h2>
                    </div>
                    <div>
                        <h3>{this.state.value}</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassBasedONChange