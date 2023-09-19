const Child = ({ parentData, getChildData }) => {
    console.log('This is child and ' + parentData)

    const childData = 'hello from child'
    getChildData(childData)

    return (
        <div>

        </div>
    )
}

export default Child