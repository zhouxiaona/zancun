<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld/>-->
    <!--<transition name="fade" mode="out-in">-->
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
    <!--</transition>-->

    <!--公共数量的控制-->
    <!--<p>商品数量{{totalNum}}</p>-->


    <!--无刷页面-->
    <!--<router-view></router-view>-->

    <!--<router-link to="dog/白色">dog</router-link>-->
    <!--<router-link to="../cat">cat</router-link>-->
    <!--<router-link to="../alpaca">alpaca</router-link>-->

  <!--tag指定标签为span,通过点击事件，把params==>（此单词不能更改）参数值Pink传入,在组件dog中可以获得-->
    <!--<router-link tag="span" :to="{name:'mydog',params:{color:'pink',fontSize:'15px'}}">dog</router-link>-->
    <!--<router-link tag="span" :to="{name:'mycat'}">cat</router-link>-->
    <!--<router-link tag="span" :to="{name:'myalpaca'}">alpaca</router-link>-->

    <!--呈现懒加载图片-->
    <Lazyload></Lazyload>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Dog from './components/Dog'

import Lazyload from './components/Lazyload'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Dog,
    Lazyload

  },
  //计算后属性：
  computed:{
    totalNum:function(){
      console.log(this.$store.getters.getnum);//方法一的结果
      console.log(this.$store.state.cart.goodsNum);//方法二的结果
      return this.$store.state.cart.goodsNum;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    background: red;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
