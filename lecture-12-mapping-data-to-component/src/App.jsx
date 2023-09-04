import './App.css'
import Card from './components/Card'
import Data from './Data.json'


// here mapping on data
let x = Data.map((item, index) => {
  return (
    <Card key={index} title={item.title} desc={item.desc} />
  )
})

// using for loop
let allData = [];
for(let i=0; i<Data.length; i++){
  allData.push(<Card key={i} title={Data[i].title} desc={Data[i].desc} />)
}


function App() {

  return (
    <>
      {x}


      {/* directly using js code inside jsx */}
      {Data.map((item, index) => {
        return (
          <Card key={index} title={item.title} desc={item.desc} />
        )
      })}

      {allData}
      
    </>
  )
}

export default App