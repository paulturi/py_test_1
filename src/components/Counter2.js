import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(30)

    return(
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => setCount(count + 3)}>on click</button>
        </div>
        
    )
}
export default Counter