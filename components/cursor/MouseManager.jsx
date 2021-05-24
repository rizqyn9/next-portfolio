import React, {useState} from 'react'
import MouseContext from './MouseContext'

const MouseManager = ({children}) => {
    const [type, setType] = useState('default')
    const [eventProp, setEventProp] = useState(null)
    
    return (
        <MouseContext.Provider value={{type, setType, eventProp, setEventProp}}>
            {children}
        </MouseContext.Provider>
    )
      
}

export default MouseManager