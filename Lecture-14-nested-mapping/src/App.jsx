import './App.css'


let details = [
  {
    name: 'Masum Reza',
    age: 22,
    address: [{ vill: 'Kalenga', dist: 'Moulvibazar', div: 'Sylhet' }]
  },
  {
    name: 'Hasan Reza',
    age: 22,
    address: [{ vill: 'Kalenga', dist: 'Moulvibazar', div: 'Sylhet' }]
  },
  {
    name: 'Salim ulah',
    age: 22,
    address: [{ vill: 'Kalenga', dist: 'Moulvibazar', div: 'Sylhet' }]
  },
  {
    name: 'Katappa Reza',
    age: 22,
    address: [{ vill: 'Kalenga', dist: 'Moulvibazar', div: 'Sylhet' }]
  },
]


function App() {

  return (
    <>
      <div>
        {details.map((info, index) => {
          let { name, age, address } = info;
          return <div style={{ border: '2px solid red', padding: '10px', margin: '20px 5px', borderRadius: '7px', boxShadow: '3px 4px 5px black', textAlign: 'center' }} key={index}>
            <h2>FullName : {name}</h2>
            <h2>age : {age}</h2>
            <h2>Adrress</h2>
            {address.map(item => {
              let { vill, dist, div } = item;
              return (
                <>
                  <h2>{vill}</h2>
                  <h2>{dist}</h2>
                  <h2>{div}</h2>
                </>
              )
            })}
          </div>
        })}
      </div>
    </>
  )
}

export default App