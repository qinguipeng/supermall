<template>
  <div class="recommed">
    <a href="">
      <img src="~assets/img/home/RecommendView/RecommendView.png" alt="" />
      <div>好物推荐</div>
    </a>
    <a href="">
      <img src="~assets/img/home/RecommendView/RecommendView.png" alt="" />
      <div>好物推荐</div> </a
    ><a href="">
      <img src="~assets/img/home/RecommendView/RecommendView.png" alt="" />
      <div>好物推荐</div> </a
    ><a href="">
      <img src="~assets/img/home/RecommendView/RecommendView.png" alt="" />
      <div>好物推荐</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
};
</script>



<style>
.recommed {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.recommed a {
  flex: 1;

  text-align: center;
  padding: 10px;
}

.recommed a img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>