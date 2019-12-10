import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import layer from 'layui-layer'
import $ from 'jquery'
require('./mock');
Vue.use(VueAxios,axios);
import {
 cell,
  Popup ,
  Tab, 
  Tabs,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  CountDown,
  Icon,
  Row,
  Col,
  TreeSelect,
  List,
  Field,
  CellGroup,
  Loading,
  Card,button,Toast,AddressList,AddressEdit,Area,
  PullRefresh,
  Checkbox,
  CheckboxGroup,
  NavBar,
  SubmitBar,
  Stepper,
  Uploader
} from 'vant';
Vue.use(Tabbar).use(CellGroup).use(Loading).use(Card).use(button).use(Toast).use(AddressList).use(AddressEdit).use(Area).use(Checkbox).use(CheckboxGroup)
.use(PullRefresh).use(NavBar ).use(Stepper)
.use(List).use(Field).use(SubmitBar)
  .use(TabbarItem).use(Uploader)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(CountDown)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(TreeSelect)
.use(Tab)
.use(Tabs)
.use(Popup)
.use(cell)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
