// This vuex module contains data that *should* be persisted

import Vue from 'vue'

const state = {
  apis: {},
  darkUi: true,
  navDrawer: true,
  navColor: null,
  navState: true,
  navIcon: false,
  moduleName: null,
  bingMapsKey: 'AgXa-GFmIi0y2SeDifLy5FsDF2V6cVINsnrAT9RtBLdsOGkStZSXL_MBwATgvyO6',
  videostreams: {},
  modulesActive: {
    'cockpit': false,
    'planner': false,
    'analysis': false,
    'config': true,
    'maverick': true,
    'video': true
  }
}

const mutations = {
  addApi (state, data) {
    Vue.set(state.apis, data.key, data.data)
  },
  setApiData (state, data) {
    state.apis[data.api] = data.data
  },
  removeApi (state, key) {
    Vue.delete(state.apis, key)
  },
  setDarkUi (state, value) {
    state.darkUi = value
  },
  setNavColor (state, color) {
    state.navColor = color
  },
  setNavIcon (state, value) {
    state.navIcon = value
  },
  setNavDrawer (state, value) {
    state.navDrawer = value
  },
  setNavState (state, value) {
    state.navState = value
  },
  setModuleName (state, value) {
    state.moduleName = value
  },
  addVideoStream (state, data) {
    Vue.set(state.videostreams, data.key, data.data)
  },
  updateVideoStream (state, data) {
    state.videostreams[data.key] = data.data
  },
  removeVideoStream (state, key) {
    Vue.delete(state.videostreams, key)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
