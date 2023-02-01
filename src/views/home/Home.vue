<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <h2>首页</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
// 面向home.js开发
import { getHomeDate } from "network/home.js";

export default {
  components: { NavBar },
  name: "Home",
  component: { NavBar },
  data() {
    return { banners: [], recommond: [] };
  },
  created() {
    // 1. 请求home页面所需多个数据
    getHomeDate().then((res) => {
      console.log(res);
      this.banners = res.data.list;
      this.recommond = res.data.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>