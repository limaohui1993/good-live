import React,{useState,useEffect} from 'react'
import CommentView from '../CommentView'
import api from '../../../api'
import LoadMore from "../../../components/LoadMore"

const Comment = (props) => {
    const [commont,setCommont]=useState([])
    const [hasMore,setHasMore]=useState(false)
    useEffect(()=>{
        http()
    },[])
    function loadMoreHandler(){
        http()
    }
    function http(){
        api.comment({id:props.id}).then(res=>{
            if(res.data.status===200){
                setCommont(commont.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        })
    }
  return (
    <div>
        {
            commont.length?
            <CommentView data={commont}></CommentView>:
            <div>正在加载</div>
        }
        {
            hasMore?
            <LoadMore onLoadMore={loadMoreHandler}></LoadMore>:
            <div>没有数据了</div>
        }
     
    </div>
  )
}

export default Comment
