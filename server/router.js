const express = require('express');
const router=express.Router();
const homehot=require("./data/home/homehot")
const url=require("url");
const searchData = require("./data/search")
const detailsData = require("./data/details")
const commentData = require("./data/comment")
const orderData = require("./data/order")
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
//详情页面
router.get("/details",(req, res) => {
    const id=url.parse(req.url,true).query.id;
    res.send(detailsData)
})
//登陆
router.post("/login",(req, res) => {
    const {userName,password}=req.body;
    if(userName&&password){
        res.send({
            status:200,
            token:"gguichiuhficuergiugruygrggtgrugfyugrelhuibj",
            nick:userName
        })
    }else{
        res.send({
            status:400,
            msg:"用户名密码错误"
        })
    }
})
//评价
router.get("/comment",(req, res) => {
    const id=url.parse(req.url,true).query.id;
    res.send({
        status:200,
        result:commentData
    })
})
//订单评价
router.get("/order/comment",(req, res) => {
    const userName=url.parse(req.url,true).query.userName;
    // const id=url.parse(req.url,true).query.id;
    res.send({
        status:200,
        result:orderData
    })
})
//订单评价提交
router.post("/order/submit/comment",(req, res) => {
    const {userName,id,content}=req.body
    console.log(userName,id,content)
    res.send({
        status:200,
        msg:"评价成功"
    })
})

 module.exports= router