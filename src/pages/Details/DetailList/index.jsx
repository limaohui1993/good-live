import React,{useEffect,useState} from 'react'
import api from '../../../api';
import DetailView from '../DetailView'

const DetailList = (props) => {
    const [detailData,setDetailData]=useState({});
    useEffect(()=>{
        api.details({id:props.id}).then(res => {
            if(res.status===200){
        	    setDetailData(res.data)
        	}
        })
    },[])
  return (
    <div>
        {
            detailData.imgs?
            <DetailView detailData={detailData} id={props.id}></DetailView>:
            <div>等待数据加载</div>
        }
        
    </div>
  )
}

export default DetailList
