import React from 'react'
import Item from "./Item"

const orderListView = (props) => {
  return (
    <div>
        {
           props.data.map((item,index)=>{
                return <Item key={index} data={item} user={props.user}></Item>
           })
        }
      
    </div>
  )
}

export default orderListView
