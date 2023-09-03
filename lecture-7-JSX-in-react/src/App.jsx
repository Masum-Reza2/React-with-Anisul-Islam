import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let greeting = 'Hello world!';
  let description = 'here we are going to learn JSX in react js. For example we are taking date to explain the metter.';

  let date = new Date();

  let today = date.getFullYear()

  let day = date.getDate();
  let month = date.getMonth();
  let year = today;

  let fullDate = [day, month, year]

  // variable
  let apart = <>
    <div>
      <h1>hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nisi.</p>
      <p>let's do it</p>
    </div>
  </>

  return (
    <>
      <h1>{greeting}</h1>
      <p>{description}</p>
      <h3>{today}</h3>
      <h4>{new Date().getMonth()}</h4>

      <h1>{day + '/' + month + '/' + year}</h1>

      <h1>{`${day}/${month}/${year}`}</h1>

      <h1>{fullDate.map(x => x).join('/')}</h1>

      <h1>{fullDate.join('/')}</h1>

      {apart}
    </>
  )
}

export default App
