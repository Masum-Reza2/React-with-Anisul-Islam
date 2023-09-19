import './App.css'
import Grandpa from './STATE_LIFTING/Grandpa'
import Parent from './components/Parent'

function App() {
  // passing data from child to parent component is so easy just use function as used before. Receive in props and destructure and then use it.

  return (
    <>
      <Parent />

      {/* state lifting */}
      <Grandpa />
    </>
  )
}

export default App
