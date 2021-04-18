<template>
   <div>
      <Navbar/>
      <v-main>
         <v-container>
            <v-row align="center">
               <v-col class="d-flex" cols="5">
                  <router-view/>
               </v-col>
            </v-row>
         </v-container>
      </v-main>
   </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
export default {
   components: {
      Navbar
   },
   async mounted() {
      if (!this.$store.getters.isUser) {
         await this.$store.dispatch("setCurrentUser")
      }
   },
}
</script>

<style scoped>

</style>