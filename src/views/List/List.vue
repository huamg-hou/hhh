<template>
  <div>
    <div class="wihpp">
      <van-search class="place" placeholder="请输入搜索关键词" shape="round" />
      <router-link class="search" to="/about">
        <i class="icon-d-to-list"></i>
      </router-link>
    </div>
    <div>
      <van-tabs type="card">
        <van-tab title="综合排序">
          <div id="backpack">
            <dida-list
              ref="dida_list"
              :maxPage="maxPage"
              @refresh="getData($event)"
              @load="getData($event)"
            >
              <ul class="group">
                <li class="cell " v-for="(i,index) in list" :key="index">
              <div class="commodity" v-for="(i,index) in commodity" :key="index">
                        <router-link :to="'/details/'+i.id">
                      <p class="p1">
                        <img class="hut" :src="i.cell" />
                        <span class="yaofeng">
                          <img :src="i.cellimg" />
                          <span class="yaofeng-price" v-html="i.yaofeng"></span>
                        </span>
                      </p>
                      <p class="p3">
                        <span class="month_tag">
                          <em v-html="i.month"></em>
                        </span>
                        <span class="s_price" v-html="i.price">¥480.8</span>
                        <span class="mk_price" v-html="i.mkprice">¥5770</span>
                      </p>
                      <p class="p2 esp1">
                        <em class="em_brand" v-html="i.embrand">爱宝时</em>
                        <span class="Emotion" v-html="i.Emotion">Emotion情感系列 机械男表</span>
                      </p>
                      <p class="p4">
                        <span>
                          <em v-html="i.option">免息分期</em>
                        </span>
                        <span>
                          <em v-html="i.some">水蓝版</em>
                        </span>
                      </p> 
                       </router-link>
                        </div>                                
                </li>
              </ul>
            </dida-list>
          </div>
        </van-tab>
        <van-tab title="销量优先">
          <div id="backpack">
            <dida-list
              ref="dida_list"
              :maxPage="maxPage"
              @refresh="getData($event)"
              @load="getData($event)"
            >
              <ul class="group">
                <li class="cell" v-for="(i,index) in list" :key="index">
                  <div class="commodity" v-for="(i,index) in commodity" :key="index">
                      <router-link :to="'/details/'+i.id">
                    <p class="p1">
                      <img class="hut" :src="i.cell" />
                      <span class="yaofeng">
                        <img :src="i.cellimg" />
                        <span class="yaofeng-price" v-html="i.yaofeng"></span>
                      </span>
                    </p>
                    <p class="p3">
                      <span class="month_tag">
                        <em v-html="i.month"></em>
                      </span>
                      <span class="s_price" v-html="i.price">¥480.8</span>
                      <span class="mk_price" v-html="i.mkprice">¥5770</span>
                    </p>
                    <p class="p2 esp1">
                      <em class="em_brand" v-html="i.embrand">爱宝时</em>
                      <span class="Emotion" v-html="i.Emotion">Emotion情感系列 机械男表</span>
                    </p>
                    <p class="p4">
                      <span>
                        <em v-html="i.option">免息分期</em>
                      </span>
                      <span>
                        <em v-html="i.some">水蓝版</em>
                      </span>
                    </p>
                     </router-link>
                  </div>                
                </li>
              </ul>
            </dida-list>
          </div>
        </van-tab>
        <van-tab title="价格排序">
          <div id="backpack">
            <dida-list
              ref="dida_list"
              :maxPage="maxPage"
              @refresh="getData($event)"
              @load="getData($event)"
            >
              <ul class="group">
                <li class="cell" v-for="(i,index) in list" :key="index">
                <div class="commodity" v-for="(i,index) in commodity" :key="index">
                    <router-link :to="'/details/'+i.id">
                    <p class="p1">
                      <img class="hut" :src="i.cell" />
                      <span class="yaofeng">
                        <img :src="i.cellimg" />
                        <span class="yaofeng-price" v-html="i.yaofeng"></span>
                      </span>
                    </p>
                    <p class="p3">
                      <span class="month_tag">
                        <em v-html="i.month"></em>
                      </span>
                      <span class="s_price" v-html="i.price">¥480.8</span>
                      <span class="mk_price" v-html="i.mkprice">¥5770</span>
                    </p>
                    <p class="p2 esp1">
                      <em class="em_brand" v-html="i.embrand">爱宝时</em>
                      <span class="Emotion" v-html="i.Emotion">Emotion情感系列 机械男表</span>
                    </p>
                    <p class="p4">
                      <span>
                        <em v-html="i.option">免息分期</em>
                      </span>
                      <span>
                        <em v-html="i.some">水蓝版</em>
                      </span>
                    </p>
                      </router-link>
                  </div>
                </li>
              </ul>
            </dida-list>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import didaList from "@/components/didaList.vue";
export default {
  data() {
    hideLoading:'';
    return {
      list: [
         {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        }
      ],
      commodity: [
        {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        }, {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        }, {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        }, {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
         {
          id: "p1",
          cell: "/static/img/pad3.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
        {
          id: "p2",
          cell: "/static/img/pad11.jpg",
          yaofeng: "¥5,170",
          month: "月付",
          price: "¥480.8",
          mkprice: "¥5770",
          embrand: "爱宝时",
          Emotion: "Emotion情感系列 机械男表",
          option: "免息分期",
          some: "水蓝版"
        },
      ],
    
      pagesize: 6, // 默认每页显示的个数
      maxPage: null // 默认的最大页数
    };
  },
  created() {},
  components: {
    didaList
  },
  methods: {
    /**
     * prmt.type  【refresh：下拉刷新，load上拉加载更多】
     * prmt.currentpage 页码(默认为1)
     */
    getData(prmt) {
      // 这里模拟请求数据时间为一秒
      this.maxPage = 5;
      setTimeout(() => {
        for (let i = 0; i < this.pagesize; i++) {
          if (prmt.type == "refresh") {
            //在旧数据的最前面插入最新数据
            this.list.unshift("我是最新资讯");
            //更新数据成功后设置loading隐藏
            this.$refs.dida_list.hideIsLoading();
          } else {
            this.list.push(prmt.currentPage);
            //加载数据成功后设置loading隐藏
            this.$refs.dida_list.hideLoading();
          }
        }
      }, 500);
    }
  }
};
</script>
<style lang="scss">
.icon-d-to-list {
  margin-top: 5px;
  display: block;
  background-image: url("/static/img/d.png");
  background-position: -257.5px 0;
  background-size: 448.5px;
  width: 44px;
  height: 44px;
}
.van-tabs__nav--card {
  border: 1px solid #ffffff;
  .van-tab {
    color: #999;
    border-right: 1px solid #ffffff;
  }
}
.van-tabs__nav--card .van-tab.van-tab--active {
  color: #d90000;
  background: none;
}
.Litab {
  border-right: 1px solid #999;
}

.van-cell {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  padding: 3px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  float: right;
  &:not(:last-child)::after {
  }
}
.van-cell__value--alone {
  color: #999;
}
.van-overlay {
  position: absolute;
  position: fixed;
  top: 92px;
  left: 25%;
  width: 75%;
  height: 86%;
  background-color: rgba(0, 0, 0, 0.7);
}
.van-popup--bottom {
  bottom: 78%;
  left: 25%;
  background: #000;
  float: right;
  width: 100%;
}
.wihpp {
  width: 100%;
  height: 60px;
  z-index: 1;
  top: 0;
  background: #fff;
  position: fixed;
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
.van-tabs--card > .van-tabs__wrap {
  height: 30px;
  position: fixed;
  top: 54px;
  right: 0px;
  z-index: 10;
  width: 110%;
}
.van-tabs__nav {
  width: 100%;
  margin: 0 auto;
}
.van-tabs__nav--card {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  height: 30px;
  margin: 0 16px;
  border-radius: 2px;
}
.conten {
  margin-top: 80px;
}
#backpack {
  background: #f1f1f1;
  height: 100%;
  overflow: auto;
  margin-top: 80px;
}
ul li {
  width: 105%;
  overflow: hidden;
}
.group {
  width: 105%;
  height: 100%;
  right: 2%;
  position: relative;
  overflow: hidden;
  padding: 2.666666666%;
}
.esp1 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cell {
  float: left;
  width: 48%;
  /* height: 100px; */
  margin: 3px 3px;
  .commodity {
    overflow: hidden;
    margin-bottom: 8px;
    background: #ffffff;
    p {
      padding: 0 12px;
      margin: 0 auto;
    }
    .p1 {
      position: relative;
      overflow: hidden;
      margin-top: 12px;
      height: 220px;
      .hut {
        position: relative;
        width: 200px;
        right: 15%;
      }
      .yaofeng {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        img {
          position: relative;
          width: 100%;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          height: 100%;
        }
        .yaofeng-price {
          position: absolute;
          right: 7%;
          bottom: 12%;
          color: #fff;
          font-size: 12px;
          padding-left: 8px;
          text-align: left;
          font-family: DIN-Bold;
          i {
            position: absolute;
            bottom: -1px;
            left: 0;
            font-style: normal;
            transform: scale(0.75);
            font-style: normal;
          }
        }
      }
    }
    .p3 {
      padding: 8px 8px 4px 8px;
      white-space: nowrap;
      .month_tag {
        display: inline-block;
        padding: 3px 4px;
        background: linear-gradient(270deg, #ff8080 0, #e65c5c 100%);
        border-radius: 2px;
        margin-right: 2px;
        em {
          font-size: 12px;
          transform: scale(0.83);
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
          top: 3px;
          width: 1px;
          height: 12px;
          background: #ddd;
        }
      }
    }
    .p2 {
      padding-top: 4px;
      margin-bottom: 8px;
      font-size: 12px;
      color: #666;
      .em_brand {
        font-weight: 700;
        color: #333;
      }
      .Emotion {
        margin-left: 5px;
      }
    }
    .p4 {
      line-height: 10px;
      span {
        border-radius: 2px;
        border: 1px solid #cc9952;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
        padding: 4px 2px;
        padding: 2px 3px 1px;
        display: inline-block;
        &:first-child {
          color: #cc9952;
        }
        &:nth-child(2n) {
          border: 1px solid #cc5252;
          color: #cc5252;
        }
      }
    }
  }
}
</style>