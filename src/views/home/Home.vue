<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
    <recommend-view></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView.vue";

import { getHomeDate } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [], //banner是一个数组，里面的每一个元素都时一个对象，主要运用的信息时item.list
      recommond: [],
    };
  },
  created() {
    // 1. 请求home页面所需多个数据
    getHomeDate().then((res) => {
      // console.log(res.data.list);
      this.banners = res.data.list;
      this.recommond = res.data.list;
    });
  },
};
</script>

<style >
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

#home swiper swiper-item img {
  width: 100%;
}
</style>