// ./src/views/AdminRestaurantEdit.vue
<template>
  <div class="container py-5">
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
    <hr />
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
const dummyData = {
  restaurant: {
    id: 2,
    name: "Mrs. Mckenzie Johnston",
    tel: "567-714-6131 x621",
    address: "61371 Rosalinda Knoll",
    opening_hours: "08:00",
    description:
      "Quia pariatur perferendis architecto tenetur omnis pariatur tempore.",
    image: "https://loremflickr.com/320/240/food,dessert,restaurant/?random=2",
    createdAt: "2019-06-22T09:00:43.000Z",
    updatedAt: "2019-06-22T09:00:43.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
  },
};

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
    };
  },
  methods: {
    fetchRestaurantData(restaurantID) {
      console.log("fetchRestaurant id:", restaurantID);
      const { restaurant } = dummyData;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        CategoryId: categoryId,
      } = restaurant;
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
    },
    handleAfterSubmit(formData, restaurantID) {
      // 展開來傳
      for (let [name, value] of formData.entries()) {
        console.log(name + "： " + value);
      }
      // 自動跳回CMS首頁
      this.$router.push({ name: "admin-restaurant", id: restaurantID });
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurantData(id);
  },
};
</script>