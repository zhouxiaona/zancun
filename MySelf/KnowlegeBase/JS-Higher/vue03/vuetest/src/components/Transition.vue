<template>
    <div>
      <!--<transition name="fade">-->
        <!--&lt;!&ndash;v-if也可以做过渡&ndash;&gt;-->
        <!--<div v-show="judge">我是要过渡的div</div>-->
      <!--</transition>-->
      <!--<button @click="judge=!judge">点击我切换div显示隐藏</button>-->


      <!--<hr>-->
      <!--组件的动态切换:模式切换mode切换（默认in-out）-->
      <!--<transition name="fade" mode="out-in">-->
        <!--<div :is="switchC?'component1':'component2'"></div>-->
      <!--</transition>-->
      <!--<button @click="switchC=!switchC">点击我切换组件</button>-->

      <!--<hr>-->
      <!--if/else 控制的切换-->
      <!--利用key解决缓存问题-->
      <!--<transition name="mymove" mode="out-in">-->
        <!--<div v-if="switchC" key="1">我是div1</div>-->
        <!--<div v-else key="2">我是div2</div>-->
      <!--</transition>-->

      <!--<hr>-->


      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        :css="false"
      >
        <div v-show="myjudge" class="mydiv" >我是div里的内容</div>
      </transition>
      <button @click="myjudge=!myjudge" class="mybtn">点击我切换</button>

    </div>
</template>

<script>
  import component1 from './component1'
  import component2 from './component2'

    export default {
        name: "",
        data:function(){
            return {
              judge:true,
              switchC:true,
              myjudge:true
            }
        },
        methods:{
          beforeEnter:function(el){
            console.log(el);
            $(el).css({left:0,opacity:0});
          },
          enter:function(el,done){
            $(el).animate({left:380,opacity:1},done);
            //必须要执行的函数
            // done();
          },
          leave:function(el,done){
            $(el).animate({left:800,opacity:0},done);
            // done();
          }

        },
        components:{
            component1,
            component2
        }
    }
</script>

<style scoped>
  .fade-enter-active,.fade-leave-active{
    transition:all 1s;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }

  .mymove-enter-active,.mymove-leave-active{
    transition:all 1s;
  }
  .mymove-enter{
    transform:translateY(-500px);
  }
  .mymove-leave-to{
    transform:translateY(500px);
  }
  .mydiv{
    position: absolute;
    left:380px;
  }
  .mybtn{
    margin-top: 30px;
  }
</style>
