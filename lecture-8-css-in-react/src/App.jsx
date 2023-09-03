import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const headingStyle = {
    color: 'red',
    textAlign: 'center',
    fontSize: '3rem',
    boxShadow: '2px 2px 2px black',
    textShadow : '2px 2px 2px black',
  }

  // we can apply inline style directly in the tag or can make a variable of object and apply them.

  return (
    <>
      <div>
        <h1 style={headingStyle}>hello world</h1>
      </div>

      <div>
        <h1 className='ano-heading'>Another heading to test external CSS</h1>
      </div>
    </>
  )
}

export default App
