import React, { useState } from 'react'

const FunctionalONChange = () => {

    const [preview, setPreview] = useState('')

    let handleChange = (e) => {
        // console.log(e.target.value)
        setPreview(e.target.value)
        // console.log(preview)
    }

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <input onChange={handleChange} type="text" name="" id="" />
                <p>preview</p>
                <p>{preview}</p>
            </div>

        </>
    )
}

export default FunctionalONChange