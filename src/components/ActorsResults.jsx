import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import { ContentPagination } from './ContentPagination'
import { SingleContent } from './SingleContent'
import { PersonSingleContent } from './PersonSingleContent'

export const ActorsResults = ({ searchText }) => {
  
   const [page, setPage] = useState(1)
   const urlActorsSearch = `https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${searchText}&page=${page}`
   const { data, status } = useQuery(['searchedItems', urlActorsSearch], getData)
   status == 'success' && console.log(data.results);

   return (
      <div className='content'>
         {status == 'success' && data.results.length > 0 ? data.results.map(obj => (
            <PersonSingleContent
               key={obj.id}
               id={obj.id}
               title={obj.name}
               poster={obj.profile_path}
               vote={obj.popularity}
               type={obj.known_for_department}
            />
         ))
            : <div>No actor found</div>

         }
         {status == 'success' && <ContentPagination page={page} setPage={setPage} numOfPages={data.total_pages > 500 ? 500 : data.total_pages} />}


      </div>)
}
