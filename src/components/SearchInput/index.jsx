import React,{useState,useEffect} from 'react'
import "./style.less"
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import * as searchAction from "../../redux/actions/search"
import { useParams } from 'react-router-dom'

const SearchInput = (props) => {
    const navigate=useNavigate()
    const [keyWords,setKeyWords]=useState("")
    const dispatch = useDispatch();
    const params=useParams();
    const reduxKeywords =useSelector(state=>state.search)
    
    function keyUpHandler(e){
        if(e.keyCode ===13&&keyWords.length > 0){
            navigate("/search/"+keyWords)
            dispatch(searchAction.updateSearch(keyWords))
        }
    }
    function changeHandler(e){
        setKeyWords(e.target.value)
    }

    useEffect(()=>{
        if(params.keywords){
            dispatch(searchAction.updateSearch(params.keywords))
        }else{
            dispatch(searchAction.updateSearch(""))
        }        
        setKeyWords(reduxKeywords.search)
    },[reduxKeywords.search,params.keywords])
  return (
        <input 
            className="search-input" 
            type="text"
            value={keyWords}
            onChange={changeHandler}
            onKeyUp={keyUpHandler}
        ></input>  
  )
}

export default SearchInput





