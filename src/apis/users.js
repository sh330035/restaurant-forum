import { apiHelper } from './../utils/helpers'
// 取出 token
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({ restaurantID }) {
    return apiHelper.post(`/favorite/${restaurantID}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantID }) {
    return apiHelper.delete(`/favorite/${restaurantID}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantID }) {
    return apiHelper.post(`/like/${restaurantID}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike({ restaurantID }) {
    return apiHelper.delete(`/like/${restaurantID}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
