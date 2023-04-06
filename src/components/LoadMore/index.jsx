import React,{useEffect,useState,useRef} from 'react'
import "./style.less"

const LoadMore = (props) => {
    const more=useRef();
    const [loadTop,setLoadTop]=useState(10000)
    useEffect(()=>{
        let timer=null;
        //视口高度
        let winHeight=document.documentElement.clientHeight;
        window.addEventListener('scroll', ()=>{
            if(more.current){
                setLoadTop(more.current.getBoundingClientRect().top)
                if(timer){
                    clearTimeout(timer)
                }else{
                timer= setTimeout(()=>{
                        if(winHeight>loadTop){
                            props.onLoadMore()
                        }
                    },300)
                }
            }
        })
    },[loadTop])
  return (
    <div ref={more} className={"load"}>
        加载更多
    </div>
  )
}

export default LoadMore
