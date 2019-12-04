<template>
    <div>
      <img src="./dog.jpeg" alt="" class="imgs">
      <p>这是狗,颜色是{{$route.params.color}}</p>
      <button @click="getParams">点击我获取地址栏参数</button>

      <!--显示son,son1组件,是dog组件的子组件-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "dog",
        methods: {
          getParams:function(){
            console.log(this.$route);
            console.log(this.$route.params.color);
          }
        }
    }
</script>

<style scoped>
  .imgs{
    width:100px;
    height:100px;
  }
</style>
