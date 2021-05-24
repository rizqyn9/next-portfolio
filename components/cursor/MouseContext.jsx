import React, {createContext, useState} from 'react'

/**
 * @enum
 * "link"
 * "nav"
 * "default"
 * 
 */
const MouseContext = createContext({
  type : 'default',
  setType :() => {},
  eventProp : null,
  setEventProp : () => {}
})

export default MouseContext

