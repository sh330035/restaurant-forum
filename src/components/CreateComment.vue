// ./src/components/CreateComment.vue
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      // 向伺服器發送POST請求
      // 伺服器新增comment後

      this.$emit("after-create-comment", {
        // commentId: uuidv4(), //暫時使用uuid，連結伺服器後再更改
        restaurantId: this.restaurantId,
        text: this.text,
      });

      this.text = "";
    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>