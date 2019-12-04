<template>
  <div class="cont_cart">
    <img 
      class="minusIcon" 
      :class="goodsData[mykey].foods[mykeys].showBtn?'block':'none'"
      @click="minusNum"
      src="@/assets/img/remove_circle.png"
    />
    <div 
      class="count"  
      :class="goodsData[mykey].foods[mykeys].showBtn?'block':'none'"
    >
    {{goodsData[mykey].foods[mykeys].count}}
    </div>
    <img 
      class="addIcon" 
      @click="addNum"
      src="@/assets/img/add_circle.png"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: "addcart",
    props:{
      mykey: {
        type: Number,
        default: 0
      },
      mykeys:{
        type:Number,
        default:0
      },
      goodsData:{
        type: Array,
        default: []
      }
    },
    methods:{
      addNum(event){
        let operateTool = [this.mykey, this.mykeys]
        this.$store.dispatch('updateAction', {type:'ADD', operateTool: operateTool})
        this.$emit("addFn", event.target);
      },
      minusNum(){
        let operateTool =[this.mykey, this.mykeys]
        this.$store.dispatch('updateAction', {type:'MINUS', operateTool: operateTool})
      }
    }
  }
</script>

<style lang="less" scoped>
  .cont_cart{
    width: 130px;
    height: 38px;
    position: absolute;
    right: 0;
    bottom: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .minusIcon,.addIcon{
      width: 38px;
      height: 38px;
    }
    .count{
      font-family: fzzyjt;
      font-size: 24px;
    }
    .block{
      visibility: visible;
    }
    .none{
      visibility: hidden;
    }
  }
</style>
