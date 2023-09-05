import React, { Component } from 'react'

export class Card2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name || 'Sopna'}</h1>
        <h2>{this.props.desc || 'Wife of MR'}</h2>
      </div>
    )
  }
}

export default Card2

// to create a class component shortcut command is rce
// to pass props type {this.props.x}