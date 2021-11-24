// ./src/views/AdminRestaurantNew.vue
<template>
  <div class="container py-5">
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
    <hr />
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.create({ formData });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 自動跳回CMS首頁
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>