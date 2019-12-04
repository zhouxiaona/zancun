<template>
    <div>
      <img src="./alpaca.jpg" alt="" class="imgs">
      <p>我是一只羊驼</p>
      <button @click="minusNums">点击我减减</button>
    </div>
</template>

<script>
    export default {
        name: "alpaca",
        methods:{
          minusNums:function(){
            this.$store.dispatch("minusAction",1);
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
