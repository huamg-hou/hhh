<template>
  <div>
    <div class="wihp">
      <van-search class="place" placeholder="请输入搜索关键词" shape="round" />
      <router-link class="search" to="/">取消</router-link>
    </div>
    <div class="W_search_shop">
      <p class="search_tit">热门搜索</p>
      <div class="word_line">
        <p>天梭力洛克</p>
        <p>浪琴</p>
        <p>欧米茄</p>
        <p>东方星</p>
        <p>卡西欧</p>
        <p>11.11全球名表狂欢节主会场</p>
      </div>
    </div>
    <div class="adSenseImg">
      <van-image src="/static/img/11.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.wihp {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  .place {
    float: left;
    width: 87%;
  }
  .search {
    color: #477db3;
    font-size: 14px;
    line-height: 54px;
    float: left;
  }
}
.W_search_shop {
  overflow: hidden;
  .search_tit {
    font-size: 12px;
    color: #999;
    margin-top: 14px;
    padding: 0 12px;
    margin-bottom: 12px;
  }
}
.word_line {
  padding: 0 12px;
  p {
    float: left;
    display: block;
    max-width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 9px;
    height: 28px;
    line-height: 28px;
    border-radius: 100px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font-size: 12px;
    color: #333;
    &:nth-child(-n + 3) {
      border-color: #cc3d3d;
      color: #cc3d3d;
    }
  }
}
.adSenseImg {
  margin: 40px 8px 0 8px;
}
</style>