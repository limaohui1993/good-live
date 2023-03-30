import React ,{useState}from 'react'
import CityHeader from "../../components/PubHeader"
import CurrentCity from './CurrentCity'
import CityList from './CityList'

const City = () => {
    const [city,setCity] =useState("")
    function onCityEvent(city){
        setCity(city)
    }
  return (
    <div>
        <CityHeader title={"城市选择"}></CityHeader>
        <CurrentCity city={city}></CurrentCity>
        <CityList onEvent={onCityEvent}></CityList>
    </div>
  )
}

export default City
