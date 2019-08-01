import Axios from 'axios'
import { Message,Loading } from 'element-ui';
// import Qs from 'qs'
// import App from 'common/app'
// let host = '//merchant.octinn.com/api'
let host = '//localhost:5000'

var loadingInstance,isShowLading

Axios.defaults.baseURL = host
Axios.defaults.timeout = 10000
Axios.defaults.withCredentials = false
Axios.defaults.params = {}
Axios.defaults.validateStatus = () => true


Axios.setTok = tok => {
  Axios.defaults.headers.common['Authorization'] = tok
}
Axios.getHeaderToken = () => {
  return Axios.defaults.headers.common['Authorization']
}

// 添加请求拦截器
Axios.interceptors.request.use(config => {
  isShowLading = true
  if (config.params.hideLoading) {
    isShowLading = false
    delete config.params.hideLoading
  } else {
    loadingInstance = Loading.service({text:"拼命加载中"});
  }
  return config
}, error => Promise.reject(error))

// 添加响应拦截器
Axios.interceptors.response.use(response => {
  // var status = parseInt(response.status)
  // if(status >= 200 && status < 300 || status === 304){
  //   return response.data
  // }else {
  //   Message({
  //       showClose: true,
  //       message: response.data.message,
  //       type: 'error'
  //   })
  // }
  if(isShowLading){
    loadingInstance.close()
  }
  return response.data
}, error => {
  if(isShowLading){
    loadingInstance.close()
  }
  return Promise.reject(error)
})

export default Axios
