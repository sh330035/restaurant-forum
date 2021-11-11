// ./src/views/AdminRestaurantNew.vue
<template>
  <div class="container py-5">
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
    <hr />
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      // 展開來傳
      for (let [name, value] of formData.entries()) {
        console.log(name + "： " + value);
      }
      // 自動跳回CMS首頁
      this.$router.push({ name: "admin-restaurants" });
    },
  },
};
</script>