<template>
   <v-avatar
       color="green"
       size="48"
   >
      <img
          v-if="avatar"
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      >
      <span v-else class="white--text headline">JN</span>
   </v-avatar>
</template>

<script>
export default {
   name: "Avatar",
   data() {
      return {
         avatar: true
      }
   },
}
</script>

<style scoped>

</style>