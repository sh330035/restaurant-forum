import { apiHelper } from './../utils/helpers'
// 取出 token
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  comments: {
    createComment({ commentText }) {
      return apiHelper.post(
        '/comments',
        { commentText },
        {
          headers: { Authorization: `Bearer ${getToken()}` }
        }
      )
    },
    deleteComment({ commentId }) {
      return apiHelper.delete(`/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}
