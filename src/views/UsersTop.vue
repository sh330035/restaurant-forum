// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
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
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dammyData = {
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
  name: "users",
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dammyData.users;
    },
    addFollowed(id) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users[i].isFollowed = true;
          return;
        }
      }
    },
    deleteFollowed(id) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users[i].isFollowed = false;
          return;
        }
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>