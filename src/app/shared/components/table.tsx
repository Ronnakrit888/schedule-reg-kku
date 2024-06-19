import React from 'react'
import { Container, Stack, Box } from '@mui/material'

interface TableProps {
  rows : number
  columns : number

}

const Table: React.FC<TableProps> = ({rows, columns}) => {

  const weekdays : string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  return (
    <Container sx={{ minWidth : '1200px', maxWidth: '1800px' ,justifyContent : "center  ", alignItems : "center"}}>
      <Stack>
        {Array.from({ length: rows}).map((_, rowIndex) => (
          <Stack direction="row" key={rowIndex}>
            {Array.from({ length: columns}).map((_, colIndex) => (
              <Box
                key={colIndex} 
                width={150}
                height={rowIndex === 0 ? 50 : 100}
                sx={{ border: '2px solid grey', '&:hover' : {
                  bgcolor: 'yellow'
                }}}
                >
                { (colIndex === 0 && rowIndex <= 5) ? weekdays[rowIndex] : `R${rowIndex + 1}C${colIndex + 1}`}
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    </Container>
  )
}

export default Table
