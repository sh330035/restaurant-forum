<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          v-if="currentUser.isAdmin"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <a href="#">{{ comment.User.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

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
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  mixins: [fromNowFilter],
  // filters: {
  //   fromNow(datetime) {
  //     if (!datetime) {
  //       return "-";
  //     }
  //     return moment(datetime).fromNow();
  //   },
  // },
};
</script>

<style scoped>
.float-right {
  float: right;
}
</style>