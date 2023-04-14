import React from 'react'
import "./style.less"
import Item from './Item'

const CommentView = (props) => {
    const data=props.data
  return (
    <div className="comment-list">
        {
            data.map((item,index)=>{
                return <Item key={index} data={item}></Item>
            })
        }
        
    </div>
  )
}

export default CommentView
