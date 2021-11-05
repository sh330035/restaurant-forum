// ./src/components/NewestRestaurants.vue
<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          <small>{{ restaurant.Category ? restaurant.Category.name : '尚未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props:{
    restaurants:{
      type: Array,
      required: true
    }
  },
  filters:{
    fromNow(datetime){
      if(!datetime){
        return '--'
      }
      return moment(datetime).fromNow()
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>