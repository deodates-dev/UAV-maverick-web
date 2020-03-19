import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    // dark: this.$store.state.darkUi,
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.base,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  },
  options: {
    customProperties: true,
  },
  icons: {
    iconfont: 'mdi',
  }
})