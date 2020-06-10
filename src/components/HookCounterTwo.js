import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = ()=>{
        for(let i = 0 ; i < 5; i ++){
            setCount( prveCount => prveCount + 1)
        }
    }
    return (
        <div>
            count: {count}
            <button onClick = {() =>setCount(initialCount)}>Reset</button>
            <button onClick = {() =>setCount(count + 1)}>Increment</button>
            <button onClick = {() =>setCount(count - 1)}>Decrement</button>
            <button onClick = {incrementFive}>increment 5</button>
        </div>
    )
}

export default HookCounterTwo
