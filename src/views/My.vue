
<template>
  <div class="bodybo">
    <div class="W-member-index">
      <div class="member-top">
        <div class="member-head">
          <div class="member-head">
            <div class="W_title">
              <p class="rewrite_right">
                <router-link to="/setting">
                  <i class="icon-a-m-setting"></i>
                </router-link>
              </p>
            </div>
            <div class="Eighty" v-if="gologin">
              <span class="icon-a-m-head01"></span>
              <div class="head-login">
                <router-link to="/login">
                  <p class="p1">登录/注册</p>
                  <p class="p2">登录享优惠</p>
                </router-link>
              </div>
            </div>
            <div class="Eighty" v-else>
              <span class="icon-a-my">
                <van-image
                  round
                  width="4rem"
                  height="4rem"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </span>
              <div class="my-login">
                <span  class="p1">
                 {{usename}}
                  <p class="p2">天马</p>
                  </span>
              </div>
            </div>
            <div class="vcol">
              <van-row>
                <van-col span="8">
                  <div class="vacolo">
                    <p class="icon-a-m-write"></p>
                    <span class="heig">个人资料</span>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="vacolo">
                    <p class="icon-a-m-place"></p>
                    <span class="heig">收货地址</span>
                  </div>
                </van-col>
                <van-col span="8">
                  <div class="vacolo">
                    <p class="icon-a-m-collection"></p>
                    <span class="heig">我的收藏</span>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-line">
      <div class="Ordem floor-top">
        <p>我的订单</p>
        <i class="icon-a-whole"></i>
      </div>
      <div class="gutt">
        <van-row>
          <van-col span="6">
            <span>
              <i class="icon-a-m-pay"></i>
              <p>待付款</p>
            </span>
          </van-col>

          <van-col span="6">
            <span>
              <i class="icon-a-m-ship"></i>
              <p>待付款</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-receipt"></i>
              <p>待付款</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-evaluate"></i>
              <p>待付款</p>
            </span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="modules-floor">
      <div class="Ordem floor-top">
        <p>我的服务</p>
        <span class="fr">联系万表</span>
        <span class="speakas fr">
          <img src="/static/img/contact.png" />
        </span>
      </div>
      <div class="gutt">
        <van-row class="borboot">
          <van-col span="6">
            <span>
              <i class="icon-a-m-presale"></i>
              <p>我的预售</p>
            </span>
          </van-col>

          <van-col span="6">
            <span>
              <i class="icon-d-gift"></i>
              <p>我的礼品单</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-aftersale"></i>
              <p>售后服务</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-integral"></i>
              <p>我的青苗</p>
            </span>
          </van-col>
        </van-row>
        <van-row class="borboot">
          <van-col span="6">
            <span>
              <i class="icon-a-m-invoice"></i>
              <p>发票管理</p>
            </span>
          </van-col>

          <van-col span="6">
            <span>
              <i class="icon-a-m-coupon"></i>
              <p>优惠券</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-wallet"></i>
              <p>余额</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-a-m-footprint"></i>
              <p>足迹</p>
            </span>
          </van-col>
        </van-row>
        <van-row class="borboot">
          <van-col span="6">
            <span>
              <i class="icon-a-m-comment"></i>
              <p>我的评论</p>
            </span>
          </van-col>

          <van-col span="6">
            <span>
              <i class="icon-d-recommend"></i>
              <p>推荐</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-d-repair"></i>
              <p>手表管家</p>
            </span>
          </van-col>
          <van-col span="6">
            <span>
              <i class="icon-d-after-repair"></i>
              <p>维修订单</p>
            </span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="timg"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gologin: false,
      usename: "",
      fileList: []
    };
  },
  mothods: {
    login() {
      if (window.localStorage.phoname) {
        let use = JSON.parse(window.localStorage.phoname);
        console.log(this.usename);
        this.gologin = false;
        this.usename = use;
      } else {
        this.gologin = true;
        this.$router.push({ name: "my" });
      }
    }
  },
  created() {
    this.usename = localStorage.getItem("user");
    if (this.usename) {
      this.gologin = false;
    } else {
      this.gologin = true;
    }
  }
};
</script>
<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}
.bodybo {
  background: #f7f7f7;
}
.W-member-index {
  padding-bottom: 50px;
  .member-top {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 206px;
    background-image: url("/static/img/bg.png");
    background-size: cover;
    background-color: #1e1e1e;
    .member-head {
      position: relative;
      height: 154px;
      .W_title {
        background: 0 0;
        border-bottom: 0;
        position: relative;
        width: 100%;
        height: 44px;
        line-height: 44px;
        max-width: 640px;
        margin: 0 auto;
        .rewrite_right {
          overflow: hidden;
          margin-right: 9px;
          .icon-a-m-setting {
            float: right;
            margin-top: 15px;
            display: block;
            background-image: url("/static/img/background.png");
            background-position: -381px 0;
            background-size: 443px;
            width: 32px;
            height: 32px;
          }
        }
      }
      .Eighty {
        overflow: hidden;
        width: 85%;
        margin: 0 auto;
        .icon-a-m-head01 {
          float: left;
          width: 64px;
          height: 64px;
          display: block;
          background-image: url("/static/img/background.png");
          background-position: -69px -178px;
          background-size: 443px;
          width: 64px;
          height: 64px;
        }
        .icon-a-my {
          float: left;
          width: 64px;
          height: 64px;
          display: block;
          // background-image: url(/static/img/background.png);
          background-position: -262px -178px;
          background-size: 443px;
          width: 64px;
          height: 64px;
        }
        .head-login {
          float: left;
          display: inline-block;
          color: #fff;
          margin-left: 10px;
          font-size: 12px;
          vertical-align: top;
          margin-top: 13px;
          .p1 {
            color: #fff;
            font-size: 14px;
            margin-bottom: 2px;
          }
          .p2 {
            color: #fff;
            font-size: 12px;
            margin-bottom: 2px;
          }
        }
        .my-login {
          float: left;
          display: inline-block;
         text-overflow: ellipsis;
          overflow: hidden;
          width: 50px;
          color: #fff;
          margin-left: 10px;
          font-size: 12px;
          vertical-align: top;
          margin-top: 25px;
          .p1 {
            color: #fff;
            font-size: 14px;
            margin-bottom: 2px;
          }
          .p2 {
            color: #fff;
            font-size: 12px;
            margin-bottom: 2px;
          }
        }
      }
      .vcol {
        width: 100%;
        margin-top: 43px;

        .vacolo {
          position: relative;
          height: 52px;
          background: rgba(0, 0, 0, 0.3);
          display: block;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 17px;
          &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background: #ddd;
            opacity: 0.2;
          }
          p {
            position: absolute;
            margin: 6px auto 4px;
            left: 50%;
          }
        }

        .icon-a-m-write {
          display: block;
          margin-right: 10px;
          background-image: url("/static/img/background.png");
          background-position: -202px -368px;
          background-size: 443px;
          width: 16px;
          height: 16px;
        }
        .icon-a-m-place {
          display: block;
          background-image: url("/static/img/background.png");
          background-position: -42px -417.5px;
          background-size: 443px;
          width: 16px;
          height: 16px;
        }
        .icon-a-m-collection {
          display: block;
          background-image: url("/static/img/background.png");
          background-position: -371px -392.5px;
          background-size: 443px;
          width: 16px;
          height: 16px;
        }
        .heig {
          position: relative;
          color: #fff;
          left: 3%;
          top: 50%;
          text-align: center;
        }
      }
    }
  }
}
.profile {
  width: 91.47%;
  margin: 0 auto;
  position: relative;
  top: -30px;
  p {
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    text-align: center;
  }
  .no-login {
    font-size: 12px;
    text-align: center;
    background: #cc3d3d;
    color: #fff;
  }
  a {
    text-decoration: underline;
  }
}
.list-line {
  margin-bottom: 8px;
  background: #fff;
  .Ordem {
    width: 100%;
    p {
      margin-left: 14px;
      float: left;
    }
  }
  .floor-top {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    margin-top: -17px;
    color: #333;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
  }
  .icon-a-whole {
    margin-right: 10px;
    display: block;
    margin-top: 14px;
    float: right;
    background-image: url(/static/img/background.png);
    background-position: -244px -368px;
    background-size: 443px;
    width: 16px;
    height: 16px;
  }
  .gutt {
    width: 100%;
    span {
      height: 50px;
      display: block;
      font-size: 12px;
      color: #333;
    }
    .icon-a-m-pay {
      margin: 5px auto;
      display: block;
      background-image: url("/static/img/background.png");
      background-position: -175px -392.5px;
      background-size: 443px;
      width: 20px;
      height: 20px;
    }
    .icon-a-m-ship {
      margin: 5px auto;
      display: block;
      background-image: url("/static/img/background.png");
      background-position: -300px -392.5px;
      background-size: 443px;
      width: 20px;
      height: 20px;
    }
    .icon-a-m-receipt {
      display: block;
      margin: 5px auto;
      background-image: url("/static/img/background.png");
      background-position: -250px -392.5px;
      background-size: 443px;
      width: 20px;
      height: 20px;
    }
    .icon-a-m-evaluate {
      margin: 5px auto;
      display: block;
      background-image: url("/static/img/background.png");
      background-position: -25px -392.5px;
      background-size: 443px;
      width: 20px;
      height: 20px;
    }
  }
}
.modules-floor {
  margin-top: 25px;
  margin-bottom: 8px;
  background: #fff;
  .Ordem {
    width: 100%;
    p {
      margin-left: 14px;
      float: left;
    }
  }
  .floor-top {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    margin-top: -17px;
    color: #333;
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
  }
  .borboot {
    border-bottom: 1px solid #f1f1f1;
  }
  .icon-a-whole {
    margin-right: 10px;
    display: block;
    margin-top: 14px;
    float: right;
    background-image: url(/static/img/background.png);
    background-position: -244px -368px;
    background-size: 443px;
    width: 16px;
    height: 16px;
  }
  .fr {
    margin-right: 10px;
    float: right;
  }
  .speakas {
    margin-top: 2px;
    width: 14px;
    img {
      width: 100%;
    }
  }

  .gutt {
    width: 100%;
    span {
      height: 50px;
      display: block;
      font-size: 12px;
      color: #333;

      .icon-a-m-presale {
        margin: 5px auto;
        display: block;
        background-image: url("/static/img/background.png");
        background-position: -225px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-d-gift {
        margin: 5px auto;
        display: block;
        background-image: url("/static/img/background1.png");
        background-position: -118px -279.5px;
        background-size: 334.5px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-aftersale {
        margin: 5px auto;
        display: block;
        background-image: url("/static/img/background.png");
        background-position: -418px -328.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-integral {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -125px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-invoice {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -150px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-coupon {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -325px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-wallet {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -200px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-footprint {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -50px -392.5px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-a-m-comment {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background.png");
        background-position: -304px -247px;
        background-size: 443px;
        width: 20px;
        height: 20px;
      }
      .icon-d-recommend {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background1.png");
        background-position: -160px -76.5px;
        background-size: 334.5px;
        width: 20px;
        height: 20px;
      }
      .icon-d-repair {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background1.png");
        background-position: -93px -279.5px;
        background-size: 334.5px;
        width: 20px;
        height: 20px;
      }
      .icon-d-after-repair {
        display: block;
        margin: 5px auto;
        background-image: url("/static/img/background1.png");
        background-position: -225px -189.5px;
        background-size: 334.5px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>