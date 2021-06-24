import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    showDrawer: false,
    selectedFile: null,
    originalImg: null,
    convertedImg: null,
    grayImg: null,
    editedImgList: [],
    originalX: null,
    originalY: null,
    setColor: null,
    markers: [],
    timestamp: null,
  },
  mutations: {},
  actions: {},
  modules: {}
});