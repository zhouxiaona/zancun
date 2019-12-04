import api from '../config/config'
import axios from 'axios'
const APIUtils = {
  base:api.apiBaseUrl,

  /**
   * 公用get请求
   * @param url
   * @returns {Promise.<TResult>}
   */
  commonGet: (url, params)=>{
    let time = new Date().getTime()
    return axios({
      url: APIUtils.base+url,
      responseType: 'json',
      params:params,
      timeout: 6000,
    }).then(res => {
      let time1 = new Date().getTime()
      console.log(url+params+'接口耗时======='+(time1-time)/1000+'秒')
      return res
    }).catch( error =>{
      console.log(error,'=====error======')
    })
  },

  /**
   * 公用post请求
   * @param url
   * @returns {Promise.<TResult>}
   */
  commonPost:(url, params)=>{
    let time = new Date().getTime()
    if(Object.prototype.toString.call(params) !== '[object Object]'){
      params = {}
    }
    return axios({
      url: APIUtils.base+url,
      method: 'post',
      data: params,
      timeout: 6000,
      responseType: 'json',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }]
    }).then(res => {
      let time1 = new Date().getTime()
      console.log(url+'接口耗时======='+(time1-time)/1000+'秒')
      return res
    }).catch( error => {
      console.log(error,'====error=====')
    })
  },

  jsonGet: (url, params) => {
    let time = new Date().getTime()
    var reqStr = '';
    for( i in params ){
      reqStr += params[i]+'/';
    }
    reqStr = reqStr.slice(0,reqStr.length-1)
    return axios({
      url: APIUtils.base+url+'/'+reqStr,
      responseType: 'json',
      timeout: 6000,
    }).then(res => {
      let time1 = new Date().getTime()
      console.log(url+params+'接口耗时======='+(time1-time)/1000+'秒')
      return res
    }).catch( error =>{
      console.log(error,'=====error======')
    })
  },
}
export default APIUtils