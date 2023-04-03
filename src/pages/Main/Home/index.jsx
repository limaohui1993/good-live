import React from 'react'
import HeaderNav from '../../../components/HeaderNav/index.jsx'
import Swiper from '../../../components/Swiper'
import Banner1 from "../../../assets/images/banner1.png"
import Banner2 from "../../../assets/images/banner2.png"
import Banner3 from "../../../assets/images/banner3.png"
import HomeHotList from './HomeHotList'
import {useSelector} from "react-redux"
const Home = () => {
  const city = useSelector(state=>state.city);
  return (
    <div>
      <HeaderNav cityName={city.cityName}/>
      <Swiper Banners={[Banner1,Banner2,Banner3]}></Swiper>
      <HomeHotList cityName={city.cityName}></HomeHotList>
    </div>
  )
}

export default Home
