import { Box, Pagination } from '@mui/material'
import React from 'react'

export const ContentPagination = ({page, setPage,numOfPages=10}) => {
    const handleChange =(event,p)=>{
        console.log('oldal',p);
        setPage(p);
        window.scrollTo(0,0)
        }

  return (
    <div className='content-pagination'>
            <Box>
                <Pagination
                count={numOfPages}
                size='large'
                page={page}
                color='primary'
                shape='rounded'
                onChange={handleChange}
                
                />
            </Box>
    </div>
  )
}
