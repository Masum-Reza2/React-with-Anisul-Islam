import React from 'react'
import { v4 as uuidv4 } from 'uuid';

let todos = [
    { title: 'title 1', desc: 'this is the best description in the world 1' },
    { title: 'title 2', desc: 'this is the best description in the world 2' },
    { title: 'title 3', desc: 'this is the best description in the world 3' },
    { title: 'title 4', desc: 'this is the best description in the world 4' },
    { title: 'title 5', desc: 'this is the best description in the world 5' }
]

function Card() {
    return (
        <div>
            {/* generally when we loop in react , each child wants a unque id, generally we provide the index. Instead of index we can generate a umique id using npm package
            >npm i uuid
             */}
            {todos.map((todo, index ) => {

                // here we destructured the object
                let {title, desc} = todo;
                return (
                    // each child element needs a unique key
                    <div key={uuidv4()}>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
