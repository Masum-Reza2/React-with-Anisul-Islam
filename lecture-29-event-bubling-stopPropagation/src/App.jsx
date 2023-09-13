import './App.css'
// event bubling | stopPropagation
/**
 * Generally when a child trigger a function then it's parent function also triggered automatically.this is called event bubling.
 * when we are handling a function in children as well as in the parent we are to stop this propagation from children so that this may not able to trigger the parent function.
 */

function App() {

  // function for parent
  const handleParent = (event) =>{
    console.log('parent event', event)
  }

  // function for children
  const handleChildren = (event) =>{
    event.stopPropagation()
    console.log('child event', event)
  }

  return (
   <>
    <div onClick={handleParent} style={{border:'2px solid red', padding:'50px', textAlign:'center'}}>
      <button onClick={handleChildren}>Click me</button>
    </div>
   </>
  )
}

export default App
