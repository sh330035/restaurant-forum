<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followingsCount }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        class="mr-2"
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      required: true,
    },
    followingsCount: {
      type: Number,
      required: true,
    },
  },
};
</script>