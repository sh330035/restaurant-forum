import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('get_current_user')
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update({ userId, formData }) {
    console.log('users Update')
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFavorite({ restaurantID }) {
    return apiHelper.post(`/favorite/${restaurantID}`, null)
  },
  deleteFavorite({ restaurantID }) {
    return apiHelper.delete(`/favorite/${restaurantID}`)
  },
  addLike({ restaurantID }) {
    return apiHelper.post(`/like/${restaurantID}`, null)
  },
  deleteLike({ restaurantID }) {
    return apiHelper.delete(`/like/${restaurantID}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
