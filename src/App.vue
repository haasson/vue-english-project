<template>
   <v-theme-provider root>
      <vApp>
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
      </vApp>
   </v-theme-provider>
</template>

<script>

import Navbar from "@/components/app/Navbar";

export default {
   name: 'App',

   components: {
      Navbar
   },

   data: () => ({
      //
   }),
};
</script>
