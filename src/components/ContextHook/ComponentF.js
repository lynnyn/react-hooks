import React from 'react'
import {UserContext , ChannelContext} from '../../App'

// multiple context without context hook
function ComponentF() {
    return (
        <div>
            {/* step 3: consume the context value using the render props pattern */}
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel =>{
                                        return <div>channel name is {channel}, user is {user}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
