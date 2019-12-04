// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入axios模块
import Axios from 'axios';
Vue.prototype.$http=Axios;

Vue.config.productionTip = false;


//全局定义指令==>通过main.js文件
Vue.directive("mybackground",{
  inserted:function(el,bind){
      console.log(el,bind);
      el.style.background=bind.value;
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
