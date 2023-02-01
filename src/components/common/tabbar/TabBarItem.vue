<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 将插槽包装一层div,以备定义插槽内元素的属性 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

    <!-- <img  src="../../assets/img/tabbar/home.svg" alt="" /> -->
    <!-- <div >首页</div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 接受父组件传入的数据props: {}
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: !false,
    };
  },
  computed: {
    isActive() {
      // 根据当前活跃路由$route的path属性是否与每个item各自的路由相匹配来，来显示当前活跃路由对应的图片
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 根据当前路由route{}是否活跃来改变  文字颜色
      return this.isActive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemClick() {
      // 实现路由路径随页面改变
      // console.log("itemClick");
      this.$router.replace(this.path);
    },
  },
};
</script>


<style >
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: red;
} */
</style>