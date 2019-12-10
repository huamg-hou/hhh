<template>
<div id="login">
  <div class="loginContainer">
     <router-link to="/my">
     <i  class="icon-d-back02"></i>
      </router-link>
      <router-link to="/register">
          <div class="register">注册</div>
        </router-link>
    <div class="loginInner">
      <div class="login_header"> 
        <div class="login_header_title">
          <P class="psd_login" :class="{on:loginWay}" @click="loginWay=true">账号登录</P>
          <P class="user_login" :class="{on:!loginWay}" @click="loginWay=false">手机登录</P>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login  ">
          <!-- 短信 -->
          <div :class="{on:loginWay}">
            <div class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_phone: rightPhone}"
                @click.prevent="getCode"
              >{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </div>
            <div class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
            </div>
          </div>
          <!-- 密码 -->
          <div :class="{on:!loginWay}">
            <div>
              <div class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </div>
              <div class="login_verification">
                <!-- 是否显示密码 -->
                <input type="text" maxlength="21" placeholder="密码" v-if="showPwd" v-model="pwd" />

                <input type="password" maxlength="21" placeholder="密码" v-else v-model="pwd" />

                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                </div>
              </div>
              <div class="login_message">
                <input type="text" maxlength="6" placeholder="验证码" v-model="picLyanzhengma" />

                <input
                  type="button"
                  class="get_verificationa"
                  id="cook"
                  @click="createCode"
                  v-model="checkCode"
                />
              </div>
            </div>
          </div>

          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
      </div>
    </div>
    <!-- 提示组件,closeTip事件在其中被分发出来 -->
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </div>
  </div>
</template>
<script>
import AlertTip from "@/components/AlertTip.vue";
import {
  Toast,
} from "vant";
var cook;
export default {
  name:'Login',
  data() {
    return {
      loginWay: false, 
      phone: "",
      computeTime: 0, 
      showPwd: false, 
      pwd: "", 
      code: "", 
      captcha: "", 
      name: "", 
      alertText: "", 
      picLyanzhengma: "", 
      alertShow: false, 
      checkCode: "", 
      yzm: "",
      Notify: "",
      it: "",
      notify:'ture' 
         };
  },
  computed: {
    rightPhone() {
      // 手机号正则验证
      return /^1[3-9]\d{9}$/.test(this.phone);
    }
  },
  created() {
    this.createCode();
  },
  methods: {
    //返回上一级
   backClick() {
        this.$router.back()
      },

    // 获取验证码倒计时
    getCode() {
      this.yzm = Math.floor(Math.random() * 899999 + 100000);
      if (!this.computeTime) {
        this.computeTime = 60;

        const intervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime == 0) {
            //停止计时
            clearInterval(intervalId);
          } else if (this.computeTime == 55) {
           Toast("验证码为：" + this.yzm);
            console.log(this.yzm);
          }
        }, 1000);
      }
    },
    // 随机验证码
    createCode() {
      cook = "";
      var codeLength = 6; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        cook += random[index]; //根据索引取得随机数加到cook上
      }
      this.checkCode = cook; //把cook值赋给验证码
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },

    //登录匹配正则
    login() {

      var registername = localStorage.getItem("name");
      var registerpassword = localStorage.getItem("password");
      this.picLyanzhengma.toUpperCase();


      if (this.loginWay) {
        const { rightPhone, phone, code, yzm, it } = this;
        if (!rightPhone) {
          this.showAlert("手机号不正确");
          return;
        } else if (!/^\d{6}$/.test(code)) {
          this.showAlert("验证码必须为6位数字");
          return;
        } else if (code != this.yzm) {
          this.showAlert("验证码错误");
        } else if ((this.yzm =code )) {
      
          this.$router.push({ name: "my" });  
          Toast("登录成功，返回我的");
         



        }
      } else {
        const { name, pwd, picLyanzhengma } = this;
        if (!this.name) {
          // 用户名不能空
          this.showAlert("用户名不能空");
          return;
        } else if (!pwd) {
          // 密码不能空
          this.showAlert("密码不能空");
          return;
        } else if (!this.picLyanzhengma) {
          // 验证码不能空
          this.showAlert("验证码不能空");
          return;
        } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
          //验证码与随机的验证码不一致时
          console.log(this.picLyanzhengma.toUpperCase());
          console.log(cook);
          this.showAlert("验证码不正确");
          this.createCode(); //刷新验证码
          this.picLyanzhengma = "";
        } else if (name != registername) {
          this.showAlert("用户名不存在");
          return;
        } else if (pwd != registerpassword) {
          this.showAlert("密码不正确");
          return;
        } else if ((this.picLyanzhengma = this.checkCode)) {
          Toast("登录成功，返回个人中心");
          
          this.$router.push({ name: "my" });
          localStorage.setItem("user", name);
        }
      }
    },
    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    }
  },
  components: {
    AlertTip
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
#login{i{
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
.loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #f7df59;
  text-align: center;
}
.login_header_title {
  padding-top: 40px;
  text-align: center;
 p {
    overflow: hidden;
    display: inline-block;
    width: 50%;
    font-size: 24px;
    color: #ccc;
    box-sizing: border-box;
}
.psd_login {
    text-align: right;
    padding-right: 30px;
    letter-spacing: 2px;
}
.user_login {
    position: relative;
    text-align: left;
    padding-left: 30px;
    letter-spacing: 2px;
}}
.login_content {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

.login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.loginContainer .loginInner .login_content > form > div {
  display: none;
}
.loginContainer .loginInner .login_content > form > div.on {
  display: block;
}
.cook {
  font-size: 18px;
  letter-spacing: 3px;
  color: #053d84;
  background: #f2f2f5;
}
.loginContainer .loginInner .login_content > form > div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  // border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification {
  position: absolute;
  top: 50%;
  width: 35%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: rgb(207, 207, 218);
  font-size: 14px;
  background: transparent;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verificationa {
 position: absolute;
    top: 50%;
    width: 35%;
    height: 20px;
    height: 45px;
    right: 1px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    border: 0;
    letter-spacing: 2px;
    background: #fffcfc;
    color: #ccaa7a;
    font-size: 14px;
}

.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_message
  .get_verification.right_phone {
  color: #000;
}
.login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.login_verification input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  // border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.login_submit {
 height: 44px;
    background: #ccc;
    width: 100%;
    display: block;
    margin: 40px auto 0;
    text-align: center;
    line-height: 44px;
    border: 0;
    font-size: 16px;
    color: #ccaa7a;
    background-image: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
    box-shadow: 0 6px 4px 0 rgba(0,0,0,.1);
}
.about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
.loginContainer .loginInner .login_header .login_header_title > p.on {
  color: #666;
    font-weight: 700;
}
.switch_text {
  float: right;
  color: red;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 46px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.off {
  background: #fff;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button.on {
   background: rgb(32, 248, 104);
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.loginContainer
  .loginInner
  .login_content
  > form
  > div
  .login_verification
  .switch_button
  > .switch_circle.right {
  transform: translateX(30px);
}
.a-fixed {
  position: fixed;
  z-index: 999;
  background: #999;
  width: 24px;
  top: 11px;
  height: 24px;
  // border-radius: 20px;
  margin-left: 10px;
}
.ar-left {
  width: 100%;
  height: 100%;
}
.ar-left img {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 17px;
}
.register {
  /* margin-top: 10px; */
  color: #999;
  font-size: 15px;
  margin-top: 15px;
  margin-right: 10px;
  float: right;
  text-align: center;
}}

</style>
