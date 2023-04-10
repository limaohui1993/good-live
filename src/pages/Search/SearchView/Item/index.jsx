import React,{useState} from 'react'
import "./style.less"
import DefaultImg from "../../../../assets/images/default.png"
import {loadImageAsync} from "../../../../utils/loadImg"

const Item = (props) => {
    const data = props.data
    const [ currentImg,setCurrentImg]=useState(DefaultImg);
    loadImageAsync(data.img).then(res=>{
        setCurrentImg(res)
    }).catch(err=>console.log(err))
    return (
        <div className="list-item">
                <img src={currentImg} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{data.title}</p>
                        <p>{data.houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {data.rentType}
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
                    </div>
                </div>
        </div>
    )
}

export default Item
