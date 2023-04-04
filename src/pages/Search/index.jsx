import React from 'react'
import { useParams } from 'react-router-dom'
import SearchList from './SearchList'

const Search = () => {
    const params=useParams()
  return (
    <div>
      <SearchList search={params.keywords}></SearchList>
    </div>
  )
}

export default Search
