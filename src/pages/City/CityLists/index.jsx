import React,{useState,useEffect} from 'react'
import "./style.less"
import CitySelect from 'react-city-select';
import cityData from "../../../data/city";
import api from "../../../api"
const CityLists = (props) => {
    const [citysData,setCitysData]=useState(cityData)
    function handleSelectCity(cityData){
      props.onEvent(cityData.name)
    }
    useEffect(()=>{
      api.getCityLists().then(res=>{
        if(res.status===200){
          setCitysData(res.data.result.citylist)
        }
      })
    },[])
  return (
    <div>
        <h3>城市列表</h3>
        <CitySelect 
          className="citylists"
          data={citysData}
          onSelectItem={handleSelectCity}> 
        </CitySelect>
    </div>
  )
}
export default CityLists