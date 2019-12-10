<template>
  <div>
    <van-search placeholder="通过品牌、系列、型号搜索您喜爱的表款" />
    <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <div class="pad">
          <van-row v-if="activeIndex === 0">
            <van-col span="24">
              <van-image v-if="activeIndex === 0" src="/static/img/11.jpg" />
            </van-col>
          </van-row>
          <p class="menu__item--title" v-if="activeIndex === 0">猜你喜欢</p>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <router-link to="/list">
                <van-image src="/static/img/process.png" />
                <p class="col-p">机械表</p>
              </router-link>
            </van-col>

            <van-col span="8">     
                  <router-link to="/lisety">      
              <van-image src="/static/img/process2.png" />
              <p class="col-p">石英表</p>  
                  </router-link>   
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process3.png" />
              <p class="col-p">钢带手表</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/process4.png" />
              <p class="col-p">商务休闲</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process5.png" />
              <p class="col-p">男表</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process6.png" />
              <p class="col-p">女表</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/process7.png" />
              <p class="col-p">认证二手</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process8.png" />
              <p class="col-p">高价回收</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process9.png" />
              <p class="col-p">限时拍卖</p>
            </van-col>
          </van-row>
          <div class="tliwe">
            <p class="menu__item--title" v-if="activeIndex === 0">国际馆</p>
          </div>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/process10.png" />
              <p class="col-p">瑞士表</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process11.png" />
              <p class="col-p">欧美表</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process12.png" />
              <p class="col-p">日系表</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/process13.png" />
              <p class="col-p">国产表</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process14.png" />
              <p class="col-p">德国表</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/process15.png" />
              <p class="col-p">法式表</p>
            </van-col>
          </van-row>

          <div class="tliwe">
            <p class="menu__item--title" v-if="activeIndex === 0">热门品牌</p>
          </div>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize.png" />
              <p class="col-p">劳力士</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize2.png" />
              <p class="col-p">赫柏林</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize3.png" />
              <p class="col-p">浪琴</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize4.png" />
              <p class="col-p">爱宝时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize5.png" />
              <p class="col-p">东方星</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize6.png" />
              <p class="col-p">欧米茄</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize7.png" />
              <p class="col-p">豪利时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize8.png" />
              <p class="col-p">库尔沃</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize9.png" />
              <p class="col-p">天梭</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize10.png" />
              <p class="col-p">迪沃斯</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize11.png" />
              <p class="col-p">柏高</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize12.png" />
              <p class="col-p">德国莫勒</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize13.png" />
              <p class="col-p">美度</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize14.png" />
              <p class="col-p">卡洛夫</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize15.png" />
              <p class="col-p">梅花</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 0">
            <van-col span="8">
              <van-image src="/static/img/resize16.png" />
              <p class="col-p">泰格豪雅</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize17.png" />
              <p class="col-p">驰客</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/resize18.png" />
              <p class="col-p">世纪</p>
            </van-col>
          </van-row>
        </div>
        <div class="pad">
          <van-row v-if="activeIndex === 1">
            <van-col span="24">
              <van-image v-if="activeIndex === 1" src="/static/img/12.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image.jpg" />
              <p class="col-p">江诗丹顿</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image2.jpg" />
              <p class="col-p">宝玑</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image3.jpg" />
              <p class="col-p">积家</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image4.jpg" />
              <p class="col-p">爱彼</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image5.jpg" />
              <p class="col-p">宝珀</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image6.jpg" />
              <p class="col-p">伯爵</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image7.jpg" />
              <p class="col-p">百达翡丽</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image8.jpg" />
              <p class="col-p">朗格</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image9.jpg" />
              <p class="col-p">格拉苏蒂∙原创</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image10.jpg" />
              <p class="col-p">宇舶</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image11.jpg" />
              <p class="col-p">芝柏</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image12.jpg" />
              <p class="col-p">法穆兰</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image13.jpg" />
              <p class="col-p">雅典</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image14.jpg" />
              <p class="col-p">豪朗时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image15.jpg" />
              <p class="col-p">雅克德罗</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image16.jpg" />
              <p class="col-p">亨利慕时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image17.jpg" />
              <p class="col-p">播威</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image18.jpg" />
              <p class="col-p">罗杰杜彼</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 1">
            <van-col span="8">
              <van-image src="/static/img/image19.jpg" />
              <p class="col-p">帕玛强尼</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 2">
            <van-col span="24">
              <van-image v-if="activeIndex === 2" src="/static/img/13.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image.jpg" />
              <p class="col-p">江诗丹顿</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image2.jpg" />
              <p class="col-p">宝玑</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image3.jpg" />
              <p class="col-p">积家</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image4.jpg" />
              <p class="col-p">爱彼</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image5.jpg" />
              <p class="col-p">宝珀</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image6.jpg" />
              <p class="col-p">伯爵</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image7.jpg" />
              <p class="col-p">百达翡丽</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image8.jpg" />
              <p class="col-p">朗格</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image9.jpg" />
              <p class="col-p">格拉苏蒂∙原创</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image10.jpg" />
              <p class="col-p">宇舶</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image11.jpg" />
              <p class="col-p">芝柏</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image12.jpg" />
              <p class="col-p">法穆兰</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image13.jpg" />
              <p class="col-p">雅典</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image14.jpg" />
              <p class="col-p">豪朗时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image15.jpg" />
              <p class="col-p">雅克德罗</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image16.jpg" />
              <p class="col-p">亨利慕时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image17.jpg" />
              <p class="col-p">播威</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image18.jpg" />
              <p class="col-p">罗杰杜彼</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 2">
            <van-col span="8">
              <van-image src="/static/img/image19.jpg" />
              <p class="col-p">帕玛强尼</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 3">
            <van-col span="24">
              <van-image v-if="activeIndex === 3" src="/static/img/14.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image.jpg" />
              <p class="col-p">江诗丹顿</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image2.jpg" />
              <p class="col-p">宝玑</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image3.jpg" />
              <p class="col-p">积家</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image4.jpg" />
              <p class="col-p">爱彼</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image5.jpg" />
              <p class="col-p">宝珀</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image6.jpg" />
              <p class="col-p">伯爵</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image7.jpg" />
              <p class="col-p">百达翡丽</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image8.jpg" />
              <p class="col-p">朗格</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image9.jpg" />
              <p class="col-p">格拉苏蒂∙原创</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image10.jpg" />
              <p class="col-p">宇舶</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image11.jpg" />
              <p class="col-p">芝柏</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image12.jpg" />
              <p class="col-p">法穆兰</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image13.jpg" />
              <p class="col-p">雅典</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image14.jpg" />
              <p class="col-p">豪朗时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image15.jpg" />
              <p class="col-p">雅克德罗</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image16.jpg" />
              <p class="col-p">亨利慕时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image17.jpg" />
              <p class="col-p">播威</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image18.jpg" />
              <p class="col-p">罗杰杜彼</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 3">
            <van-col span="8">
              <van-image src="/static/img/image19.jpg" />
              <p class="col-p">帕玛强尼</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 4">
            <van-col span="24">
              <van-image v-if="activeIndex === 4" src="/static/img/15.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image.jpg" />
              <p class="col-p">江诗丹顿</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image2.jpg" />
              <p class="col-p">宝玑</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image3.jpg" />
              <p class="col-p">积家</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image4.jpg" />
              <p class="col-p">爱彼</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image5.jpg" />
              <p class="col-p">宝珀</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image6.jpg" />
              <p class="col-p">伯爵</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image7.jpg" />
              <p class="col-p">百达翡丽</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image8.jpg" />
              <p class="col-p">朗格</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image9.jpg" />
              <p class="col-p">格拉苏蒂∙原创</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image10.jpg" />
              <p class="col-p">宇舶</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image11.jpg" />
              <p class="col-p">芝柏</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image12.jpg" />
              <p class="col-p">法穆兰</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image13.jpg" />
              <p class="col-p">雅典</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image14.jpg" />
              <p class="col-p">豪朗时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image15.jpg" />
              <p class="col-p">雅克德罗</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image16.jpg" />
              <p class="col-p">亨利慕时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image17.jpg" />
              <p class="col-p">播威</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image18.jpg" />
              <p class="col-p">罗杰杜彼</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 4">
            <van-col span="8">
              <van-image src="/static/img/image19.jpg" />
              <p class="col-p">帕玛强尼</p>
            </van-col>
          </van-row>
        </div>
        <div class="pad">
          <van-row v-if="activeIndex === 5">
            <van-col span="24">
              <van-image v-if="activeIndex === 5" src="/static/img/16.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image.jpg" />
              <p class="col-p">江诗丹顿</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image2.jpg" />
              <p class="col-p">宝玑</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image3.jpg" />
              <p class="col-p">积家</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image4.jpg" />
              <p class="col-p">爱彼</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image5.jpg" />
              <p class="col-p">宝珀</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image6.jpg" />
              <p class="col-p">伯爵</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image7.jpg" />
              <p class="col-p">百达翡丽</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image8.jpg" />
              <p class="col-p">朗格</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image9.jpg" />
              <p class="col-p">格拉苏蒂∙原创</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image10.jpg" />
              <p class="col-p">宇舶</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image11.jpg" />
              <p class="col-p">芝柏</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image12.jpg" />
              <p class="col-p">法穆兰</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image13.jpg" />
              <p class="col-p">雅典</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image14.jpg" />
              <p class="col-p">豪朗时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image15.jpg" />
              <p class="col-p">雅克德罗</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image16.jpg" />
              <p class="col-p">亨利慕时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image17.jpg" />
              <p class="col-p">播威</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/image18.jpg" />
              <p class="col-p">罗杰杜彼</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 5">
            <van-col span="8">
              <van-image src="/static/img/image19.jpg" />
              <p class="col-p">帕玛强尼</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 6">
            <van-col span="24">
              <van-image v-if="activeIndex === 6" src="/static/img/17.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 6">
            <van-col span="8">
              <van-image src="/static/img/Fiat.jpg" />
              <p class="col-p">飞亚达</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat2.jpg" />
              <p class="col-p">海鸥</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat3.jpg" />
              <p class="col-p">上海</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 6">
            <van-col span="8">
              <van-image src="/static/img/Fiat4.jpg" />
              <p class="col-p">唯路时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat5.jpg" />
              <p class="col-p">佳明</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat6.jpg" />
              <p class="col-p">廊桥表</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 6">
            <van-col span="8">
              <van-image src="/static/img/Fiat7.jpg" />
              <p class="col-p">华为</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat8.jpg" />
              <p class="col-p">颂拓</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat9.jpg" />
              <p class="col-p">孔雀</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 6">
            <van-col span="8">
              <van-image src="/static/img/Fiat10.jpg" />
              <p class="col-p">尖刀</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 7">
            <van-col span="24">
              <van-image v-if="activeIndex === 7" src="/static/img/18.jpg" />
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 7">
            <van-col span="8">
              <van-image src="/static/img/Fiat4.jpg" />
              <p class="col-p">唯路时</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat5.jpg" />
              <p class="col-p">佳明</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat6.jpg" />
              <p class="col-p">廊桥表</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 7">
            <van-col span="8">
              <van-image src="/static/img/Fiat7.jpg" />
              <p class="col-p">华为</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat8.jpg" />
              <p class="col-p">颂拓</p>
            </van-col>
            <van-col span="8">
              <van-image src="/static/img/Fiat9.jpg" />
              <p class="col-p">孔雀</p>
            </van-col>
          </van-row>

          <van-row type="flex" v-if="activeIndex === 7">
            <van-col span="8">
              <van-image src="/static/img/Fiat10.jpg" />
              <p class="col-p">尖刀</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row type="flex" v-if="activeIndex === 8">
            <van-col span="8">
              <van-image class="vanage" src="/static/img/1.png" />
              <p class="col-p">配件更换</p>
            </van-col>
            <van-col span="8">
              <van-image class="vanage" src="/static/img/2.png" />
              <p class="col-p">故障维修</p>
            </van-col>
            <van-col span="8">
              <van-image class="vanage" src="/static/img/3.png" />
              <p class="col-p">手表保养</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 8">
            <van-col span="8">
              <van-image class="vanage" src="/static/img/4.jpg" />
              <p class="col-p">电池服务</p>
            </van-col>
          </van-row>
        </div>

        <div class="pad">
          <van-row v-if="activeIndex === 9">
            <van-col span="24">
              <van-image v-if="activeIndex === 9" src="/static/img/19.jpg" />
            </van-col>
          </van-row>
          <p class="menu__item--title" v-if="activeIndex === 9">二手商城</p>
          <van-row type="flex" v-if="activeIndex === 9">
            <van-col span="8">
              <van-image class="vanage" src="/static/img/5.png" />
              <p class="col-p">限时竞拍</p>
            </van-col>
            <van-col span="8">
              <van-image class="vanage" src="/static/img/6.png" />
              <p class="col-p">名表回收</p>
            </van-col>
            <van-col span="8">
              <van-image class="vanage" src="/static/img/7.png" />
              <p class="col-p">权威鉴定</p>
            </van-col>
          </van-row>
          <van-row type="flex" v-if="activeIndex === 9">
            <van-col span="8">
              <van-image class="vanage" src="/static/img/8.png" />
              <p class="col-p">寻表求购</p>
            </van-col>
          </van-row>
        </div>
        <div class="timg"></div>
        <div class="timg"></div>
        <div class="timg"></div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "推荐" },
        { text: "顶级品牌" },
        { text: "奢华品牌" },
        { text: "高级品牌" },
        { text: "轻奢时尚" },
        { text: "年轻潮牌 " },
        { text: "国产智能" },
        { text: "表带" },
        { text: "维修保养" },
        { text: "二手商城" }
      ]
    };
  }
};
</script>
<style lang="scss">
.pad {
  display: block;
  padding-left: 20px;
  padding-right: 20px;
  .menu__item--title {
    // font-size: .32rem;
    line-height: 0.96rem;
    color: #999;
    text-align: center;
    margin-bottom: 0.213333rem;
    &:before {
      margin-right: 0.213333rem;
      display: inline-block;
      content: "";
      width: 0.533333rem;
      height: 1px;
      background: #999;
      vertical-align: middle;
      margin-bottom: 0.093333rem;
    }
    &:after {
      margin-left: 0.213333rem;
      display: inline-block;
      content: "";
      width: 0.533333rem;
      height: 1px;
      vertical-align: middle;
      background: #999;
      margin-bottom: 0.093333rem;
    }
  }
  .van-col {
    .col-p {
      font-size: 0.72rem;
      color: #666;
      padding-top: 0.346667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.tliwe {
  margin-top: 10px;
}
.van-tree-select {
  position: fixed;
  width: 100%;
  display: flex;
  font-size: 14px;
  user-select: none;
  .van-tree-select__nav {
    -webkit-box-flex: 1;
    flex: 1;
    overflow-y: auto;
    background-color: #fafafa;
    .van-sidebar-item__text {
      font-size: 14px;
    }
  }
  .van-tree-select__content {
    width: 100%;
    -webkit-box-flex: 2;
    flex: 2;
    overflow-y: auto;
    background-color: #fff;
  }
  .van-tree-select__nav-item {
    padding: 14px 12px 20px 8px;
  }
  .vanage {
    width: 60px;
    img {
      width: 100%;
    }
  }
}
.timg {
  padding-bottom: 50px;
}
</style>
