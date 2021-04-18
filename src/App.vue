<template>
   <vApp>
      <component :is="layout">
         <router-view/>
      </component>
   </vApp>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
   name: 'App',
   components: {EmptyLayout, MainLayout},

   data: () => ({
      //
   }),
   computed: {
      layout() {
         return this.$route.meta.layout === "empty" ? "empty-layout" : "main-layout"
      }
   }
};
</script>
