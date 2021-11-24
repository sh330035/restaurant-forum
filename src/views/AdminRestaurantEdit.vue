// ./src/views/AdminRestaurantEdit.vue
<template>
  <div class="container py-5">
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
    <hr />
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      },
      isProcessing: false,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurantData(id);
  },
  beforeRouteUpdate(to, next) {
    const { id } = to.params;
    this.fetchRestaurantData(id);
    next();
  },
  methods: {
    async fetchRestaurantData(restaurantId) {
      try {
        console.log("fetchRestaurant id:", restaurantId);
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });

        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        this.restaurant = {
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 自動跳回CMS首頁
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法送出資料，請稍後再試",
        });
      }
    },
  },
};
</script>