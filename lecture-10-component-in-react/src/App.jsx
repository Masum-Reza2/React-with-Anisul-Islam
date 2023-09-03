import './App.css'
import Greeting from './components/Greeting'

function App() {

  //This is how we can make component in react
  //component Name must be start with capital letter
  let Card = () => {
    return (
      <div>
        <h1 className='cardHeader'>Todo App</h1>
        <p className='cardDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis.z Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, unde possimus rerum harum distinctio earum libero culpa tenetur consectetur architecto fuga sequi dicta ullam sint molestias et sed non.</p>
        <p className='cardDate'>{new Date().toLocaleDateString()}</p>
      </div>
    )
  }

  return (
    <>
      <Card />
      <Card />

      {/* now here im going to import a component from en external folder/file*/}
      {/* Here react will automatically import the path */}
      <Greeting />
      <Greeting />

      {/* once a component is created we can call it anywhere */}
      
    </>
  )
}

export default App