import { TextField, createTheme, ThemeProvider, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import { PersonSingleContent } from './PersonSingleContent';
import { ContentPagination } from './ContentPagination'

const urlActors = `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false`

export const ActorsPopular = () => {

  const [fetchData, setFetchData] = useState(false)
  const [page, setPage] = useState(1)
  const { data, status, isLoading, isError } = useQuery(["actors", urlActors + "&page=" + page], getData)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })


  if (isLoading)
    return <div>Loading...</div>
  if (isError)
    return <div>Error while fetching data</div>

  status == 'success' && console.log(data.results, data.total_pages)
  //console.log(searchText);

  return (
    < >
      <h3 >Top actors</h3>
      <div className="content">
        {status == 'success' && data.results.map(obj => (
          <>
            <PersonSingleContent
              key={obj.id}
              id={obj.id}
              poster={obj.profile_path}
              title={obj.name}
              vote={obj.popularity}
              type={obj.known_for_department} />
          </>))}
      </div>
      <ContentPagination page={page} setPage={setPage} numOfPages={data.total_pages > 500 ? 500 : data.total_pages} />

    </>

  )
}
