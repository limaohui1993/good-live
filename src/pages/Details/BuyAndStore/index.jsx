import React from 'react'
import BuyAndStoreView from '../BuyAndStoreView'
import { useSelector } from 'react-redux'

const BuyAndStore = (props) => {
  const login=useSelector(state=>state.login)
  const collects=useSelector(state=>state.collect)
  return (
    <div className='buy-and-store'>
        <BuyAndStoreView user={login.user} collects={collects} id={props.id}></BuyAndStoreView>
    </div>
  )
}

export default BuyAndStore
