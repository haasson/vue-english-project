import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
   theme: {
      defaultTheme: 'light',
      themes: {
         light: {
            primary: colors.teal.darken4,
            secondary: colors.grey.darken4,
            accent: colors.teal.lighten1,
            error: colors.red.accent3,
            // anchor: colors.grey.darken4,
         },
         dark: {
            primary: colors.teal.lighten4,
            secondary: colors.grey.darken1,
            accent: colors.teal.darken3,
            error: colors.red.accent3,
            // anchor: colors.grey.darken4,
         },
      },
   },
});
