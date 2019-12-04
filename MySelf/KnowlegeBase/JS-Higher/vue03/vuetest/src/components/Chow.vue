<template>
    <div>
      <div v-mybackground="'red'">我是测试v-background指令的</div>
      <button @click="sub">点击我向父级传递参数</button>
    </div>
</template>

<script>
    export default {
        name: "chow",
        data:function(){
          return {
            username:"周娜"
          }
        },
      methods:{
          sub:function(){
            this.$emit("myfn",this.username);
          }
      }
    }
</script>

<style scoped>


</style>
