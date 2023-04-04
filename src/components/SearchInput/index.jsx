import React,{useState} from 'react'
import "./style.less"
import { useNavigate } from 'react-router-dom'

const SearchInput = (props) => {
    const navigate=useNavigate()
    const [keyWords,setKeyWords]=useState("")
    function keyUpHandler(e){
        if(e.keyCode ===13&&keyWords.length > 0){
            navigate("/search/"+keyWords)
        }
    }
    function changeHandler(e){
        setKeyWords(e.target.value)
    }
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
