// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入vue-router(路由管理)
import Vrouter from 'vue-router';
Vue.use(Vrouter);

//引入vuex
import Vuex from 'vuex';
Vue.use(Vuex);


//=====vue-lazy-load
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload);


//定义一个商品模型
var cart={
  state:{
    goodsNum:0
  },
  getters:{
    getnum:function(state){
      return state.goodsNum;
    }
  },
  //同步
  mutations:{
    //只能有同步操作
    addNum:function(state,num){
      state.goodsNum+=num;
    },
    minusNum:function(state,num){
      state.goodsNum-=num;
    }
  },
  //异步
  actions:{
    //接受一些异步操作
    addAction:function(context,num){
      context.commit("addNum",num);
    },
    minusAction:function(context,num){
      context.commit("minusNum",num);
    }
  }
};
var store=new Vuex.Store({
  modules:{
    cart:cart
    // users:users
  }
});

import Dog from '@/components/Dog'
import Cat from '@/components/Cat'
import Alpaca from '@/components/Alpaca'
import Son from '@/components/Son'
import Son1 from '@/components/Son1'

var router=new Vrouter({
    mode:"history",
    linkActiveClass:"active",
    routes:[
      //地址重定向
      {
        path:"/",
        redirect:"/cat"
      },
      {
        name:"mydog",
        path:"/dog",
        component:Dog,
        children:[
          {
            path:'son',
            component:Son
          },
          {
            path:'son1',
            component:Son1
          }
        ]
      },
      {
        name:"mycat",
        path:"/cat",
        component:Cat,
        //另一个访问名字，同样可以达到访问的效果，不区分大小写
        alias:"/cats"
      },
      {
        name:"myalpaca",
        path:"/alpaca",
        component:Alpaca
      }
    ]
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
