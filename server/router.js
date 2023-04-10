const express = require('express');
const router=express.Router();
const homehot=require("./data/home/homehot")
const url=require("url");
const searchData = require("./data/search")
const Mock = require('mockjs')
const Random = Mock.Random;


//首页热门数据
router.get("/home/hot1",(req, res) => {
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status: 200,
        result:homehot.hot1,
        city:cityName

    })
})
router.get("/home/hot2",(req, res) => {
    const cityName=url.parse(req.url,true).query.cityName
    res.send({
        status: 200,
        result:homehot.hot2,
        city:cityName

    })
})
//搜索页面
router.get("/search",(req, res) => {
    const search=url.parse(req.url,true).query.search;
    let data = Mock.mock({
        hasMore: true,
        'data|5': [{
            "id|+1":Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
        }]
    })
    res.send({
        status: 200,
        result:data,
    })
})

 module.exports= router