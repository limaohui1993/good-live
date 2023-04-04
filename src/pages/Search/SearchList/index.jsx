import React,{useEffect,useState} from 'react'
import SearchView from '../SearchView'
import api from '../../../api'


const SearchList = (props) => {
    const [searchData,setSearchData]=useState([])
    const searchKeyWords=props.search
    useEffect(() =>{
        api.search({
            search:searchKeyWords
        }).then(res=>{
            if(res.data.status === 200){
                setSearchData(res.data.result.data)
            }
        }).catch(err =>{
            console.log("err",err)
        })
    },[])
  return (
    <div>
        {
            searchData.length>0?
            <SearchView search={searchData} />:
            <div>等待数据加载</div>
        }
        
    </div>
  )
}

export default SearchList
