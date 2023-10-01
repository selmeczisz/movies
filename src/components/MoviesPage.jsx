import React from 'react'
import { Genres } from './Genres'
import { Movies } from './Movies'
import { useState } from 'react'



export const MoviesPage = () => {

  const [urlForGenre, setUrlForGenre]=useState("")

  return (
    <>
    <h2>Movies</h2>
    <div className='content'>
      <Genres type='movie' setUrlForGenre={setUrlForGenre}/>
      <Movies urlForGenre={urlForGenre}/>
    </div>
    </>)
}
