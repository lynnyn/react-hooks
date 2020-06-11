import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        //component clean up code: include it in the function and return 
        //that funcion from the function passed the useEffect
        return()=>{
            console.log('component unmouting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
//pass in a empty array as the second parameter to call render only once

    return (
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
