// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <img :src="user.image" width="140px" height="140px" />
          </router-link>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary bg-black"
            >追蹤人數：{{ user.FollowerCount }}</span
          >
          <p class="mt-3">
            <button
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowed(user.id)"
              v-if="user.isFollowed"
            >
              取消追蹤
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowed(user.id)"
              v-else
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import Spinner from "../components/Spinner.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "users",
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getTopUsers();
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "資料無法匯入，請稍後再試",
        });
      }
    },
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        // console.log("data", data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 用 map 將符合按鈕之 user id 者，改變狀態
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              FollowerCount: user.FollowerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              FollowerCount: user.FollowerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>