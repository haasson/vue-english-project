<template>
   <v-menu bottom min-width="200px" rounded offset-y>
      <template v-slot:activator="{ on }">
         <v-btn icon x-large v-on="on">
            <Avatar/>
         </v-btn>
      </template>
      <v-card>
         <v-list nav >
            <v-list-item>
               <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                     <Avatar/>
                     <h3 class="mt-1">John N</h3>
                     <p class="caption mt-1">g@ksdjh.ru</p>
                  </div>
               </v-list-item-content>
            </v-list-item>

            <v-divider class="my-3"></v-divider>

            <v-list-item-group
                color="primary"
            >
               <v-list-item
                   v-for="item in items"
                   :key="item.to"
               >
                  <v-list-item-icon>
                     <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                     <router-link :to="item.to" tag="span">
                        <v-list-item-title v-text="$t(item.token)"></v-list-item-title>
                     </router-link>
                  </v-list-item-content>
               </v-list-item>
            </v-list-item-group>
         </v-list>
      </v-card>
   </v-menu>
</template>

<script>
import Avatar from "@/components/app/user/Avatar";

export default {
   name: "UserDropdown",
   components: {Avatar},
   data() {
      return {
         items: [
            {token: 'settings', icon: 'mdi-folder', to: '/settings'},
            {token: 'statistic', icon: 'mdi-account-multiple', to: '/stat'},
            {token: 'logout', icon: 'mdi-star', to: '/logout'}
         ],
      }
   },
}
</script>

<style scoped>

</style>