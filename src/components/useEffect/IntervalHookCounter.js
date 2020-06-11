import React , {useState , useEffect} from 'react'

function IntervalHookCounter() {
    const[count, setCount] = useState(0)

    // tick function would retain a callback function
    // which retrieve the last value of count leading
    //  to a correct increment. 
    const tick = () =>{
        setCount(prevCount =>prevCount +1)
    }

    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        console.log("hello")
        return ()=>{
            clearInterval(interval)
        }
    }, [])


    //conceptually wrong, this will create a new interval timer 
  //  after each time it is created with the inremented count value
    // const tick = () =>{
    //     setCount(count +1)
    // }

    // useEffect(()=>{
    //     const interval = setInterval(tick,1000)
    //     //console.log("hello")
    //     return ()=>{
    //         clearInterval(interval)
    //     }
    // },[count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
