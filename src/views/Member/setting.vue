<template>
  <div >
    <div class="W_title">
      <router-link to="/my">
        <i class="icon-d-back02"></i>
      </router-link>
      <p>设置</p>
    </div>
    <main class="setting">
<div class="W-member-setting">
    <p>密码设置</p>
 
</div>
<div class="W-member-setting"> <p>关于</p></div>
<div class="W-bottom-btn"  @click="settimg">
    <p>退出登录</p>
</div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
    },
    methods:{
       settimg(){
         localStorage.removeItem("user")
         this.$router.push({ name: "my" })
    }
    }

};
</script>
<style lang="scss">
.setting{
    width: 100%;
    height: 560px;
    background: #ccc;
}.W_title {
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 44px;
  max-width: 640px;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  i {
    float: left;
    width: 50%;
  }
  .icon-d-back02 {
    display: block;
    background-image: url(/static/img/background1.png);
    background-position: 0 -189.5px;
    background-size: 334.5px;
    width: 44px;
    height: 44px;
  }
  p {
    text-align: center;
    margin-right: 10%;
  }
}
.W-member-setting {
    background: #fff;
    margin-bottom: 9px;
    height: 44px;
p{
  padding-left: 5px;
  padding-top: 5%;
  font-size:12px;
}}
.W-bottom-btn {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    background: #bbb;
p{
    text-align:center;
    color: #fff;
}}

</style>