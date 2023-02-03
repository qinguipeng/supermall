import { request } from "./request";

// 获取首页多个数据
export function getHomeDate() {
    return request({
        url: '/home/data',
        params: {
            type: "pop",
            page: 1
        }
    })
}

// 获取首页页面商品数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}