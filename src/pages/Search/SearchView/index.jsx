import React from 'react'
import Item from './Item'

const SearchView = (props) => {
  return (
    <div>
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
