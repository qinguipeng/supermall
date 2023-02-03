<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="item"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>



<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClisk", index);
    },
  },
};
</script>



<style>
.tab-control {
  display: flex;
}
.tab-control-item {
  text-align: center;
  height: 40px;
  line-height: 40px;
  flex: 1;
}
span {
  padding: 8px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>