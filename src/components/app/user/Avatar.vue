<template>
   <v-avatar
       color="green"
       size="48"
   >
      <img
          alt="Avatar"
          :src="src"
      >
   </v-avatar>
</template>

<script>
export default {
   name: "Avatar",
   props: {
      src: {type: String}
   },
}
</script>

<style scoped>

</style>