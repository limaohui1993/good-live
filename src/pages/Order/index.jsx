import React,{useEffect} from 'react'
import PubHeader from '../../components/PubHeader'
import UserInfo from './UserInfo'
import OrderList from './OrderList'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate=useNavigate()
    const city=useSelector(state=>state.city)
    const user=useSelector(state=>state.login.user)
    useEffect(()=>{
        if(!user.token){
            navigate("/login")
        }
    },[])
  return (
    <div>
        <PubHeader title={"订单评价"}></PubHeader>
        <UserInfo user={user} city={city}></UserInfo>
        <OrderList user={user}></OrderList>
    </div>
  )
}

export default Order
