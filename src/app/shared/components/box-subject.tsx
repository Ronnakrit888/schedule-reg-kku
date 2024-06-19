import React from 'react'
import { Box } from '@mui/material'

interface BoxProps {
  row : number,
  column : number,

}

const BoxSubject : React.FC<BoxProps>= ({row, column}) => {
  return (
    <Box
        sx={{
            width : 75,
            height : 75,
            borderRadius : 1,
            bgcolor : '#007FFF',
            ' &:hover' : {
                bgcolor : '#0066CC'
            },
            border: '2px solid grey'
                       
        }}
    />
  )
}

export default BoxSubject
