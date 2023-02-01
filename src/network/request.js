// 导入axios框架
import axios from "axios";


// 导出请求request(config){}对象
export function request(config) {
    // 1. 创建axios实例axios.create({})
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    })



    // 2. axios拦截器:axios.interceptors./
    // 2.1 请求拦截的作用 .request.use(()=>{},)
    instance.interceptors.request.use((config) => {
        return config
    }, (error) => {
        // console.log(error);
    })

    // 2.2 响应拦截.response.use(res => {},err => {})
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })


    // 3. 实例发送真正的网络请求
    return instance(config) //返值是一个Promise

}