<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
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
              @click.stop.prevent="toggleIsAdmin(user.id)"
              v-if="!user.isAdmin"
              class="btn btn-link"
            >
              set as admin
            </button>
            <button
              type="button"
              @click.stop.prevent="toggleIsAdmin(user.id)"
              v-if="user.isAdmin && user.name !== 'root'"
              class="btn btn-link"
            >
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
      isAdmin: true,
      image: "http://via.placeholder.com/300x300?text=No+Image",
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$GIxolQfpf9TjjTIi.XojP..kn.hBu5GjRhlUuv6Hey7yqNKyZbLhG",
      isAdmin: false,
      image: null,
      createdAt: "2021-11-03T15:01:36.000Z",
      updatedAt: "2021-11-03T15:01:36.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    toggleIsAdmin(userId) {
      console.log(userId);
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
};
</script>