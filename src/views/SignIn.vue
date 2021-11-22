// ./src/views/SignIn.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "signIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    handleSubmit() {
      this.isProcessing = true;
      // 若帳號密碼為空值，直接 return + Toast，不用進到後端驗證
      if (!this.email || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請輸入帳號與密碼",
        });
        return;
      }

      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // promise
          const { data } = response;

          if (data.status !== "success") {
            // 丟出錯誤訊息，進到 catch 中
            throw new Error(data.message);
          }

          localStorage.setItem("token", data.token);

          this.$router.push("/restaurants"); /*轉址*/
        })
        .catch((error) => {
          // 清空密碼
          this.isProcessing = false;
          this.password = "";
          // 警示訊息
          Toast.fire({
            icon: "warning",
            title: "帳號或密碼錯誤",
          });

          console.log(error);
        });
    },
  },
};
</script>