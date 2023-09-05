import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

// in this tutorial we are going to learn the class components in react.
// checkout the card2 component

function App() {


  return (
    <>
      <Card1 name={'Masum Reza'} desc={`This is desc about Masum Reza`} />

      <Card2 name={'Sopna Islam'} desc={'The wife od mr'}/>
    </>
  )
}

export default App