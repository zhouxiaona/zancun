<template>
    <div>
      <p>姓名：{{username}}</p>
      <p>肤色：{{color}}</p>
      <p>身高：{{height}}</p>
      <button @click="showprops">点击我查看props</button>
    </div>
</template>

<script>
    export default {
        name: "person",
        // props:['username','height','color'],
        props:{
          username:{type:String},
          height:{type:Number},
          color:{type:String}
        },
        methods:{
          showprops:function(){
            console.log(this.username,this.height,this.color);
          }
        }
    }
</script>

<style scoped>

</style>
