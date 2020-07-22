export const state = () => ({
  menu: []
});

export const actions = {
  async nuxtServerInit({ dispatch }) {
      await dispatch('fetchMenu');
  },
  async fetchMenu({ commit, error }) {
      try {
          const menu = await this.$axios.$get("/wrap/top-menu");
          commit('setMenu', menu);
      } catch (err) {
          console.log("err === " + err);
          console.log("error === " + ctx.error);
          throw (err)
      }
  }
}

export const getters = {
  menu: state => state.menu,
}

export const mutations = {
  setMenu(state, menu) {
      state.menu = menu;
  }
}

export const strict = false;
