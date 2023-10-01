import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import { SingleContent } from './SingleContent'
import { ContentPagination } from './ContentPagination'
import { useState } from 'react'


const urlTrending =`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false`

export const Trendings = () => {
  const [page, setPage]= useState(1)
  const {data,status,isLoading, isError} = useQuery(["trendings", urlTrending+"&page="+page],getData)


if(isLoading)
  return <div>Loading...</div>
if(isError)
  return <div>Error while fetching data</div>


  return (
    <>    
    
    <h2>Trendings</h2>
    <div className="content">
      {status=='success' && data.results.map(obj=>(
        <SingleContent 
        key={obj.id}
        id={obj.id}
        poster={obj.poster_path}
        title={obj.title || obj.name}
        type={obj.media_type}
        date={obj.release_date || obj.first_air_date}
        vote={obj.vote_average}
        />
      ))}
      <ContentPagination page={page} setPage={setPage} numOfPages={data.total_pages>500 ? 500 : data.total_pages}/>
    </div>

    </>
  )
}
