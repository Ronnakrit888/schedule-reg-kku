import React from 'react'
import { Grid, Box, Container } from '@mui/material'

interface TableProps {
    columns : number
  
  }

const TableVersion2 : React.FC<TableProps> = ({columns}) => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={1}
        sx={{
            '--Grid-borderWidth' : '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div' : {
                borderRight : 'var(--Grid-borderWidth) solid',
                borderBottom : 'var(--Grid-borderWidth) solid',
                borderColor : 'divider',
                
            }
        }}
      >
        {[...Array(60)].map((_, index) => (
            <Grid key={index} xs={1} sm={1} md={1} lg={1} minHeight={100} sx={{ '&:hover' : { bgcolor: 'black'}}}/>
        ))}
      </Grid>
    </Container>
  )
}

export default TableVersion2
