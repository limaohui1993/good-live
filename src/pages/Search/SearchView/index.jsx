import React from 'react'
import Item from './Item'
import SearchHeader from '../SearchHeader'

const SearchView = (props) => {
  return (
    <div>
        <SearchHeader></SearchHeader>
        {
            props.search.map((item,index)=>{
                return (
                    <Item data={item} key={index}></Item> 
                )
            })
        }
        
    </div>
  )
}

export default SearchView
