import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import My from '../views/My';
import Search from '../views/Search/Search';
import List from '../views/List/List';
import Login from '../views/Member/Login';
import Lisety from '../views/List/Lisety';
import Register from '../views/Member/Register';
import setting from '../views/Member/setting';
import Details from '../views/Details/Details';
import Detailsall from '../views/Details/Detailsall';
import ShoppingCart from '@/pages/ShoppingCart'
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "/home",
    component: Home,
  
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue")
  },
  { path: '/My',  name: "my", component: My,meta:{
		showTab:true 
	}
 },
  { path: '/search', component: Search,},
  { path: '/list', component: List,},
  { path: '/login',name:"login", component: Login,},
  { path: '/register', component: Register,},
  { path: '/lisety', component: Lisety,},
  { path: '/setting', name:"setting", component: setting,},
  { path: '/details/:id', component: Details,},
  { path: '/detailsall', component: Detailsall,},
  {  path:'/ShoppingCart', component:ShoppingCart,},
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next)=>{
  if(to.path.startsWith('/Home')||to.path.startsWith('/search')||to.path.startsWith('/list')||to.path.startsWith('/lisety')||to.path.startsWith('/login')||to.path.startsWith('/details')||to.path.startsWith('/register')||to.path.startsWith('/login')||to.path.startsWith('/setting')){
    setTimeout(function () {
      let tab=document.getElementsByClassName('van-tabbar')[0]
      tab.style.display='none'
    },100)
    next()
  }else{
    setTimeout(function () {
      let tab=document.getElementsByClassName('van-tabbar')[0]
      tab.style.display=''

    },100)
    next()
  }
})
export default router;


