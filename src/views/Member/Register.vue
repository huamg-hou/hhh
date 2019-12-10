<template>
  <div id="register"> 
     <i  @click="backClick" class="icon-d-back02"></i>
    <div class="register_content">
       <div class="register_title">
         <h2>注册会员</h2>
         <p class="register_p">
           有账号? 
            <router-link to="/login">
        去登录
        </router-link>
         </p>
       </div>
      <div class="register_hear">
        <form @submit.prevent="login">
          <!-- 注册 -->
          <div class="regiter">
            <div>
              <div class="register_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </div>
              <div class="register_verification">
                <input type="text" maxlength="21" placeholder="密码" v-if="showPwd" v-model="pwd" />

                <input type="password" maxlength="21" placeholder="密码" v-else v-model="pwd" />

                <div
                  class="switch_button off"
                  :class="showPwd?'on':'off'"
                  @click="showPwd=!showPwd"
                >
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                </div>
              </div>
              <div class="register_verification">
                <input type="password" maxlength="21" placeholder="再次确认密码" v-model="pow" />
              </div>
            </div>
          </div>

          <button class="register_submit" @click.prevent="login">注册</button>
        </form>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
    </div>
  </div>
</template>
<script>
import AlertTip from "@/components/AlertTip.vue";
import {
  Toast,
} from "vant";
export default {
  data() {
    return {
      showPwd: false,
      pwd: "",
      name: "",
      username: "",
      alertText: "",
      alertShow: false,
      pow: "",
      iq: ""
    };
  },
  methods: {
     backClick() {
        this.$router.back()
      },

    closeTip() {
      this.alertShow = false;
      this.alertText = "";
    },
    showAlert(alertText) {
      this.alertShow = true;
      this.alertText = alertText;
    },
    login() {
    
      var registername = localStorage.getItem("username");
      console.log(registername);
      
      const { username, pwd, name, pow } = this;
      if(username){
         } else if (!name) {
        this.showAlert("用户名不能为空");
        return;
      } else if (!/^1[345678]\d{9}$/.test(name)) {
        this.showAlert("手机号码格式不对");
        return;
      }else if (this.name = this.registername) {
        this.showAlert("该用户已经注册了");
        return;
      } else if (!this.pwd) {
        this.showAlert("密码不能空");
        return;
      } else if (this.pow != this.pwd) {
        this.showAlert("两次密码不正确");
        return;
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test(pwd)) {
        this.showAlert("密码格式不对，密码由6-21字母和数字组成");
        return;
      }  else if (this.name = this.pwd) {
        this.$router.push({ name: "login" });
        Toast("注册成功，返回登录");
      }
            localStorage.setItem("name", name);
        localStorage.setItem("password", pwd);
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
#register{
  .register_title {
    text-align: center;
h2 {
    margin: 25px 0 0;
    font-size: 24px;
    color: #666;
}}
.register_p{
  position: relative; margin-top: 22px;
    height: 44px;
    background: #fff;
    border-bottom: 1px solid #ededed;
    margin-bottom: 20px;
    font-size: 14px;
    color: #ccc;
     a {
    color: #999;
    text-decoration: underline;}

}
i{
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
.register_content {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.register_hear {
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
.regiter {
  width: 100%;
  height: 100%;
}
.register_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.register_message input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd; 
  //  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
.register_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.register_verification input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd; 
  // border-radius: 4px; 
  outline: 0;
  font: 400 14px Arial;
}
.register_submit {
  height: 44px;
    background: #ccc;
    width: 100%;
    display: block;
    margin: 40px auto 0;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    border: 0;
    color: #ccaa7a;
    background-image: linear-gradient(-180deg,#3a3a3a 0,#1c1c1c 100%);
    box-shadow: 0 6px 4px 0 rgba(0,0,0,.1);
}

.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 45px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button.off {
  background: #fff;
}
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button.on {
  background: rgb(32, 248, 104);
}

.register_content
  .register_hear
  > form
  > div
  .register_verification
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
.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button
  > .switch_circle
  .right {
  transform: translateX(30px);
}

.register_content
  .register_hear
  > form
  > div
  .register_verification
  .switch_button
  > .switch_circle.right {
  transform: translateX(30px);
}
.switch_text {
  float: right;
  color: red;
}}

</style>
