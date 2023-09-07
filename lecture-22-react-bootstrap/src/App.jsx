import './App.css'
import BasicExample from './components/BasicExample'
import BasicExampleAgain from './components/BasicExampleAgain'
import ReactBootstrap from './components/ReactBootstrap'


function App() {

  return (
    <>
      <BasicExampleAgain />
      {/* <ReactBootstrap /> */}
      <BasicExample Title={'This is title'} desc={'This is the description about react bootstrap. an awesome component library'} btnText = {'Explore more'}/>
    </>
  )
}

export default App