import axios from 'axios'
import Swal from 'sweetalert2'

// 變數設為 api 位置
const baseURL = 'http://localhost:3000/api'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 取出 token
    const token = localStorage.getItem('token')
    // 如果 token 存在，則寫入 header 設定
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
