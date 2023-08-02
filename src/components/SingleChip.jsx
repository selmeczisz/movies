import  Chip  from '@mui/material/Chip'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const SingleChip = ({id, name, selectedGenres, setSelectedGenres}) => {
    const [selected, setSelected] = useState(false)

    const handleClick =() =>{
        if(selectedGenres.indexOf(id) === -1){
            setSelected(true)
            setSelectedGenres((prev)=>[...prev,id])
        }else{
            setSelected(false)
            setSelectedGenres(selectedGenres.filter(item=>item !=id))
        }
    }
  return (
    <Chip
        label={name}
        clickable
        color='secondary'
        onClick={handleClick}
        icon= {selected ? < DoneIcon /> : <RadioButtonUncheckedIcon/>}
        
        />
  )
}
