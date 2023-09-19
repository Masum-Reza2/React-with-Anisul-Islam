import Child from './Child'
const parentData = 'this is a data from the parent'

const Parent = () => {

    const getChildData = (data) =>{
        console.log(data)
    }
    
    return (
        <div>
            <Child parentData={parentData} getChildData={getChildData}/>
        </div>
    )
}

export default Parent