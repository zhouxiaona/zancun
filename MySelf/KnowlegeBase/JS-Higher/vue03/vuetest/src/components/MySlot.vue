<template>
    <div>
      <h1>我是slot组件</h1>
      <slot name="header">默认的header内容</slot>
      <!--当没有传递内容时，会默认显示slot标签内的内容-->
      <slot>我是默认显示的内容</slot>
      <slot name="footer">默认的footer内容</slot>
    </div>
</template>

<script>
    export default {
        name: "my-slot"
    }
</script>

<style scoped>

</style>
