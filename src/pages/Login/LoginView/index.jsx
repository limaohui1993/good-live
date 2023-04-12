import React,{useState} from 'react'
import "./style.less"
import classnames from "classnames"

const LoginView = () => {
    function onSubmitHandle(){}
    function changeHandle(){}
  return (
    <div>
        <div id="login-container">
            <form onSubmit={onSubmitHandle}>
                <div className='input-container phone-container'>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="用户名/手机号"
                    />
                </div>
                <div  className='input-container password-container'>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        name="password"
                        placeholder="输入验证码"
                    />
                </div>
                <button className="btn-login">登录</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView
