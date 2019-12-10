
<template>
  <div>
    <router-link to="/search">
      <van-search placeholder="购表享12期分期免息优惠" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>
    </router-link>
    <div class="swiper to_search">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-grid :border="false" :column-num="4"> 
      <van-grid-item>
        <van-image src="/static/img/mall.png" />
        <div class="txt">男表</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall2.png" />
        <div class="txt">女表</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall3.png" />
        <div class="txt">新品首发</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall4.png" />
        <div class="txt">新人礼</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall5.png" />
        <div class="txt">天天抽奖</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall6.png" />
        <div class="txt">名匠维修</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall7.png" />
        <div class="txt">认证二手</div>
      </van-grid-item>
      <van-grid-item>
        <van-image src="/static/img/mall8.gif" />
        <div class="txt">秒杀</div>
      </van-grid-item>
    </van-grid>
    <van-image width="100%" fit="contain" src="/static/img/co.jpg" />
    <div class="title">
      <p class="title-text">优选品牌</p>
      <p class="title-line"></p>
    </div>

    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in imageList" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="container">
      <div class="item item-1" v-for="(image, index) in imgg" :key="index">
        <img v-lazy="image" />
      </div>
    </div>
    <div class="title">
      <p class="title-text">本月爆款</p>
      <p class="title-line"></p>
    </div>

    <van-image width="100%" fit="contain" src="/static/img/wb12.jpg" />
    <van-image width="100%" fit="contain" src="/static/img/wb13.jpg" />
    <van-image width="100%" fit="contain" src="/static/img/wb9.jpg" />
    <van-image width="100%" fit="contain" src="/static/img/wb14.jpg" />
    <div class="title">
      <p class="title-text">限时购</p>
      <p class="title-linee"></p>
    </div>
    <div class="row">
      <van-row class="vanrow">
        <van-col span="12"></van-col>
        <van-col span="12"></van-col>
      </van-row>
      <div class="down">
        <div class="marg">
          距本期结束还剩
          <van-count-down :time="time" format="DD 天 HH : mm : ss " />
        </div>
      </div>
    </div>

    <van-row>
        <van-col class="contentop" span="12" v-for="(contents, index) in contentop" :key="index">
          <router-link  :to="'/details/'+contents.id">
          <img class="vanaa" :src="contents.src" />
          <span class="img">
            <img class="yaofeng" :src="contents.png" />
            <span class="yaofeng-price">
              <b v-html="contents.yaofeng"></b>
              <b v-html="contents.price"></b>
            </span>
          </span>
          <div class="p3">
            <span class="month_tag">
              <b class="em" v-html="contents.title">月付</b>
            </span>
            <b v-html="contents.txte" class="s_price"></b>
            <b v-html="contents.txte" class="mk_price"></b>
          </div>
          <span v-html="contents.Written" class="mk-title"></span>
          <div class="tag">
            <span class="tag-a">
              <em v-html="contents.branch"></em>
            </span>
          </div>
          </router-link>
        </van-col>
    </van-row>

    <div class="timg"></div>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      images: [
        "/static/img/wb1.jpg",
        "/static/img/wb2.jpg",
        "/static/img/wb3.jpg",
        "/static/img/wb4.jpg",
        "/static/img/wb5.jpg",
        "/static/img/wb6.jpg",
        "/static/img/wb7.jpg",
        "/static/img/wb8.jpg"
      ],
      imageList: ["/static/img/wb10.jpg", "/static/img/wb11.jpg"],
      imgg: [
        "/static/img/efcc.jpg",
        "/static/img/efcc2.jpg",
        "/static/img/efcc3.jpg",
        "/static/img/cfcc4.jpg",
        "/static/img/cfcc5.jpg",
        "/static/img/cfcc6.jpg",
        "/static/img/cfcc7.jpg",
        "/static/img/cfcc8.jpg",
        "/static/img/cfcc9.jpg"
      ],
      contentop: [
        {
          id:'p1',
          title: "月付",
          src: "/static/img/pad.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 0
        },
        {
          id:'p2',

          title: "月付",
          src: "/static/img/pad2.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          png: "/static/img/gop.png",
          yaofeng: "¥",
          price: "10,000",
          key: 1
        },
        {
          id:'p3',

          title: "月付",
          src: "/static/img/pad3.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          png: "/static/img/gop.png",
          yaofeng: "¥",
          price: "10,000",
          key: 2
        },
        {
          id:'p4',

          title: "月付",
          src: "/static/img/pad4.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 3
        },
        {
          id:'p5',

          title: "月付",
          src: "/static/img/pad5.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 4
        },
        {
          id:'p6',

          title: "月付",
          src: "/static/img/pad6.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 5
        },
        {
          id:'p7',

          title: "月付",
          src: "/static/img/pad7.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          png: "/static/img/gop.png",
          yaofeng: "¥",
          price: "10,000",
          key: 6
        },
        {
          id:'p8',

          title: "月付",
          src: "/static/img/pad8.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 7
        },
        {
          id:'p9',
          title: "月付",
          src: "/static/img/pad9.jpg",
          txte: "¥1008.3",
          txet: "¥12100",
          Written: "拓天马 机械男表 M2 运动系列",
          branch: "免息分期",
          key: 8
        },
      
      ],
      time: 30 * 60 * 60 * 1000
    };
  }
};
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 274px;
  .van-swipe {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #fff;
  }
}
.van-grid {
  background-size: 100% 100%;
  background: url("/static/img/eea.jpg");
}

.van-grid-item__content {
  background-color: transparent;
}
#container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 33.3%);
  .item {
    height: 100px;
    font-size: 4em;
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.txt {
  font-size: 11px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  line-height: 12px;
  margin-top: 5px;
}
.title {
  margin: 16px 0 14px 0;
  .title-text {
    font-size: 16px;
    color: #333;
    line-height: 16px;
    text-align: center;
    margin-bottom: 12px;
    font-weight: 700;
  }
  .title-line {
    width: 24px;
    height: 2px;
    background: #ccaa7a;
    margin: 0 auto;
  }
  .title-linee {
    width: 24px;
    height: 2px;
    background: #cf4040;
    margin: 0 auto;
  }
}
.timg {
  padding-bottom: 50px;
}
.van-search--show-action {
  padding-right: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
}
.to_search {
  margin-top: 54px;
}
.row {
  position: relative;
}
.van-row {
  text-align: center;
}
.vanrow {
  height: 80px;
  padding-top: 40px;
  margin-bottom: 24px;
  text-align: center;
  color: #f2ddce;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 51%;
    height: 100%;
    background: linear-gradient(180deg, #801919 0, #991f1f 100%);
    border-radius: 0 0 16px 0;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(180deg, #801919 0, #991f1f 100%);
    border-radius: 0 0 0 16px;
    z-index: -1;
  }
}
.down {
  width: 100%;
  position: absolute;
  z-index: 9999;
  margin: 0 auto;
  top: 36%;
}
.marg {
  font-size: 24px;
  text-align: center;
  color: #f2ddce;
  margin: 0 auto;
}
.van-count-down {
  font-size: 16px;
  color: #f2ddce;
}
.vanaa {
  width: 180px;
}
.p3 {
  padding: 8px 8px 4px 0;
  margin-bottom: 4px;
  white-space: nowrap;
  .month_tag {
    position: relative;
    top: 0;
    padding: 2px 4px;
    background: linear-gradient(270deg, #ff8080 0, #e65c5c 100%);
    border-radius: 2px;
    font-size: 12px;
    .em {
      position: relative;
      top: 1px;
      display: inline-block;
      font-size: 12px;
      transform: scale(0.9);
      transform-origin: center;
      color: #fff;
    }
  }
  .s_price {
    position: relative;
    top: 1px;
    margin-right: 10px;
    font-family: DIN-Bold;
    font-size: 14px;
    color: #e65c5c;
  }
  .mk_price {
    position: relative;
    top: 1px;
    font-family: DIN-Bold;
    font-size: 14px;
    color: #666;
    &:before {
      content: "";
      position: absolute;
      left: -7px;
      top: 4px;
      width: 1px;
      height: 12px;
      background: #ddd;
    }
  }
}
.img {
  position: relative;
  overflow: hidden;
  height: 220px;

  .yaofeng {
    width: 180px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .yaofeng-price {
    position: absolute;
    right: 7%;
    bottom: 12%;
    color: #fff;
    font-size: 14px;
    padding-left: 8px;
    font-family: DIN-Bold;
  }
}
.mk-title {
  font-size: 12px;
  color: #666;
  line-height: 18px;
}
.tag {
  width: 100%;
  .tag-a {
    float: left;
    border: 1px solid #c6a461;
    border-radius: 2px;
    font-size: 10px;
    color: #c6a461;
    padding: 1px 4px;
    display: inline-block;
    em {
      display: inline-block;
      transform: scale(0.83);
      transform-origin: center;
    }
  }
}
.contentop {
  background: #fff;
}
</style>