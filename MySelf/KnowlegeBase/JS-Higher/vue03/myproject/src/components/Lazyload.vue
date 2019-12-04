<template>
    <div>
      <ul id="container">
        <li v-for="(v,k) in list">
          <img v-lazy="v">
        </li>
      </ul>
    </div>
</template>

<script>
  import Img from '../assets/logo.png'
    export default {
        name: "lazyload",
        data:function(){
          return {
            list:[
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img,
              Img
            ]
          }
        }
    }
</script>

<style scoped>

</style>
