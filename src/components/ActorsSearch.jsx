import { TextField, createTheme, ThemeProvider, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ActorsResults } from './ActorsResults';
import { ActorsPopular } from './ActorsPopular';

export const ActorsSearch = () => {
const [searchText, setSearchText] = useState("")
const [fetchData, setFetchData] = useState(false)

  const darkTheme=createTheme({
    palette: {
      mode: 'dark',
    },
  })

  
const handleChangeText=(e)=>{
  setFetchData(false)
  setSearchText(e.target.value)
}
 //console.log(searchText);

    return (
        <div style={{flexWrap:"wrap", display:"flex",  flexDirection:"column"}}>
    <ThemeProvider theme={darkTheme}>
        <div   style={{display:'flex', maxWidth:'300px', justifyContent:'center', margin:"15px auto"}}>
    
            <TextField 
            label="Actor search"
            variant='filled'
            onChange={handleChangeText}
            />
            <Button variant='contained' onClick={()=>setFetchData(true)}>
              <SearchIcon/>
            </Button>
        </div>
        </ThemeProvider >

        {fetchData && <ActorsResults  searchText={searchText}/>}
        {!searchText && <ActorsPopular />}
        
        
    
        </div>
      )
    }
    
