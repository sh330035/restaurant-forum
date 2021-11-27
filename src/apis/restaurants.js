import { apiHelper } from './../utils/helpers'

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get(`/restaurants/feeds`)
  },
  getTopRestaurants() {
    return apiHelper.get(`/restaurants/top`)
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  comments: {
    createComment({ comment }) {
      return apiHelper.post('/comments', { ...comment })
    },
    deleteComment({ commentId }) {
      return apiHelper.delete(`/comments/${commentId}`)
    }
  }
}
