<template>
  <div class="alert_container">
    <section class="tip_text_container">     
        <span></span>
        <span></span>  
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      alertText: String
    },

    methods: {
      closeTip () {
        // 分发自定义事件(事件名: closeTip)
        this.$emit('closeTip')
      }
    }
  }
</script>

<style  scoped>
.tip_text_container{
      position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -90px;
    margin-left: -110px;
    width: 60%;
    animation: tipMove-data-v-a64af108 0.4s;
    background-color: #fff;
    border: 1px;
    padding-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
}

.tip_icon{
      width: 55px;
    height: 55px;
    border: 2px solid #f8cb86;
    border-radius: 50%;
    font-size: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.tip_icon span{
      width: 2px;
    height: 10px;
    background-color: #f8cb86;
}

.tip_text{
  font-size: 14px;
    color: #333;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;
    padding: 0 5px;
}
.confrim{
      font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    background-color:#1c1c1c;
    width: 100%;
    text-align: center;
    line-height: 35px;
    border: 1px;
    color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>
