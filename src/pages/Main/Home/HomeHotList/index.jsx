import React,{useEffect,useState} from 'react'
import api from  "../../../../api/index.js"
import HomeHotView from '../HomeHotView'

const HomeHotList = (props) => {
    const [hot1List,setHot1List]=useState([])
    const [hot2List,setHot2List]=useState([])
    const [city,setCity]=useState(props.cityName)
    useEffect(()=>{
        api.getHomeHot1({
            cityName: props.cityName
        }).then(res=>{
            if(res.data.status==200){
                setHot1List(res.data.result)
                setCity(res.data.city)
            }
        })
    },[])
    useEffect(()=>{
        api.getHomeHot2({
            cityName: props.cityName
        }).then(res=>{
            if(res.data.status==200){
                setHot2List(res.data.result)
                setCity(res.data.city)
            }
        })
    },[])
  return (
    <div>
        {
            hot1List.length>0?
            <HomeHotView data={hot1List} city={city} title={"热门商品"}></HomeHotView>:<div>等待数据加载</div>
        }
        {
            hot2List.length>0?
            <HomeHotView data={hot2List} city={city} title={"新品推荐"}></HomeHotView>:<div>等待数据加载</div>
        }
        
    </div>
  )
}

export default HomeHotList
