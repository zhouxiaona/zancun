<template>
    <div class="star_wrap">
      <img 
        v-for="(v,k) in starArr"
        v-bind:key="k" 
        :src="v" 
        :style="styles"
      />
    </div>
</template>

<script>
  export default {
    name: "star",
    props:{
      score: {
        type: Number,
        default: 0,
      },
      styles: {
        type: String,
        default: ''
      }
    },
    computed:{
      starArr(){
        var arr = [];
        var num = parseInt(this.score);
        for(var i = 0; i < num; i++){
          arr.push(require("@/assets/img/star48_on@2x.png"));
        }
        if(this.score - num >= 0.5){
          arr.push(require("@/assets/img/star48_half@2x.png"));
        }
        while(arr.length < 5){
          arr.push(require("@/assets/img/star48_off@2x.png"));
        }
        return arr;
      }
    },
  }
</script>

<style lang="less" scoped>
.star_wrap{
  display: flex;
  align-items: center;
  img{
    width: 40px;
    height: 38px;
    margin-right: 5px;
  }
}
</style>
