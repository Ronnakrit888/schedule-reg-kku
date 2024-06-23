import React from 'react'

interface BoxProps {
  row : number,
  column : number,
  length : number,
  color : string,
  colorBorder : string

}

const BoxSubject : React.FC<BoxProps>= ({row, column, length, color, colorBorder}) => {


  return (
    <div
      style={{
        top: `${40 + ((row - 1) * 80)}px`,
        left: `${70 + ((column - 1) * 45)}px`,
        width: length % 2 === 0 ? `${43 * length}px` : `${(44 * length) - 1.5}px`,
        height: "76px",
        backgroundColor: color,
        zIndex: 10,
        position: "absolute",
        borderRadius : '6px',
        border : `2px solid ${colorBorder}`
      }}
    ></div>
  )
}

export default BoxSubject
