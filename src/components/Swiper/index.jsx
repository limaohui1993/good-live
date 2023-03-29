import React,{useState} from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper = (props) => {

    const [index,setIndex]=useState(0)
    
    function handleChangeIndex(index){
        setIndex(index)
    }
  return (
    <div className="swiper">
        <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            {
                props.Banners.map((item,index)=>{
                    return (
                        <div key={index} className="swiper-view">
                            <img src={item} alt="" />
                        </div>
                    )
                })
            }
            
        </AutoPlaySwipeableViews>
        <Pagination currentIndex={index} len={props.Banners.length}></Pagination>
    </div>
  )
}

export default Swiper
