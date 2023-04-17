import React ,{useState,useEffect}from 'react'
import api from '../../../api'
import OrderListView from '../OrderListView'

const OrderList = (props) => {
    const [orderListData,setOrderListData]=useState([])
    useEffect(()=>{
        api.commentOrder({userName:props.user.nick}).then(res=>{
            if(res.data.status===200){
                setOrderListData(res.data.result)
            }
        })
    },[])
  return (
    <div>
      {
        orderListData.length?
        <OrderListView data={orderListData} user={props.user}></OrderListView>:
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default OrderList
