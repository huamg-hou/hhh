<template>
  <div id="didaList">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <slot></slot>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: false,
      isLoading: false,
      currentPage: 1 //当前页(默认从第一页开始)
    };
  },
  /**
   * maxPage 最大页数
   * startLoad    是否启用加载更多
   * startRefresh 是否启用刷新
   */
  props: ["maxPage","startLoad","startRefresh"],
  methods: {
    onLoad() {
      let parameter = {
        currentPage:this.currentPage,
        type:'load'
      }
      this.$emit("load", parameter);
      if (this.currentPage >= this.maxPage&&this.maxPage==null) this.finished = true;
      else this.currentPage++
    },
    onRefresh() {
      let parameter = {
        currentPage:1,
        type:'refresh'
      }
      this.$emit("refresh",parameter);
    },
    hideLoading() {
      this.loading = false;
    },
    hideIsLoading() {
      this.isLoading = false;
    }
  }
};
</script>
<style scoped>
#didaList {
  height: 100%;
}
</style>
