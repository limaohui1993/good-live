import React,{useEffect,useState} from 'react'
import SearchView from '../SearchView'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'


const SearchList = (props) => {
    const [searchData,setSearchData]=useState([])
    const [hasMore,setHasMore] = useState(false)
    const searchKeyWords=props.search
    useEffect(() =>{
        http()
    },[props.search])
    function loadMoreHandler(){
        http()
    }
    function http(){
        api.search({
            search:searchKeyWords
        }).then(res=>{
            if(res.data.status === 200){
                setSearchData(searchData.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        }).catch(err =>{
            console.log("err",err)
        })
    }
  return (
    <div>
        {
            searchData.length>0?
            <SearchView search={searchData} />:
            <div>等待数据加载</div>
        }
        {
            hasMore?
            <LoadMore onLoadMore={loadMoreHandler}></LoadMore>:
            "无了"
        }
       
        
    </div>
  )
}

export default SearchList
