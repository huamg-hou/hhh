<template>
  <div>
    <router-view />
   <van-tabbar v-model="active">
      <van-tabbar-item replace to="/">
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active1 : icon.normal1" />首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/about">
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.normal2" />选表
      </van-tabbar-item>
      <van-tabbar-item to="/ShoppingCart" :info="len">
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.normal3"  />购物车
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active4 : icon.normal4" />我的   
      </van-tabbar-item>
     </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      len:0 ,
      active: 0,
      icon: {
        normal1: "/static/img/icon-e-index-a.png",
        active1: "/static/img/icon-e-index-b.png",

        normal2: "/static/img/icon-e-select-a.png",
        active2: "/static/img/icon-e-select-b.png",

        normal3: "/static/img/icon-e-cart-a.png",
        active3: "/static/img/icon-e-cart-b.png",

        normal4: "/static/img/icon-e-mine-a.png",
        active4: "/static/img/icon-e-mine-b.png"
      }
    };
  } , 
  updated(){
        let arr = JSON.parse(localStorage.getItem("p-1")) || [];
        this.len = arr.length;
  } 
};
</script>
<style >
  @import "./assets/css/base.css";
.van-tabbar-item--active{
  color: #000;
}
</style>

