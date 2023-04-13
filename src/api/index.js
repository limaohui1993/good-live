import axios from "../utils/request"

//路径地址
const base={
    baseUrl: 'http://localhost:5566',
    cityUrl:"/api/aj/getcitycode",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    search:"/api/search",
    details:"/api/details",
    login:"/api/login",
};

//请求方法
const api={
    //获取首页热门产品1
    getHomeHot1(params){
        return axios.get(base.baseUrl+base.homehot1,{params})
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl+base.homehot2,{params})
    },
    getCityLists(){
        return axios.get(base.cityUrl)
    },
    search(params){
        return axios.get(base.baseUrl+base.search,{params})
    },
    details(params){
        return axios.get(base.baseUrl+base.details,{params})
    },
    login(params){
        return axios.post(base.baseUrl+base.login,params)
    }
}

export default api