<template>
  <div>
    <div class="ter">
       <div @click="backClick">
      <p class="lo-fl">
          <i class="icon-d-back02"></i>
            </p>
      </div>
      <div class="tabs">
        <van-tabs v-model="activeName">
          <van-tab title="商品" name="a">
            <van-swipe class="goods-swipe" :autoplay="3000">
              <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" />
              </van-swipe-item>
            </van-swipe>
            <div class="yaofeng">
              <img src="/static/img/99.png" />
              <div class="yaofeng-price">
                <b>￥</b>5670
              </div>
            </div>
            <van-cell-group>
              <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
              </van-cell>
              <van-cell class="goods-express">
                <van-col span="10">运费：{{ goods.express }}</van-col>
                <van-col span="14">剩余：{{ goods.remain }}</van-col>
              </van-cell>
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
              <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
                <template slot="title">
                  <span class="van-cell-text">有赞的店</span>
                  <van-tag class="goods-tag" type="danger">官方</van-tag>
                </template>
              </van-cell>
              <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
            </van-cell-group>
            <van-cell-group class="goods-cell-group">
              <van-cell title="查看商品详情" is-link @click="sorry" />
            </van-cell-group>
            <van-goods-action>
              <van-goods-action-icon icon="chat-o" @click="sorry">{{ goods.Customer }}</van-goods-action-icon>
              <van-goods-action-icon icon="cart-o" @click="onClickCart">{{ goods.Shopping }}</van-goods-action-icon>
              <van-goods-action-button type="warning" @click="sorry">{{ goods.join }}</van-goods-action-button>
              <van-goods-action-button type="danger" @click="sorry">{{ goods.Immediate }}</van-goods-action-button>
            </van-goods-action>
          </van-tab>
          <van-tab title="详情" name="b">
            <van-tabs type="card">
              <van-tab title="商品介绍">
                <div class="W_gnTab_content">
                  <div class="de_introduce_title">商品展示区划去的价格为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买!</div>
                  <div class="img2">
                    <img src="/static/img/5d.jpg" />
                  </div>
                  <div class="de_introduce_content">
                    <img src="/static/img/91f.jpg" />
                    <img src="/static/img/7a.jpg" />
                    <img src="/static/img/80f.jpg" />
                    <img src="/static/img/ c06.jpg" />
                    <img src="/static/img/57d.jpg" />
                    <img src="/static/img/8be.jpg" />
                  </div>
                  <div class="bottomImageUrl">
                    <img src="/static/img/3701b.jpg" />
                  </div>
                  <div class="brand_introduction">
                    <img src="/static/img/brand_introduction_01.jpg" />
                    <img src="/static/img/brand_introduction_02.jpg" />
                    <img src="/static/img/brand_introduction_03.jpg" />
                    <img src="/static/img/brand_introduction_04.jpg" />
                    <img src="/static/img/brand_introduction_05.jpg" />
                    <img src="/static/img/brand_introduction_06.jpg" />
                    <img src="/static/img/brand_introduction_07.jpg" />
                    <img src="/static/img/brand_introduction_08.jpg" />
                    <img src="/static/img/brand_introduction_09.jpg" />
                    <img src="/static/img/brand_introduction_10.jpg" />
                  </div>
                </div>
              </van-tab>
              <van-tab title="规格参数">
                <div class="W_gnTab_content">
                  <div class="de_introduce_title">商品展示区划去的价格为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买!</div>
                  <div class="de_parameter_content">
                    <div class="title">真皮 蓝色 牛皮-规格参数</div>
                    <div class="content clearfix">
                      <div class="content_a">腕表机芯</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">机芯类型</div>
                          <div class="content_b_a_b">机械、自动机械</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">机芯型号</div>
                          <div class="content_b_a_b">ETA 2892-A2</div>
                        </div>
                      </div>
                    </div>
                    <div class="content clearfix">
                      <div class="content_a">腕表外壳</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">外壳材质</div>
                          <div class="content_b_a_b">钢</div>
                        </div>
                      </div>
                    </div>
                    <div class="content clearfix">
                      <div class="content_a">腕表表盘</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">腕表表盘</div>
                          <div class="content_b_a_b">41mm</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表盘厚度</div>
                          <div class="content_b_a_b">9mm</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表耳</div>
                          <div class="content_b_a_b">9mm</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">纵向表耳间距</div>
                          <div class="content_b_a_b">50mm</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表冠</div>
                          <div class="content_b_a_b">洋葱头表冠</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">镜面材质</div>
                          <div class="content_b_a_b">蓝宝石水晶</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表盘直径</div>
                          <div class="content_b_a_b">大盘40mm-45mm</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表壳底盖</div>
                          <div class="content_b_a_b">透底</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表盘形状</div>
                          <div class="content_b_a_b">圆形</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表盘刻度</div>
                          <div class="content_b_a_b">条形</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表盘颜色</div>
                          <div class="content_b_a_b">蓝色</div>
                        </div>
                      </div>
                    </div>
                    <div class="content clearfix">
                      <div class="content_a">腕表表带</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表带材质</div>
                          <div class="content_b_a_b">牛皮</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表带颜色</div>
                          <div class="content_b_a_b">黑色</div>
                        </div>
                      </div>
                    </div>
                    <div class="content clearfix">
                      <div class="content_a">腕表表扣</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">表扣类型</div>
                          <div class="content_b_a_b">针扣</div>
                        </div>
                      </div>
                    </div>
                    <div class="content clearfix">
                      <div class="content_a">腕表其他</div>
                      <div class="content_b">
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">适用人群</div>
                          <div class="content_b_a_b">男表</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">包装</div>
                          <div class="content_b_a_b">精美包装盒、说明书、保修卡等</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">推出年份</div>
                          <div class="content_b_a_b">2014年</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">特殊功能</div>
                          <div class="content_b_a_b">夜光</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">防水</div>
                          <div class="content_b_a_b">50米</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">佩戴场合</div>
                          <div class="content_b_a_b">正装</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">价格区间</div>
                          <div class="content_b_a_b">5000-10,000</div>
                        </div>
                        <div class="content_b_a clearfix">
                          <div class="content_b_a_a">联保</div>
                          <div class="content_b_a_b">全球联保，两年保修</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="售后服务">
                <div class="W_gnTab_content">
                  <div class="de_introduce_title">商品展示区划去的价格为品牌建议零售价，并非原价；万表价为商品实时售价，欢迎比较购买!</div>
                  <div class="de_service_content">
                    <img src="/static/img/d76.png" />
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </van-tab>
          <van-tab title="评价" name="c">
            <div class="deintroducetitle">暂无评价</div>
          </van-tab>
          <van-tab title="门店" name="d">
            <div class="banner">
              <img src="/static/img/d071.png" />
              <div class="content">
                <div>
                  <img src="/static/img/3423.jpg" />
                </div>
                <div class="ttle clearfix">
                  <div class="left">
                    <p class="p1">广州总部</p>
                    <p class="p2">广东广州番禺区广州市番禺区广东广州番禺区广州市番禺区</p>
                  </div>
                  <p class="right">
                    <img src="/static/img/phone.png" />
                  </p>
                </div>
              </div>
              <div class="content">
                <div>
                  <img src="/static/img/6ca.jpg" />
                </div>
                <div class="ttle clearfix">
                  <div class="left">
                    <p class="p1">广州总部</p>
                    <p class="p2">广东广州番禺区广州市番禺区广东广州番禺区广州市番禺区</p>
                  </div>
                  <p class="right">
                    <img src="/static/img/phone.png" />
                  </p>
                </div>
              </div>
              <div class="content">
                <div>
                  <img src="/static/img/bfc87.jpg" />
                </div>
                <div class="ttle clearfix">
                  <div class="left">
                    <p class="p1">广州总部</p>
                    <p class="p2">广东广州番禺区广州市番禺区广东广州番禺区广州市番禺区</p>
                  </div>
                  <p class="right">
                    <img src="/static/img/phone.png" />
                  </p>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="timg"></div>
  </div>
</template>
<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import { log } from "util";
import axios from "axios";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      activeName: 0,
      // product:   [{
      //   id:"5",
      //   title:"瑞士艺术制表大师爱宝时",
      //   description:"红色，1000ml",
      //   price:"550.00",
      //   count:"5",
      //   imgUrl:"/static/img/pad.jpg"
      // },
      //  {
      //   id:"1",
      //   title:"臻宠双效水漾保湿乳",
      //   description:"蓝色，500ml",
      //   price:"200.00",
      //   count:"5",
      //   imgUrl:"/static/img/pad.jpg"
      // }

      // ],
      goods: {
           title: "罗马假期-水蓝版 3390.152.20.16.25 机械男表",
        price: 300,
        description: "-Emotion情感系列",
        express: "免运费",
        remain: 19,
        join: "加入购物车",
        Customer: "客服",
        Shopping: "购物车",
        Immediate: "立即购买",
        thumb: [
          "/static/img/bbf.jpg",
          "/static/img/bd7.jpg",
          "/static/img/88.jpg",
          "/static/img/89.jpg",
          "/static/img/90.jpg"
        ]}
    };
  },
  created() {
    let _this = this;
    let product = axios.get("/productList").then(res => {
      console.log(res);
      this.goods = res.data.data.list.find(
        item => item.id == _this.$route.params.id
      );
    });
  },

  methods: {
      backClick() {
        this.$router.back()
      },
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      Toast('加入购物车成功');
      console.log(this.goods);

      let { id, title, description, price, thumb } = this.goods;

      let obj = {
        id,
        title,
        description,
        price,
        count: 1,
        imgUrl: thumb[0]
      };

      let arr = JSON.parse(localStorage.getItem("p-1")) || [];

      if (arr.length) {
        // for (let i = 0; i < arr.length; i++) {
        //   if (arr[i].id == obj.id) {
        //     console.log(123)
        //     obj.count += 1;
        //     break;
        //   } else {

        //     console.log(5645)
        //     arr.push(obj);
        //   }
        // }

        let proIndex = arr.findIndex(item => item.id == obj.id);

        if (proIndex != -1) {
          arr[proIndex].count += 1;
        } else {
          arr.push(obj);
        }
      } else {
        arr.push(obj);
      }

      localStorage.setItem("p-1", JSON.stringify(arr));
    }
  }
};
</script>
<style lang="scss" >
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.ter {
  overflow: hidden;
  width: 100%;
  z-index: 99;
  a {
    display: block;
  }
  .lo-fl {
    float: left;
    z-index: 999;
    background: #fff;
    position: fixed;
    .icon-d-back02 {
      display: block;
      background-image: url("/static/img/background1.png");
      background-position: 0 -189.5px;
      background-size: 334.5px;
      width: 44px;
      height: 44px;
    }
  }
  .van-tabs {
    position: inherit;
    .van-tabs__line {
      position: absolute;
      bottom: 15px;
      left: 0;
      z-index: 1;
      height: 3px;
      background-color: #000;
      border-radius: 3px;
    }
  }
  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        display: block;
      }
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }
  .yaofeng {
    position: absolute;
    width: 100%;
    top: 285px;
    left: 0;
    z-index: 11;
    background-size: cover;
    img {
      width: 100%;
    }
    .yaofeng-price {
      position: absolute;
      right: 7%;
      bottom: 12%;
      color: #fff;
      font-size: 36px;
      font-family: DIN-Bold;
      b {
        font-size: 16px;
      }
    }
  }
  [class*="van-hairline"]::after {
    /* position: absolute; */
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid #ebedf0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .van-tabs--line .van-tabs__wrap {
    height: 44px;
    top: 0;
    position: fixed;
    z-index: 99;
    width: 90%;
    right: 0;
  }
  .van-tabs--card > .van-tabs__wrap {
    height: 30px;
    position: inherit;
    /* top: 54px; */
    /* right: 0px; */
    margin-top: 50px;
    /* z-index: 10; */
    border-bottom: 1px solid #e0dfdf;
    width: 111%;
    .van-tabs__nav--card {
      width: 80%;
      margin: 0px 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 30px;
      /* margin: 0 16px; */
      border-radius: 2px;
    }
  }
  .W_gnTab_content {
    // margin-top: 58px;
    .de_introduce_title {
      background: #f1f1f1;
      border-radius: 4px;
      margin: 20px;
      padding: 8px;
      font-size: 10px;
      color: #999;
      line-height: 18px;
    }
    .img2 {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .de_introduce_content {
      width: 100%;
      font-size: 14px;
      line-height: 30px;
      img {
        width: 100%;
      }
    }
  }
  .bottomImageUrl {
    img {
      width: 100%;
    }
  }
  .brand_introduction {
    padding: 0 8px;
    display: block;
    img {
      width: 100%;
    }
  }

  .evaluate_content {
    width: 94%;
    padding-left: 3%;
    padding-right: 3%;
    display: inline-block;
    margin-top: 15px;
    background-color: #fff;
  }
  .de_parameter_content {
    width: 100%;
    display: inline-block;
    background-color: #fff;
    padding-top: 20px;
    .title {
      margin: 0 20px;
      background: #f7f7f7;
      line-height: 30px;
      padding-left: 10px;
      font-size: 12px;
      color: #444;
    }
    .content {
      padding-left: 10px;
      margin: 9px 20px 20px 20px;
      .content_a {
        font-size: 12px;
        color: #666;
        float: left !important;
        line-height: 21px;
      }
      .content_b {
        width: 90%;
        float: left !important;
        .content_b_a {
          width: 100%;
          text-align: left;
          .content_b_a_a {
            width: 25%;
            text-align: right;
            font-size: 12px;
            color: #999;
            float: left !important;
            line-height: 21px;
          }
          .content_b_a_b {
            padding-left: 30px;
            font-size: 12px;
            color: #666;
            line-height: 21px;
            width: 62%;
            float: left !important;
          }
        }
      }
    }
  }
  .de_service_content {
    padding: 5px 20px 15px 20px;
    display: inline-block;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    img {
      width: 100%;
    }
  }
  .deintroducetitle {
    background: #f1f1f1;
    border-radius: 4px;
    margin: 50px 20px;
    padding: 8px;
    font-size: 10px;
    color: #999;
    line-height: 18px;
  }
  .banner {
    width: 100%;
    margin-top: 45px;
    img {
      width: 100%;
    }
    .content {
      padding: 20px 20px 0 20px;
      .ttle {
        padding: 16px 0;
        .left {
          width: 75%;
          float: left !important;
          .p1 {
            font-size: 14px;
            color: #333;
            line-height: 14px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .p2 {
            font-size: 12px;
            color: #999;
            line-height: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right {
          height: 36px;
          padding-left: 15px;
          padding-right: 6px;
          float: right !important;
          border-left: 1px solid #ddd;
          display: block;
          img {
            width: 36px;
            height: 36px;
          }
        }
      }
    }
  }
  .van-cell-group {
    margin-top: 50px;
  }
}
</style>