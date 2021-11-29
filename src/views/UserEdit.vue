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

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import store from "../store";

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
      isProcessing: false,
    };
  },
  // Q：要監聽的話 id 怎麼取? 一般使用狀況應該不會有這個問題?
  // watch: {
  //   currentUser: function () {
  //     this.setUser(id);
  //   },
  //   deep: true,
  // },
  methods: {
    setUser(id) {
      if (id != this.currentUser.id) {
        this.$router.push("Not-Found");
      }
      const user = this.currentUser;
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
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "請輸入正確名稱",
          });
          return;
        }
        this.isProcessing = true;
        // 提取資料
        const form = e.target;
        const formData = new FormData(form);
        const { id } = this.$route.params;
        // 展開送出之表單資料
        const { data } = await usersAPI.update({ userId: id, formData });
        store.dispatch("fetchCurrentUser");
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        console.log(error);
        Toast.fire({ icon: "error", title: "無法修改用戶資料，請稍後再試" });
        this.isProcessing = false;
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>