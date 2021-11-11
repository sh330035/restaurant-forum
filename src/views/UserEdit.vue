<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model="user.name"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="user.image | emptyImage"
          v-if="user.image"
          class="d-block img-thumbnail mb-3"
          height="200"
          width="200"
          alt=""
        />
        <input
          id="image"
          type="file"
          @change="handleFilesChange"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "userEdit",
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
      },
    };
  },
  methods: {
    fetchUser(userId) {
      console.log("fetch user id: ", userId);
      const user = dummyUser.currentUser;
      this.user = {
        ...this.user,
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      };
    },
    handleFilesChange(e) {
      const files = e.target.files;
      if (files.length == 0) {
        this.user.image = "";
        return;
      } else {
        // 預覽圖片
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      // 提取資料
      const form = e.target;
      const formData = new FormData(form);
      // 展開送出之表單資料
      for (let [name, value] of formData.entries()) {
        console.log(name, value);
      }
      this.$router.push({ name: "user", params: { id: this.user.id } });
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>