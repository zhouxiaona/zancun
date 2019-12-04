<template>
    <div>
      <img src="./cat.jpeg" alt="" class="imgs">
      <p>我是一只猫</p>
      <button @click="addNums">点击我加加</button>
    </div>
</template>

<script>
    export default {
        name: "cat",
        data:function(){
          return {
            num:1
          }
        },
        methods:{
          addNums:function(){
            this.$store.dispatch("addAction",this.num);
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
