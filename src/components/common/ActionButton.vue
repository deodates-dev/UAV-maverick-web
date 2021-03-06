<template lang='pug'>
v-card.transparent

  v-speed-dial(v-model="navfab" direction="top" fixed=true bottom=true right=true open-on-hover=false)
    template(v-slot:activator)
      v-btn(:color="navColor" dark fab v-model="navfab")
        v-icon(v-if="navfab") mdi-close
        v-icon(v-else v-html="navIcon")
    // Create icon for each enabled module
    template(v-for="(data, key) in $store.state.core.modules" v-if="$store.state.data.modulesActive[key] == true")
      v-tooltip(v-if="(moduleName !== key)" left)
        template(v-slot:activator="{ on }")
          v-btn(dark fab :small="(moduleName !== key)" :color="data.color" :to="'/' + key" v-on="on")
            v-icon(v-text="data.icon")
        span {{ key | capitalize }}
    v-tooltip(left)
      template(v-slot:activator="{ on }")
        v-btn(dark fab small :color="(navState) ? navColor : 'grey'" @click="toggleNavState" v-on="on")
          v-icon(v-if="navState") mdi-swap-vertical-bold
          v-icon(v-else) mdi-swap-vertical
      span Top Nav
    v-tooltip(left)
      template(v-slot:activator="{ on }")
        v-btn(dark fab small :color="(fullScreen) ? navColor : 'grey'" @click="toggleFullScreen" v-on="on")
          v-icon(v-if="fullScreen") mdi-fullscreen
          v-icon(v-else) mdi-fullscreen-exit
      span Fullscreen

  v-speed-dial(v-model="navfab" direction="left" fixed=true bottom=true right=true open-on-hover=false)
    template(v-slot:activator)
      v-btn(:color="navColor" dark fab v-model="navfab")
        v-icon(v-if="navfab") mdi-close
        v-icon(v-else v-html="navIcon")
    // Cockpit specific actions
    template(v-if="(moduleName === 'cockpit')")
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-btn(dark fab small :color="(cockpitMapState) ? navColor : 'grey'" @click="toggleMap" v-on="on")
            v-icon mdi-map-marker
        span Map
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-btn(dark fab small :color="(cockpitHudState) ? navColor : 'grey'" @click="toggleHud" v-on="on")
            v-icon mdi-surround-sound
        span HUD
    // Planner specific actions
    template(v-if="(moduleName === 'planner')")
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-btn(dark fab small :color="(plannerViewState) ? navColor : 'grey'" @click="toggleView" v-on="on")
            v-icon mdi-rotate-3d
        span 2D/3D View
</template>

<script>
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'

Vue.use(fullscreen)

export default {
  data () {
    return {
      navfab: false
    }
  },
  computed: {
    // Global states
    navState () {
      return this.$store.state.data.navState
    },
    fullScreen () {
      return this.$store.state.fullScreen
    },
    // Config states
    cockpitMapState () {
      return this.$store.state.cockpit.mapState
    },
    cockpitHudState () {
      return this.$store.state.cockpit.hudState
    },
    // Planner states
    plannerViewState () {
      return this.$store.state.planner.viewState
    }
  },
  methods: {
    toggleNavState () {
      this.$store.commit('data/setNavState', !this.navState)
    },
    toggleFullScreen () {
      this.$store.commit('setFullScreen', !this.fullScreen)
      this.$fullscreen.toggle(document.querySelector('#fullscreen'), {
        wrap: true
      })
    },
    toggleMap () {
      this.$store.commit('cockpit/setMapState', !this.cockpitMapState)
    },
    toggleHud () {
      this.$store.commit('cockpit/setHudState', !this.cockpitHudState)
    },
    toggleView () {
      this.$store.commit('planner/setViewState', !this.plannerViewState)
    }
  }
}
</script>
