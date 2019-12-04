<template>
  <div class="cont_header">
    <!--头部内容-->
    <div class="window">
      <img class="windowImg" :src="sellerData['avatar']" alt="">
      <header>
        <div class="header_top">
          <img class="header_left" src="@/assets/img/bg01.png"/>
          <div class="header_right">
            <h1><img src="@/assets/img/brand@2x.png" alt="pinpai"/>{{sellerData['name']}}</h1>
            <div class="desc">{{sellerData['description']}}</div>
            <div class="activity">
              <div class="activity_left">
                <img class="decr" src="@/assets/img/decrease_1@2x.png"/>
                <div class="decr_txt">{{sellerData['supports'][0]['description']}}</div>
              </div>
              <div class="acyivity_right">{{sellerData['supports'].length}}&nbsp;></div>
            </div>
          </div>
        </div>
        <div class="header_bottom" @click="showFloat">
          <img class="notice" src="@/assets/img/bulletin@2x.png"/>
          <div class="notice_txt">{{sellerData.bulletin}}</div>
          <div class="more">></div>
        </div>
      </header>
    </div>
    <!--遮罩层浮动-->
    <transition name="fade" mode="out-in">
      <div class="float_class" v-show="isFloatShow">
        <div class="mask">
          <div id="content">
            <h1>{{sellerData['name']}}</h1>
            <div class="stars">
              <!--星星组件-->
              <Star :score="sellerData['score']"></Star>
            </div>
            <div class="activity">
              <h2 class="top">优惠信息</h2>
              <div class="youhui">
                <div v-for="(v,k) in sellerData['supports']" v-bind:key="k" class="youhui_item">
                  <img class="sign" src="@/assets/img/discount_1@2x.png" v-show="k===0"/>
                  <img class="sign" src="@/assets/img/special_1@2x.png" v-show="k===1"/>
                  <img class="sign" src="@/assets/img/decrease_1@2x.png" v-show="k===2"/>
                  <img class="sign" src="@/assets/img/guarantee_1@2x.png" v-show="k===3"/>
                  <img class="sign" src="@/assets/img/invoice_1@2x.png" v-show="k===4"/>
                  <span class="yh_text">{{v.description}}</span>
                </div>
              </div>
            </div>
            <div class="activity">
              <h2 class="top">商家公告</h2>
              <p>{{sellerData['bulletin']}}</p>
            </div>
          </div>
        </div>
        <div class="cancel" @click="closeFloat">x</div>
      </div>
    </transition>
    <!-- 路由匹配 -->
    <div class="navBarWrap">
      <div
        class="navBar"
        v-for="(item ,index) in navList"
        v-bind:key="index"
        @click="gotoOther(item.navPath, index)"
        :class="activeBarIndex == index ?'activeBar':'' "
      >{{item.navText}}</div>
    </div>
  </div>
</template>

<script>
  import Star from '@/components/star/index'
  export default {
    name: "headerDefine",
    props: {
      sellerData:{
        type: Object,
        default: ()=>{}
      }
    },
    data(){
      return {
        isFloatShow: false,
        activeBarIndex: 0,
        navList:[
          {
            navText:'商品',
            navPath:'goods'
          },
          {
            navText:'评价',
            navPath:'ratings'
          },
          {
            navText:'商家',
            navPath:'seller'
          },
          {
            navText:'其他',
            navPath:'other'
          },
        ],
      }
    },
    components: {
      Star
    },
    computed: {
      
    },
    methods: {
      gotoOther(path, index){
        this.activeBarIndex = index
        this.$router.push(path);
      },
      showFloat(){
        this.isFloatShow = true
      },
      closeFloat(){
        this.isFloatShow = false
      }
    },
    mounted() {
      console.log(this.sellerData,'--sellerData--')
      // console.log(this.$route,'--$route--')
      // this.navList.map((item,index)=>{
      //   // console.log(index,'--index--')
      //   if(item.navPath === this.$route.name){
      //     this.activeBarIndex = index
      //   }
      // })
    }
  }
</script>

<style lang="less" scoped>
.cont_header{
  width: 100vw;
  position: fixed;
  top: 0;
  overflow: hidden;
  .window{
    width: 100%;
    position: relative;
    .windowImg{
      width: 100%;
      filter: blur(10px);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    header{
      width: 100%;
      background: rgba(7,17,27,0.6);
      .header_top{
        height: 128px;
        padding: 40px;
        display: flex;
        align-items: center;
        .header_left{
          width: 128px;
          height: 128px;
          border-radius: 10px;
          margin-right: 42px;
        }
        .header_right{ 
          height: 128px;
          h1{
            font-size: 30px;
            color: #fff;
            img{
              width: 60px;
              height: 36px;
              vertical-align: middle;
              margin-right: 16px;
              border-radius: 5px;
            }
          }
          .desc{
            color: #fff;
            font-size: 25px;
            margin: 10px 0;
          }
          .activity{
            width: 480px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .activity_left{
              display: flex;
              align-items: center;
              .decr{
                width: 32px;
                height: 32px;
                margin-right: 10px;
              }
              .decr_txt{
                color: #fff;
                font-size: 23px;
              }
            }
            .acyivity_right{
              font-size: 23px;
              color: #fff;
              padding: 10px 20px;
              border-radius: 20px;
              background: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      .header_bottom{
        background: rgba(7, 17, 27, 0.2);
        height: 60px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        .notice{
          width: 44px;
          height: 24px;
          margin-right: 10px;
        }
        .notice_txt{
          width: 86%;
          color: #fff;
          font-size: 23px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .more{
          color: #fff;
          font-size: 23px;
          margin-left: 10px;
        }
      }
    }
  }
  /*遮罩层*/
  .float_class{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(7,17,27,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    .mask{
      padding: 170px 104px 85px;
      h1{
        font-size: 40px;
        text-align: center;
        color: #fff;
      }
      .stars{
        width: 70%;
        overflow: hidden;
        text-align: center;
        margin: 20px auto;
      }
      .activity{ 
        margin: 64px 0;
        h2{
          color: #fff;
          font-size: 35px;
          text-align: center;
          position: relative;
          margin-bottom: 64px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &::after,&::before{
            display: block;
            content: '';
            width: 150px;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
          }
        }
        .youhui {
          .youhui_item{
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .sign{
              width: 30px;
              height: 30px;
              border-radius: 5px;
              margin-right: 20px;
            }
            .yh_text{
              color:#fff;
              font-size: 28px;
            }
          }
        }
        p{
          color: #fff;
          text-indent: 2em;
          font-size: 28px;
          line-height: 64px;
        }
      }
    }
    .cancel{
      font-size: 90px;
      color: rgba(255, 255, 255, 0.5);
      text-align: center;
    }
  }
  .navBarWrap{
    width: 100vw;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    .navBar{
      width: 33.3%;
      height: 100%;
      text-align: center;
      line-height: 90px;
      font-size: 30px;
      color: rgb(77, 85, 93);
    }
    .activeBar{
      color: rgb(240, 20, 20);
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
