import React,{useState} from 'react'
import "./style.less"
import classnames from "classnames"
import api from "../../../api/index"
import validatorInput from "../../../utils/validator"

const LoginView = (props) => {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({})
    function onSubmitHandle(e){
        e.preventDefault();
        let {isValid,errors}=validatorInput({
            userName,
            password
        })
        if(!isValid){
            api.login({
                userName,
                password
            }).then(res=>{
                if(res.data.status===200){
                    setErrors({})
                    props.onLoginEvent(res.data)
                }else{
                    console.log("登陆失败")
                }
            })
        }else{
            setErrors(errors)
        }
        
    }
    function changeHandle(e){
        if(e.target.name==="userName"){
            setUserName(e.target.value)
        }
        if(e.target.name==="password"){
            setPassword(e.target.value)
        }
    }
  return (
    <div>
        <div id="login-container">
            <form onSubmit={onSubmitHandle}>
                <div className={ classnames('input-container phone-container',{ 'input-container-error':errors.username }) }>
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="userName"
                        placeholder="用户名/手机号"
                        value={userName}
                        onChange={changeHandle}
                    />
                </div>
                <div  className={ classnames('input-container password-container',{ 'input-container-error':errors.password }) }>
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input
                        type="password"
                        name="password"
                        placeholder="输入验证码"
                        value={password}
                        onChange={changeHandle}
                    />
                </div>
                <button className="btn-login">登录</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView
