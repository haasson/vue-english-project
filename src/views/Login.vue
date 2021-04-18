<template>
   <v-card :loading="loading" class="modal-wrap mx-auto my-12">
      <v-card-title>{{ $t('welcome-title') }}</v-card-title>
      <v-card-text>{{ $t('welcome-text') }}</v-card-text>
      <v-btn
          color="accent"
          class="ma-2 white--text"
          :disabled="loading"
          @click="login"
      >
         <v-icon left>mdi-google</v-icon>
         {{ $t('login-with-google') }}
      </v-btn>
   </v-card>
</template>

<script>

export default {
   data() {
      return {
         loading: false
      }
   },
   methods: {
      async login() {
         try {
            this.loading = true
            await this.$store.dispatch("loginWithGoogle")
            this.$router.push('/')
         } finally {
            this.loading = false
         }

      }
   }
}
</script>

<style scoped>
.modal-wrap {
   max-width: 500px;
   padding: 20px;
   /*background-color: #fff;*/
}
</style>