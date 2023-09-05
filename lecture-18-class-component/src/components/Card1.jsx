import React from 'react'

function Card1(props) {
  return (
    <div>
      <h1>{props.name || 'Name here'}</h1>
      <h1>{props.desc || 'Description here'}</h1>
    </div>
  )
}

export default Card1