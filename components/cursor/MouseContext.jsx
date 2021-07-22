import React, {createContext, useState} from 'react'
import {atom} from 'jotai'

const MouseStateJot = atom("hahah")


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
export {MouseStateJot}
