<template>
  <div class="cont_footer">
    <footer
      :class="sums > 0 ? 'activeStyle' : ''"
    >
      <div 
        class="shopping_cart" 
        @click="isShowCart = !isShowCart" 
      >
        <img class="shopCart" src="@/assets/img/cart_gray.png" v-show="sums <= 0"/>
        <img class="shopCart" src="@/assets/img/cart_white.png" v-show="sums > 0"/>
      </div>
      <div class="sum">¥{{sums}}</div>
      <div class="remarks">另需配送费¥4元</div>
      <div class="footer_right">{{sums>20?"已结算￥"+sums:sums==20?'已结算￥'+sums:"还差￥"+(20-sums)+"起送"}}</div>
    </footer>
    <!--购物车-->
    <transition name="fade" mode="out-in">
      <div class="float-class" v-show="isShowCart">
        <div class="mask">
          <div class="shopping">
            <div class="top">
              <h3>购物车</h3>
              <div class="clearBtn" @click="clearAll">清空</div>
            </div>
            <div class="selects">
              <div v-for="(v,k) in newData" v-bind:key="k" class="selects_items">
                <div class="food_name">{{v.name}}</div>
                <div class="foods_info">
                  <div class="price"><i>¥</i>{{v.price}}</div>
                  <div class="num">
                    <img class="icon remove_circle" src="@/assets/img/remove_circle.png" @click="minusNum(v.key,v.keys)" />
                    <div class="count">{{v.count}}</div>
                    <img class="icon add_circle" src="@/assets/img/add_circle.png" @click="addNum(v.key,v.keys)"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: "footerDefine",
    data(){
      return {
        isShowCart: false,
        sums: 0,
      }
    },
    computed:{
      ...mapGetters([
        'goodsData',
      ]),
      newData(){
        let myArr = [];
        let sumss = 0;
        for(let i = 0; i < this.goodsData.length; i++){
          for(let j = 0; j < this.goodsData[i].foods.length; j++){
            if(this.goodsData[i].foods[j].count >= 1 && this.goodsData[i].foods[j].showBtn){
              this.goodsData[i].foods[j].key = i;
              this.goodsData[i].foods[j].keys = j;
              sumss += this.goodsData[i].foods[j].singleM;
              myArr.push(this.goodsData[i].foods[j]);
            }
          }
        }
        this.sums = sumss;
        return myArr;
      }
    },
    methods:{
      clearAll(){
        for(let i = 0; i < this.goodsData.length; i++) {
          for (let j = 0; j < this.goodsData[i].foods.length; j++) {
            this.goodsData[i].foods[j].showBtn = false;
            this.goodsData[i].foods[j].count = 0;
            this.goodsData[i].foods[j].singleM = 0;
          }
        }
        this.$store.dispatch('updateAction', {type:'UPDATE_STATE', stateType: 'goodsData', value: this.goodsData})
      },
      addNum(key, keys){
        let operateTool = [key, keys]
        this.$store.dispatch('updateAction', {type:'ADD', operateTool: operateTool})
        this.$emit("addFn",event.target);
      },
      minusNum(key, keys){
        let operateTool =[key, keys]
        this.$store.dispatch('updateAction', {type:'MINUS', operateTool: operateTool})
      }
    }
  }
</script>

<style lang="less" scoped>
.cont_footer{
  width: 100vw;
  footer{
    width: 100%;
    height: 115px;
    position: fixed;
    bottom: 0;
    background: #141d27;
    z-index: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shopping_cart{
      width: 95px;
      height: 95px;
      border-radius: 50%;
      border: 16px solid #141d27;
      background: #bfbfbf;
      position: relative;
      top: -20px;
      left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .shopCart{
        display: block;
        margin: auto;
      }  
    }
    .sum{
      color: rgba(255, 255, 255, 0.4);
      font-size: 40px;
      padding: 0 32px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    .remarks{
      font-size: 25px;
      color: rgba(255, 255, 255, 0.4);
      padding-left: 19px;
    }
    .footer_right{
      width: 250px;
      height: 115px;
      font-size: 25px;
      color: rgba(255, 255, 255, 0.4);
      text-align: center;
      line-height: 115px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .activeStyle{
    .shopping_cart{
      background: #00A0DC;
    }
    .sum{
      color: #fff;
    }
    .footer_right{
      background:rgb(0,160,220);
      color:#fff;
    }
  }
  // 购物车遮罩
  .float-class{
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(7,17,27,0.8);
    top: 0;
    left: 0;
    z-index: 10;
    .mask{
      width: 100%;
      height: 100%;
      background: rgba(7,17,27,0.4);
      position: relative;
      .shopping{
        width: 100%;
        position: absolute;
        bottom: 115px;
        left: 0;
        background: #fff;
        .top{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 40px;
          border-bottom: 2px solid rgba(7,17,27,0.1);
          background: #f3f5f7;
          h3{
            font-size: 28px;
            color: rgb(7,17,27);
          }
          .clearBtn{
            font-size: 28px;
            color: rgb(0,160,220);
          }
        }
        .selects {
          .selects_items{
            padding: 30px 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            .food_name{
              font-size: 28px;
              color: rgb(7,17,27);
            }
            .foods_info{
              display: flex;
              align-items: center;
              .price{
                font-size: 30px;
                color: rgb(240,20,20);
                margin-right: 32px;
                i{
                  font-size: 26px;
                  color: rgb(240,20,20);
                  margin-right: 10px;
                }
              }
              .num{
                display: flex;
                align-items: center;
                justify-content: center;
                .icon{
                  display: block;
                  margin: auto;
                  width: 45px;
                  height: 45px; 
                }
                .count{
                  margin: 0 25px;
                  font-size: 30px;
                  color: rgb(147,153,159);
                }
              }
            }
          }
        }
      }
    }
  }
}
  /*购物车的淡隐淡出动画*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
