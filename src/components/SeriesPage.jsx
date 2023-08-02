import React from 'react'
import { Genres } from './Genres'
import { Series } from './Series'
import { useState } from 'react'



export const SeriesPage = () => {

  const [urlForGenre, setUrlForGenre]=useState("")

  return (
    <>
    <h3>Series</h3>
    <div className='content'>
      <Genres type='tv' setUrlForGenre={setUrlForGenre}/>
      <Series urlForGenre={urlForGenre}/>
    </div>
    </>)
}
