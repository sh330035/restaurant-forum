import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // Vuex 的 data
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  // 用來修改 state 的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      console.log('setCurrentUser')
      state.currentUser = {
        ...state.currentUser,
        // 透過api取得的 current user
        ...currentUser
      }
      state.isAuthenticated = true
      // 儲存token至state中
      state.token = localStorage.getItem('token')
    },
    // 登出功能 清空、認證改回 false、移除 token
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      // 清除token
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  // 透過 Api 請求資料
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        console.log('fetchCurrentUser')
        const { data } = await usersAPI.getCurrentUser()

        if (data.status == 'error') {
          throw new Error(data.message)
        }

        // 把資料寫回 state 使用 commit
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        return true
      } catch (error) {
        console.log(error)
        console.error("can't fetch user information")
        // 驗證失敗，執行登出
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})
