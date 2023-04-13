import React,{useState,useEffect} from 'react'
import "./style.less"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as collectAction from "../../../redux/actions/collect"

const BuyAndStoreView = (props) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [isCollect, setIsCollect ]=useState(false)
    useEffect(()=>{
        setIsCollect(isStore())
    },[])
    function storeHandle(){
        if(props.user.token){
            //判断是否收藏
            //收藏则取消收藏 否则进行收藏
            if(isStore()){
                //收藏
                setIsCollect(false)
                dispatch(collectAction.removeCollect(props.id))
            }else{
                //未收藏
                setIsCollect(true)
                dispatch(collectAction.setCollect(props.id))
            }
        }else{
            navigate("/login")
        }
    }
    function isStore(){
        const collects=props.collects;
        return collects.some(item=>item===props.id)
    }
    //用户收藏判定
  return (
    <div>
        <div className="buy-store-container clear-fix">
            <div className="item-container float-left">
                {
                    !isCollect?
                    <button className="selected" onClick={storeHandle}>收藏</button>:
                    <button className="selected o" onClick={storeHandle}>已收藏</button>
                }
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div >
    </div>
  )
}

export default BuyAndStoreView
