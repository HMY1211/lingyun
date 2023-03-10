import axios from 'axios'

const requests = axios.create({
  // 设置基础路径;
  // baseURL: 'http://localhost:12138',
  baseURL: 'http://www.lingyunstar.top:12138',

  // 设置请求头;
  headers: {
    'Content-Type': 'application/json'
  },
  // 设置请求方式;
  method: '',
  // 设置请求参数;
  params: {},
  // 设置请求数据;
  data: {},
  // 设置超时时间;
  timeout: 5000,
  // 设置是否携带凭证;
  // withCredentials: true,
  // 设置返回数据类型;
  responseType: 'json'
})
// 添加请求拦截器
requests.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
// 添加响应拦截器
requests.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default requests
