<template>
   <vAppBar app color="accent">
      <router-link to="/" tag="div" class="logo">English App</router-link>
      <v-spacer></v-spacer>
      <UserBlock />
   </vAppBar>
</template>

<script>
import UserBlock from "@/components/app/user/UserBlock";

export default {
   name: 'Navbar',
   components: {UserBlock}
}
</script>

<style scoped>
.logo {
   display: flex;
   align-items: center;
   font-size: 22px;
   cursor: pointer;
}
</style>