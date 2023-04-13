import React,{useEffect,useState} from 'react'
import api from '../../../api';
import DetailsHeader from "../../../components/PubHeader"
import Swiper from '../../../components/Swiper';
import "./style.less"
import BuyAndStore from '../BuyAndStore';
import Tabs  from '../../../components/Tabs';

const DetailView = (props) => {
    const detailData=props.detailData

  return (
        <div>
            <DetailsHeader title={'详情页'} />
            <div>
                <Swiper Banners={detailData.imgs} />
                <Tabs>
                    <div label="详情" >
                                <div className="detail-info">
                                    <h3>{detailData.title}</h3>
                                    <div className="box">
                                        <ul>
                                            <li>
                                                <span>{detailData.price} /月</span>
                                                <p>租金</p>
                                            </li>
                                            <li>
                                                <span>{detailData.info.type}</span>
                                                <p>房屋类型</p>
                                            </li>
                                            <li>
                                                <span>{detailData.houseType}</span>
                                                <p>面积</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="info">
                                        <div className="info-list">
                                            <p>类型：{detailData.info.type}</p>
                                            <p>朝向：{detailData.info.orientation}</p>
                                        </div>
                                        <div className="info-list">
                                            <p>楼层：{detailData.info.level}</p>
                                            <p>装修：{detailData.info.style}</p>
                                        </div>
                                        <div className="info-list">
                                            <p>年代：{detailData.info.years}</p>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div label="评价">
                    评价
                    </div>  
                </Tabs>
                
            </div>
            <BuyAndStore id={props.id}></BuyAndStore>
        </div>
  )
}

export default DetailView
