import React from 'react'
import { img_300, imgUnavailable } from '../util'
import './SingleContent.css'
import { PersonContentModal } from './PersonContentModal'


export const PersonSingleContent = ({id, poster, title, type, date, vote}) => {

    const formattedVote=Math.floor(vote);
  return (
    <div style={{display:'flex', marginBottom:'10px'}}>
      <PersonContentModal type={type} id={id}>
      <div  className='singleContent'id={id}>
      <img src={poster ? img_300+poster : imgUnavailable} alt={title}/>
        <h3>{title}</h3>
        <div className='info'>
          <span>{type}</span>
          <span>{date}</span>
        </div>
      <div className="vote">{formattedVote}</div>
      </div>
      </PersonContentModal>
          </div>

 
     
  
  )
}
