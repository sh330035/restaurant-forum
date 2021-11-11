<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="userImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">{{ email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ commentsCount }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ favoritedRestaurantsCount }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ followingsCount }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ followersCount }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link
              :to="{ name: 'user-edit', params: { id: currentUser.id } }"
              v-if="currentUser.id == userId"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
            <button
              type="submit"
              v-else-if="currentUser.id != userId && isFollowed"
              @click.stop.prevent="switchFollowing"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              v-else
              @click.stop.prevent="switchFollowing"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    commentsCount: {
      type: Number,
      required: true,
    },
    favoritedRestaurantsCount: {
      type: Number,
      required: true,
    },
    followersCount: {
      type: Number,
      required: true,
    },
    followingsCount: {
      type: Number,
      required: true,
    },
    currentUser: {
      type: Object,
    },
    isFollowed: {
      type: Boolean,
    },
  },
  methods: {
    switchFollowing() {
      this.$emit("after-switch-following");
    },
  },
};
</script>