import React ,{useState} from 'react'
import HookMouse from '../useEffect/HookMouse'

function MouseContainer() {
    const [ display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
