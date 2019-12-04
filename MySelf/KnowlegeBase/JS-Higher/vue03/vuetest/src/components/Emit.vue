<template>
    <div>
      <h1>我是Emit组件</h1>
      <button @click="passDad">点击我向父级传递事件/参数</button>

    </div>
</template>

<script>
    export default {
        name: "emit",
        data:function(){
          return {
            message:"我是测试数据"
          }
        },
        methods:{
          passDad:function(){
            //传递事件==>第一个参数是要发射的事件名称，
            //       ==>第二个参数是要传递的数据
            this.$emit("myfn",this.message);
          }
        }
    }
</script>

<style scoped>

</style>
