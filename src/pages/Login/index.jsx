import React from 'react'
import LoginView from './LoginView'
import { useDispatch,useSelector } from 'react-redux'
import * as loginActions from "../../redux/actions/login"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function onLoginEvent(user){
    //写入redux
    dispatch(loginActions.setLogin(user))
    //写入本地
    localStorage.setItem("goodlive",JSON.stringify(user))
    //回到上一级页面
    navigate(-1)
  }
  return (
    <div>
      <LoginView onLoginEvent={onLoginEvent}></LoginView>
    </div>
  )
}

export default Login
