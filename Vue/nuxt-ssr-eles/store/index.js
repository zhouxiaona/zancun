import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import data from './modules/data'
Vue.use(Vuex)

const store = ()=>{
  return new Vuex.Store({
    modules:{
      data,
    },
    getters,
  }) 
}

export default store
