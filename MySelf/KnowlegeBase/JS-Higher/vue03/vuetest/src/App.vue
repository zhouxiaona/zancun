<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--单双标签都可以，区别为：双标签可以插入内容-->
    <!--<HelloWorld/>-->
    <!--<MyComponent/>-->

    <!--<Person-->
      <!--username="张三"-->
      <!--:height="178"-->
      <!--color="黄色"-->
    <!--&gt;</Person>-->
    <!--<Person-->
      <!--username="李四"-->
      <!--:height="180"-->
      <!--color="黑色"-->
    <!--&gt;</Person>-->

    <!--<my-slot>-->
      <!--&lt;!&ndash;具名插槽&ndash;&gt;-->
      <!--<p slot="header">我是头部</p>-->
      <!--<p slot="footer">我是底部</p>-->
      <!--<p>我是插槽里的内容</p>-->
    <!--</my-slot>-->

    <!--接收发送过来的事件和参数-->
    <!--<Emit @myfn="fn"></Emit>-->

    <!--<Transition></Transition>-->

    <!--<chow @myfn="fn"></chow>-->




    <!--自定义指令-->
    <!--来自main.js的全局定义指令-->
    <!--<div v-mybackground="'red'">我是自定义指令的测试div</div>-->

    <!--来自App.vue的局部定义指令-->
    <!--<div v-mystyle="{width:'100px',height:'100px',background:'blue'}">我是自定义mystyle指令的div</div>-->

    <!--<hr>-->
    <!--自定义指令自动聚焦，css无法实现，使用自定义指令-->
    <!--<input type="text" v-focus/>-->

    <!--<hr>-->
    <!--过滤器-->
    <!--<input type="text" v-model="mystr">{{mystr | myrevers | capital("hello","world")}}-->

    <hr>

  </div>
</template>

<script>
  //导入组件
import HelloWorld from './components/HelloWorld'
import MyComponent from '@/components/MyComponent'
import Person from '@/components/Person'
import MySlot from '@/components/MySlot'
import Emit from '@/components/Emit'
import Transition from '@/components/Transition'
import Chow from './components/Chow'




//先引入组件，再注册组件
export default {
  name: 'App',
  data:function(){
    return {
      str:"",
      mystr:"ab"
    }
  },
  //局部注册组件
  components: {
    HelloWorld,
    MyComponent,
    Person,
    MySlot,
    Emit,
    Transition,
    Chow
  },
  methods:{
    fn:function(mydata){
      console.log(mydata);
    }
  },
  mounted:function(){
    console.log(this.$http.get);
  },
  //自定义局部指令
  directives:{
    mystyle:{
      inserted:function(el,bind){
          var styles=bind.value;
          console.log(styles);
          var str="";
          for(var i in styles){
            str+=i+":"+styles[i]+";";
          }
          console.log(str);
          el.style=str;
      }
    },
    focus:{
      inserted:function(el){
        $(el).focus();
      }
    }
  },
//过滤器
  filters:{
    toUpper:function(value){
        return value.toUpperCase();
    },
    myrevers:function(value){
      return value.split("").reverse().join("");
    },
  //  首字母大写
    capital:function(value,str1,str2){
      console.log(str1,str2);
      return value[0].toUpperCase()+value.slice(1);
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
</style>
