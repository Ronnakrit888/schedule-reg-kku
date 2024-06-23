import React from 'react'

interface BoxProps {
  row : number,
  column : number,
  length : number

}

const BoxSubject : React.FC<BoxProps>= ({row, column, length}) => {


  return (
    <div
      style={{
        top: `${40 + ((row - 1) * 80)}px`,
        left: `${70 + ((column - 1) * 90)}px`,
        width: `${50 * length}px`,
        height: "70px",
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
