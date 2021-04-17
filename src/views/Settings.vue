<template>
   <div class="about">
      <h1>{{ $t('settings') }}</h1>
      <v-switch
          v-model="$vuetify.theme.dark"
          inset
          :label="$t('use-dark-theme')"
      ></v-switch>
      <v-switch
          :value="isRuLocale"
          @change="changeLocale"
          inset
          :label="$t('switch-language')"
      ></v-switch>
   </div>


</template>

<script>
export default {
   data() {
      return {
         isRuLocale: this.$i18n.locale === "ru"
      }
   },

   methods: {
      changeLocale() {
         this.$i18n.locale = this.$i18n.locale === 'ru' ? 'en' : 'ru'
      }
   }
}
</script>
