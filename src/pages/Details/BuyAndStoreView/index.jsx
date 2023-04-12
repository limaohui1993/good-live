import React from 'react'
import "./style.less"

const BuyAndStoreView = () => {
    function storeHandle(){}
  return (
    <div>
        <div className="buy-store-container clear-fix">
            <div className="item-container float-left">
                <button className="selected" onClick={storeHandle}>收藏</button>
            </div>
            <div className="item-container float-right">
                <button className="selected">购买</button>
            </div>
        </div >
    </div>
  )
}

export default BuyAndStoreView
