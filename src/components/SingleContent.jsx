import React from 'react'
import { img_300, imgUnavailable } from '../util'
import './SingleContent.css'
import { ContentModal } from './ContentModal'


export const SingleContent = ({id, poster, title, type, date, vote}) => {

  const formattedVote=Math.round(vote*10)/10;

  return (
    <div style={{display:'flex', marginBottom:'10px'}}>
      <ContentModal type={type} id={id}>
      <div  className='singleContent'id={id}>
      <img  className="poster" src={poster ? img_300+poster : imgUnavailable} alt={title}/>
        <h3 >{title}</h3>
        <div className='info'>
          <span>{type}</span>
          <span>{date}</span>
        </div>
      <div className="vote">{formattedVote}</div>
      </div>
      </ContentModal>
          </div>

 
     
  
  )
}
