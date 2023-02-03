<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
    <recommend-view></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', ' 新款', '精选']"
      @tabClisk="tabClisk"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView.vue";
import FeatureView from "views/home/childComps/FeatureView";
import tabControl from "components/content/tabControl/tabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeDate, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    tabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [], //banner是一个数组，里面的每一个元素都时一个对象，主要运用的信息时item.list
      recommond: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },

  // 生命周期函数
  created() {
    // 1. 请求home页面所需多个数据
    this.getHomeDate();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听
    tabClisk(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 网络请求相关
    getHomeDate() {
      getHomeDate().then((res) => {
        // console.log(res.data.list);
        this.banners = res.data.list;
        this.recommond = res.data.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style >
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

  background-color: var(--color-tint);
  color: #fff;
}

#home swiper swiper-item img {
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
</style>


