import axios from 'axios'
import Swal from 'sweetalert2'

// 變數設為 api 位置
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
  // 物件名稱與變數相同，可省略
  baseURL
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
