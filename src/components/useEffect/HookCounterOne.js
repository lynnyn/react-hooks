import React , {useState , useEffect} from 'react'


function HookCounterOne() {
    const [count, setCount ] = useState(0)
    const [name, setName] = useState('')

    //useEffect after render, pass the function that need to run after render
    //as a paramenter to useEffect()
    useEffect(()=>{
        console.log('useEffct - updating document title')
        document.title = `You clicked ${count} times`
    },[count])
    //add the array of values to the second parameter to conditionally update

    return (
        <div>
            <input type = "text" value = {name} 
                onChange = { e=>setName(e.target.value)}>
            </input>
            <button onClick = {()=>setCount(count +1 )}>
                Click {count} times
            </button>
        </div>
    )
}

export default HookCounterOne
