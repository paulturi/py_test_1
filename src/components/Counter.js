import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(100)

    return (
        <div>
            <h2>{count}</h2>
            <br></br>
            <button onClick={() => setCount(count + 100)}>Click Plus</button>
        </div>
    )
}
export default Counter