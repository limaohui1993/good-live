import React ,{useState}from 'react'
import CityHeader from "../../components/PubHeader"
import CurrentCity from './CurrentCity'
import CityList from './CityList'
//useSelector:获取数据  useDispatch：获取dispatch对象
import {useSelector,useDispatch} from "react-redux"
import { initCity,changeCity } from '../../redux/actions/city'

const City = () => {
  const dispatch = useDispatch();
  const city = useSelector(state=>state.city);
    // const [city,setCity] =useState("")
    function onCityEvent(city){
        // setCity(city)
        dispatch(changeCity(city))
    }
  return (
    <div>
        <CityHeader title={"城市选择"}></CityHeader>
        <CurrentCity city={city.cityName}></CurrentCity>
        <CityList onEvent={onCityEvent}></CityList>
    </div>
  )
}

export default City
