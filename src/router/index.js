import Vue from 'vue'
import Router from 'vue-router'

// 懒加载导入组件
const home = () =>
    import ('views/home/Home')
const category = () =>
    import ('views/category/Category.vue')
const cart = () =>
    import ('views/cart/Cart.vue')
const profile = () =>
    import ('views/profile/Profile.vue')


// 1.安装插件
Vue.use(Router)



// 2.创建路由对象router
// 配置映射关系（路径）
const routes = [

    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home', //路径名称
        component: home, //组件（不需要引号）
    },
    {
        path: '/category',
        component: category,
    },
    {
        path: '/cart',
        component: cart,
    },
    {
        path: '/profile',
        component: profile,
    },
]

const router = new Router({
    routes,
    mode: 'history',
})

// 3.导出路由router
export default router