import React ,{useState}from 'react'
import CityHeader from "../../components/PubHeader"
import CurrentCity from './CurrentCity'
import CityList from './CityList'
import CityLists from './CityLists'
//useSelector:获取数据  useDispatch：获取dispatch对象
import {useSelector,useDispatch} from "react-redux"
import { initCity,changeCity } from '../../redux/actions/city'
import { useNavigate } from 'react-router-dom'

const City = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const city = useSelector(state=>state.city);
    // const [city,setCity] =useState("")
    function onCityEvent(city){
        // setCity(city)
        dispatch(changeCity(city))
        navigate("/")
    }
  return (
    <div>
        <CityHeader title={"城市选择"}></CityHeader>
        <CurrentCity city={city.cityName}></CurrentCity>
        <CityList onEvent={onCityEvent}></CityList>
        <CityLists onEvent={onCityEvent}></CityLists>
    </div>
  )
}

export default City
