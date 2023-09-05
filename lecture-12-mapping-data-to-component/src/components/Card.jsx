import React from 'react'

function Card(props) {

  let { title, desc } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '3px 4px 5px gray', width: '90%', margin: '2rem auto', backgroundColor: 'yellow', borderRadius: '8px' }}>
      <h1>{title || 'title here'}</h1>
      <p>{desc || 'description here'}</p>
    </div>
  )
}

export default Card
