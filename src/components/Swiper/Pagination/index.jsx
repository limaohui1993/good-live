import React from 'react'
import "./style.less"
import classnames from "classnames"

const Pagination = (props) => {
    const arr=new Array(props.len).fill(1);
  return (
    <div className="swiper-pagination">
        <ul>
            {
                arr.map((item, index)=>{
                    return (
                        <li key={index} className={classnames({'selected':props.currentIndex===index})}></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Pagination
