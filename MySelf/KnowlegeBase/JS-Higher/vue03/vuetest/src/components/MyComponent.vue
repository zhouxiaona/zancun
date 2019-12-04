<template>
  <!--最外层需要一个容器-->
  <div>
    <!--单文件组件-->
    <div>我是div1</div>
    <div>我是div2</div>
    {{message}}
  </div>


</template>

<script>
    export default {
        name: "my-component",
        data:function(){
          return {
            message:"我的信息"
          }
        }
    }
</script>
<!--只在作用域内有效 只在此组件内有效-->
<style scoped>

</style>
