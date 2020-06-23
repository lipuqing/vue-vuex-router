import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    countNumber(state, n) {
      state.number += n * 1;
    }
  },
  actions: {
    funNumber(context, obj) {
      // 单项调用  区别 页面引用方法不同
      context.commit("countNumber", obj);
    },
    curNumber({ commit }, obj) {
      // 方法映射 区别 页面引用方法不同
      commit("countNumber", obj);
    }
  },
  modules: {}
});
