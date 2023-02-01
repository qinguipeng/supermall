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