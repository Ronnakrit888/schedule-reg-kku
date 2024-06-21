import React from 'react'
import { Box } from '@mui/material'

interface BoxProps {
  fromLeft : number,
  fromTop : number,
  length : number

}

const BoxSubject : React.FC<BoxProps>= ({fromLeft, fromTop, length}) => {


  return (
    <div
      style={{
        top: `${61 + ((fromTop - 1) * 80)}px`,
        left: `${102 + (fromLeft * 50)}px`,
        width: `${50 * length}px`,
        height: "78px",
        backgroundColor: "rgb(75, 112, 245)",
        zIndex: 10,
        position: "absolute",
        borderRadius : '3px',
        border : '1px solid rgb(76, 59, 207)'
      }}
    ></div>
  )
}

export default BoxSubject
