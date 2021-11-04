// ./src/views/Restaurants.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      首頁 - 餐廳列表
    </h1>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

export default {
  components:{
    NavTabs
  }
}
</script>