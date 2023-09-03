import './App.css'

function App() {

  return (
    <>
      <div>
        <h1 className='cardHeader'>Todo App</h1>
        <p className='cardDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis.z Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, unde possimus rerum harum distinctio earum libero culpa tenetur consectetur architecto fuga sequi dicta ullam sint molestias et sed non.</p>
        <p className='cardDate'>{new Date().toLocaleDateString()}</p>
      </div>
    </>
  )
}

export default App
