import './App.css'

function App() {

  // to use props at first we are to pass the (props) argument in the component function.
  // using props we can pass value when we call a component.
  // we can also set default props if a props is not passed then default prop will show
  let Card = (props) => {

    // this is how we can destructure, similerly we can desctructure array
    let {title, desc} = props;
    
    return (
      <div>
        <h1 className='cardHeader'>{title || 'App Name'}</h1>
        <p className='cardDesc'>{desc || 'Description'}</p>
        <p className='cardDate'>{new Date().toLocaleDateString()}</p>
      </div>
    )
  }

  return (
    <>
      <Card title={'Todo App'} desc={`This is a app for setting your daily task\'s. If your memory is also like Einstein, you forget your address or anything then this is going to be the best of in your life`} />

      {/* so we can pass props in the same component with different values */}
      
      <Card title={'Weather App'} desc={'This is a description about weather app'}/>

    </>
  )
}

export default App