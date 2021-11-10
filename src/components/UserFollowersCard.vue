<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followersCount }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        class="mr-2"
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followers: {
      type: Array,
      required: true,
    },
    followersCount: {
      type: Number,
      required: true,
    },
  },
};
</script>