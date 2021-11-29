<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <Spinner v-if="isLoading" />
      <template v-else>
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" width="140">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin | adminOrUser }}</td>
            <td>
              <button
                type="button"
                @click.stop.prevent="toggleIsAdmin(user.id, user.isAdmin)"
                v-if="!user.isAdmin"
                class="btn btn-link"
              >
                set as admin
              </button>
              <button
                type="button"
                @click.stop.prevent="toggleIsAdmin(user.id, user.isAdmin)"
                v-if="user.isAdmin && user.name !== 'root'"
                class="btn btn-link"
              >
                set as user
              </button>
            </td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import Spinner from "../components/Spinner.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
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
        const { data } = await adminAPI.users.get();
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得用戶資料，請稍後再試",
        });
      }
    },
    async toggleIsAdmin(userId, isAdmin) {
      try {
        const { data } = await adminAPI.users.toggleRole({
          userId,
          // api 僅吃字串檔案
          isAdmin: (!isAdmin).toString(),
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 前端畫面變更
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          } else {
            return user;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法變更用戶權限，請稍後再試",
        });
      }
    },
  },
  filters: {
    adminOrUser: function (isAdmin) {
      if (isAdmin) {
        return "Admin";
      } else {
        return "User";
      }
    },
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>